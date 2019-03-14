const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './src/app.ts',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'docs'),
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './docs'
  },
  resolve: {
    extensions: ['.wasm', '.mjs', '.js', '.json', '.ts']
  },
  module: {
    rules: [
      { test: /\.ts$/, loader: 'ts-loader' },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new MiniCssExtractPlugin({ filename: "[name].css" })
  ],
};