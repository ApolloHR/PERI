var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, './Client/dst');
var APP_DIR = path.resolve(__dirname, './Client/src');

var config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
          plugins: ['transform-decorators-legacy']
        }
      }
    ]
  },
};

module.exports = config;