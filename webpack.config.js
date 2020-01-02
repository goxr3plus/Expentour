const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
  const isProduction = env === 'production'

  return {
    // mode: 'development', //mode [development,production,...]
    devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map', // show original source code so we don't get lost inside bundle.js when errors happen
    entry: './src/app.js', //which file to use as entry
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js' //final file name
    },
    //Plugins that have access to change and work with your existing
    // Webpack build
    plugins: [new MiniCssExtractPlugin()],
    //Customize the behaviour of webpack when it loads a specific file
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader' //loader allows as to give only one entry
        },
        {
          test: /\.s?css$/, // accept both css and scss
          use: [ //use allows as to give an array of entries
            'style-loader', // creates style nodes from JS strings
            MiniCssExtractPlugin.loader,
            'css-loader', // translates CSS into CommonJS
            'sass-loader' // compiles Sass to CSS, using Node Sass by default
          ]
        }
      ]
    },
    // use dev server
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      watchContentBase: true, //Live Reload on file change
      compress: false, //compress bundle.js
      port: 9000, //final application running port [localhost:9000]
      historyApiFallback: true //We gonna handle routing from client side
    }
  }
}
