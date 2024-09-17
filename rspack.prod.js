const path = require('path');

const rspack = require('@rspack/core');

const {
  merge
} = require('webpack-merge');

const common = require('./rspack.common.js');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new rspack.CopyRspackPlugin({
      patterns: [
        {
          from: path.join(__dirname, 'resources', 'public'),
          to: '.'
        }
      ]
    })
  ].filter(Boolean),
  output: {
    filename: '[name].[contenthash].js'
  },
  optimization: {
    runtimeChunk: {
      name: 'manifest'
    }
  }
});
