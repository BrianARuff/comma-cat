const path = require("path");

module.exports = {
  entry: {
    app: path.resolve(__dirname, "comma-cat-max.js")
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "comma-cat.js"
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["@babel/preset-env"]
        }
      }
    ]
  },
  mode: "production"
}