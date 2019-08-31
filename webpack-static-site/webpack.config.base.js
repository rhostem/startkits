var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var Dotenv = require('dotenv-webpack')
var basePath = __dirname

// 페이지 메인으로 사용할 스크립트 파일
var chunks = {
  index: './js/index.js',
  anotherPage: './js/anotherPage.js',
}

var chunkNames = Object.keys(chunks)

/**
 *
 * @param {*} chunkNameToInclude
 */
function getChunksToExcludeExcept(chunkNameToInclude = '') {
  var targetIndex = chunkNames.indexOf(chunkNameToInclude)
  var excludes = chunkNames.slice()

  if (targetIndex > -1) {
    excludes.splice(targetIndex, 1)
  }

  return excludes
}

module.exports = {
  context: path.join(basePath, 'src'),
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
  },
  entry: {
    app: ['babel-polyfill', './app.js'],
    // vendor: [],
    // vendorStyles: [],

    // Chunked JS files
    index: './js/index.js',
    anotherPage: './js/anotherPage.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.pug$/,
        use: [
          {
            loader: 'html-loader',
          },
          {
            loader: 'pug-html-loader',
            options: {
              data: {},
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                // css module을 사용하지 않음
                // modules: true,
                // localIdentName: '[name]__[local]___[hash:base64:5]',
                // camelCase: true,
              },
            },
            { loader: 'sass-loader' },
          ],
        }),
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: {
            loader: 'css-loader',
          },
        }),
      },
      // Loading glyphicons => https://github.com/gowravshekar/bootstrap-webpack
      // Using here url-loader and file-loader
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream',
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml',
      },
    ],
  },
  plugins: [
    new Dotenv({
      path: './.env.development', // Path to .env file (this is the default)
      safe: true, // load .env.example (defaults to "false" which does not use dotenv-safe)
    }),

    // Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      title: 'index Page',
      filename: 'index.html', // Name of file in ./dist/
      template: './index.html', // Name of template in ./src
      hash: true,
      excludeChunks: getChunksToExcludeExcept('index'),
    }),
    new HtmlWebpackPlugin({
      title: 'Another Page',
      filename: 'anotherPage.html',
      template: './page/anotherPage.pug',
      hash: true,
      excludeChunks: getChunksToExcludeExcept('anotherPage'),
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'commons',
      minChunks: 2, // (Modules must be shared between 3 entries)
      // chunks: ["pageA", "pageB"], // (Only use these entries)
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['manifest'],
    }),
    new webpack.HashedModuleIdsPlugin(),
  ],
}
