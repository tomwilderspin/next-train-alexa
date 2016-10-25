var path = require('path');

module.exports = {
  entry: {
    nextTrain: "./functions/alexa/nextTrain.js",
  },
  target: 'node',
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: __dirname,
      exclude: /node_modules/,
    }]
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js'
  },
  externals: [
    'aws-sdk'
  ]
};
