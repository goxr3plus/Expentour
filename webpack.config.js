const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/playground/redux-101.js", //which file to use as entry
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js" //final file name
  },
  //Customize the behaviour of webpack when it loads a specific file
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader" //loader allows as to give only one entry
      },
      {
        test: /\.s?css$/, // accept both css and scss
        use: [
          //use allows as to give an array of entries
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      }
    ]
  },

  // show original source code so we don't get lost inside bundle.js when errors happen
  devtool: "cheap-module-eval-source-map",

  // use dev server
  devServer: {
    contentBase: path.join(__dirname, "public"),
    watchContentBase: true, //Live Reload on file change
    compress: false, //compress bundle.js
    port: 9000, //final application running port [localhost:9000]
    historyApiFallback: true //We gonna handle routing from client side
  }
};
