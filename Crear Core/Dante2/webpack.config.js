const path = require('path')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack')

module.exports = {
  entry: {
    home: path.resolve(__dirname,'index.js'),
  },
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  devServer: {
    hot: true,
    open: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCSSExtractPlugin.loader
          },
          'css-loader',
          'postcss-loader',
        ]
      }
    ]
  },
  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  plugins: [
    new CompressionWebpackPlugin({
      test: /\.js$|\.css$/,
      filename: '[path][base].gz',
    }),
    new MiniCSSExtractPlugin({
      filename: '[name].css'
    })
  ]
}