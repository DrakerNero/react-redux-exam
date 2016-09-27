var path = require('path')
var webpack = require('webpack')
var DashboardPlugin = require('webpack-dashboard/plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'eval',
  entry: [
    path.join(__dirname, 'src', 'index.js'),
    'eventsource-polyfill',
    'webpack-hot-middleware/client',
  ],
  output: {
    filename: '[name].[hash].js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
  },
  vendors: ['react', 'redux', 'react-redux', 'redux-react-router', 'axios', 'redux-thunk'],
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['react-hot', 'babel?compact=false']},
      { test: /\.(scss|sass)$/, loader: 'style!css!sass'},
      { test: /\.less$/, loader: 'style!css!less'},
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.gif$/, loader: 'url?mimetype=image/png'},
      { test: /\.png$/, loader: 'url?mimetype=image/png'},
      { test: /\.woff(2)?(\?v=[0-9].[0-9].[0-9])?$/, loader: 'url?mimetype=application/font-woff'},
      { test: /\.(ttf|eot|svg)(\?v=[0-9].[0-9].[0-9])?$/, loader: 'file?name=[name].[ext]' }
    ]
  },
  devServer: {
    historyApiFallback: {
      index: '/dist/',
    },
    contentBase: path.join(__dirname, 'dist'),
    host: '0.0.0.0',
    hot: true,
    port: 3370,
  },
  plugins: [
    new DashboardPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ]
}
