var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dest');
var APP_DIR = path.resolve(__dirname, 'webapp');

var config = {
  entry: APP_DIR + '/Main.jsx',
  devtool: 'cheap-module-source-map',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader'
      }
    ]
  }
};

module.exports = config;