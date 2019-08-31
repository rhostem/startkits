var webpackMerge = require('webpack-merge')
var commonConfig = require('./webpack.config.base.js')
var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var CompressionPlugin = require('compression-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var Dotenv = require('dotenv-webpack')

var basePath = __dirname

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-source-map',
  output: {
    path: path.join(basePath, 'dist'),
    filename: '[chunkhash].[name].js',
  },
  plugins: [
    new Dotenv({
      path: './.env.production', // Path to .env file (this is the default)
      safe: true, // load .env.example (defaults to "false" which does not use dotenv-safe)
    }),

    new ExtractTextPlugin({
      filename: '[chunkhash].[name].css',
      disable: false,
      allChunks: true,
    }),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      minRatio: 0.8,
    }),
    new CopyWebpackPlugin([
      { from: path.join(basePath, 'static'), to: path.join(basePath, 'dist/static') },
    ]),
  ],
})
