"use strict";

const { resolve } = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  entry: ["./client/main"],
  output: {
    path: resolve(__dirname, "dist"),
    filename: "./public/bundle.js"
  },
  mode: "development",
  context: __dirname,
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx", ".vue"]
  },

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
