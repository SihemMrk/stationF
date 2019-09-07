"use strict";

const express = require("express");
const path = require("path");
const volleyball = require("volleyball");
const app = express();
const fs = require("fs");

// logging middleware
app.use(volleyball);

// body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// static middleware
app.use(express.static(path.join(__dirname, "../public")));

app.post("/searchrooms", async (req, res, next) => {
  console.log(req.body);
  var askedDate = new Date();

  askedDate.setTime(Date.parse(req.body.date));

  const from = req.body.from.split(":").map(Number);
  const to = req.body.to.split(":").map(Number);

  askedDate.setHours(from[0]);
  askedDate.setMinutes(from[1]);

  var today = new Date();

  if (askedDate.getTime() < today.getTime()) {
    res
      .status(500)
      .send(
        "La date selectionée ne peut pas être inférieur à la date actuelle"
      );
    return;
  }

  if (from[0] > to[0]) {
    res
      .status(500)
      .send("L'heure de fin ne peut pas être inférieur à la l'heure de début'");
    return;
  }

  if (from[0] === to[0] && from[1] >= to[1]) {
    res
      .status(500)
      .send("L'heure de fin ne peut pas être inférieur à la l'heure de début'");
    return;
  }
  const seed = path.join(__dirname, "./seed.json");
  const doc = JSON.parse(fs.readFileSync(seed, "utf8"));

  console.log(doc.rooms.length);

  res.send(JSON.stringify(doc.rooms));
});

function isABeforeB(a, b) {
  a = a.split(":").map(Number);
  b = b.split(":").map(Number);
  if (a[0] < b[0]) {
    return true;
  } else if (a[0] == b[0] && a[1] < b[1]) {
    return true;
  }
  return false;
}

app.post("/reserve", async (req, res) => {
  var insert = true;
  const reservation = path.join(__dirname, "./reservation.json");
  const reservationArr = JSON.parse(fs.readFileSync(reservation, "utf8"));
  reservationArr.forEach(reserve => {
    if (req.body.name != reserve.name) {
      return;
    }
    if (req.body.date != reserve.date) {
      return;
    }
    if (
      isABeforeB(req.body.from, reserve.from) &&
      isABeforeB(req.body.from, reserve.to) &&
      isABeforeB(req.body.to, reserve.from) &&
      isABeforeB(req.body.to, reserve.to)
    ) {
      return;
    }
    if (
      isABeforeB(reserve.from, req.body.from) &&
      isABeforeB(reserve.from, req.body.to) &&
      isABeforeB(reserve.to, req.body.from) &&
      isABeforeB(reserve.to, req.body.to)
    ) {
      return;
    }

    insert = false;
  });
  var send = "Réservation impossible";
  if (insert) {
    fs.writeFileSync(reservation, JSON.stringify(reservationArr));
    reservationArr.push(req.body);
    send = "Reservation confirmée";
  }
  res.send(send);
  console.log(reservationArr);
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
}); // Send index.html for any other requests

// error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error");
});

var port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log("Listening on port " + port);
});

module.exports = app;
