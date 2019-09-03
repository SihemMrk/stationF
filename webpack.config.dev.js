"use strict";
const { VueLoaderPlugin } = require("vue-loader");
module.exports = {
  mode: "development",
  entry: ["./client/main.js"],
  module: {
    rules: [
      // ... other rules
      {
        test: /\.vue$/,
        use: "vue-loader"
      },
      {
        test: /\.js$/,
        use: "babel-loader"
      },
      // this will apply to both plain .css files
      // AND <style> blocks in .vue files
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    // make sure to include the plugin!
    new VueLoaderPlugin()
  ]
};
