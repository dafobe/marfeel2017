const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractCommons = new webpack.optimize.CommonsChunkPlugin({
  name: 'commons',
  filename: 'commons.js'
})

const extractCSS = new ExtractTextPlugin('[name].bundle.css')

const config = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    app: ['./index.js']
  },
   output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/public/',
    filename: '[name].bundle.js'
  },
  module: {
    rules: [{
      test: /\.scss$/,
      include: path.resolve(__dirname, 'src'),
      loader: extractCSS.extract(['css-loader','sass-loader'])
    }, {
      test: /\.js$/,
      include: path.resolve(__dirname, 'src'),
      use: [{
        loader: 'babel-loader',
        options: { presets: ['es2015'] }
      }]
    }]
  },
  watch: true,
  watchOptions: {
    poll: true
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    extractCommons,
    extractCSS
  ]
}

module.exports = config