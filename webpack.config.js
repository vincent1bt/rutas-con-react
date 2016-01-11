var path = require("path")

module.exports = {
  entry: {
    main: path.join(__dirname, "app/js")
  },
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "dist")
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ["es2015", "react"]
        }
      }
    ]
  },
  resolve: {
    root: path.join(__dirname, "app/js"),
    extensions: ["", ".js"],
    moduleDirectories: ["node_modules"]
  },
  debug: true,
  devtool: "source-map",
  devServer: {
    contentbase: path.join(__dirname, "dist")
  }
}