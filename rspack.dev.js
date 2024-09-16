const path = require('path');

const ReactRefreshPlugin = require('@rspack/plugin-react-refresh');

const {
  merge
} = require('webpack-merge');

const common = require('./rspack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    server: 'https',
    hot: true,
    static: path.join(__dirname, 'resources', 'public')
  },
  plugins: [
    new ReactRefreshPlugin()
  ]
});
