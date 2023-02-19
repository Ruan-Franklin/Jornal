const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = (env) => {
  const API_URL = process.env.REACT_APP_API_URL;
  
  return {
    mode: 'development',
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
    },
    devServer: {
      static: path.join(__dirname, 'dist'),
      port: 3000,
      hot: true,
      compress: true,
      allowedHosts: [
        '.gitpod.io',
        'localhost'
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './dist/index.html',
      }),
      new webpack.DefinePlugin({
        'process.env.REACT_APP_API_URL': JSON.stringify(API_URL),
      }),
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
  };
};
