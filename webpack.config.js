var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require("webpack");
var express = require("express");
module.exports = {
  entry: {
    bsp: './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'bsp.js'
  },
  devServer: {
    contentBase: 'dist/',
    inline: true,
    port: 3000,
    historyApiFallback: true,
    noInfo: true,
    setup: function(app) {
      app.use(express.static(path.join(__dirname, 'public')));
    }
  },
  module: {
    loaders: [{
      test: require.resolve("jquery"),
      loader: "expose-loader?$!expose-loader?jQuery"
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.html$/,
      exclude: /node_modules/,
      loader: 'html-loader'
    }, {
      test: /\.json$/,
      exclude: /node_modules/,
      loader: 'json-loader'
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
      loader: 'file-loader',
      options: {
        limit: 10000,
        name: '[name].[ext]?[hash]'
      }
    }, {
      test: /\.(png|jpg|gif|svg)$/,
      loader: 'file-loader',
      options: {
        limit: 10000,
        name: '[name].[ext]?[hash]'
      }
    }]
  },
  resolve: {
    /*extensions: ['', '.js'],*/
    alias: {
      'src': path.resolve(__dirname, '../src'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'components': path.resolve(__dirname, '../src/components')
    }
  },
  devtool: "#eval-source-map",
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new HtmlWebpackPlugin({
      template: "demo.html",
      title: "A Demo Of Tranditional Page",
      filename: "index.html",
      inject: "head"
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    })
  ],
}
if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
    // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ])
}