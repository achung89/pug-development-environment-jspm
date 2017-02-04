var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
module.exports = {
  // your config settings ...
  entry:'./src/append.js',
  output: {
    path: 'dist',
    publicPath:'/dist',
    filename: "bundle.js"
  },
  module: {
    // figure out how to extract css+html text and put here later
    // rules: {
    //   test:/\.scss/,
    // },
    loaders: [
       {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.css$/,
        loaders: ["style-loader", "css-loader"]
      },
      {
        include: /\.pug/,
        // pass options to pug as a query ('pug-html-loader?pretty')
        loader: 'pug-html-loader',
      }
    ]
  }
};