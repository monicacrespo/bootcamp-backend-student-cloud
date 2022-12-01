const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const helpers = require('./helpers');

module.exports = merge(
  {},
  {
    context: helpers.resolveFromRootPath('src'),
    resolve: {
      extensions: ['.js', '.ts', '.tsx'],
    },
    entry: {
      app: ['regenerator-runtime/runtime', './app.js'],
    },
    output: {
      path: helpers.resolveFromRootPath('dist'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'index.html',
      }),
    ],
  }
);