const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')

//CHECK THE ENVIRONMENT

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

console.log('Environment :', process.env.NODE_ENV)
if (process.env.NODE_ENV === 'test') {
  require('dotenv').config({ path: '.env.test' })
} else if (process.env.NODE_ENV === 'development') {
  require('dotenv').config({ path: '.env.development' })
}

//MODULE EXPORTS
module.exports = env => {
  const isProduction = process.env.NODE_ENV === 'production'

  return {
    // mode: 'development', //mode [development,production,...]
    devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map', // show original source code so we don't get lost inside bundle.js when errors happen
    entry: './src/app.js', //which file to use as entry
    output: {
      path: path.join(__dirname, 'public', 'dist'),
      filename: 'bundle.js' //final file name
    },
    //Plugins that have access to change and work with your existing
    // Webpack build
    plugins: [
      new MiniCssExtractPlugin(),
      new webpack.DefinePlugin({
        'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
        'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
        'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
        'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
        'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
        'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
        'process.env.FIREBASE_API_ID': JSON.stringify(process.env.FIREBASE_API_ID),
        'process.env.FIREBASE_MEASUREMENT_ID': JSON.stringify(process.env.FIREBASE_MEASUREMENT_ID)
      })
    ],
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
          use: [
            //use allows as to give an array of entries
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
      historyApiFallback: true, //We gonna handle routing from client side
      publicPath: '/dist/'
    }
  }
}
