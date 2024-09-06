const path = require('path');

const rspack = require('@rspack/core');

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [{
      test: /\.m?js/,
      type: 'javascript/auto',
      resolve: {
        fullySpecified: false
      }
    }, {
      test: /\.(j|t)s$/,
      exclude: [/[\\/]node_modules[\\/]/],
      loader: 'builtin:swc-loader',
      options: {
        jsc: {
          parser: {
            syntax: 'typescript'
          },
          externalHelpers: true
        },
        env: {
          targets: 'Chrome >= 48'
        }
      }
    }, {
      test: /\.tsx$/,
      loader: 'builtin:swc-loader',
      exclude: [/[\\/]node_modules[\\/]/],
      options: {
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true
          },
          transform: {
            react: {
              runtime: 'automatic'
            }
          },
          externalHelpers: true
        },
        env: {
          targets: 'Chrome >= 48'
        }
      }
    }, {
      test: /\.d\.ts$/,
      loader: 'ignore-loader'
    }, {
      test: /\.(jpe?g|png|gif|ico|pdf|eot|svg|ttf|woff(2)?)$/,
      type: 'asset/resource'
    }]
  },
  resolve: {
    extensions: [
      '.tsx',
      '.ts',
      '.js',
      '.cjs',
      '.mjs'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  plugins: [
    new rspack.HtmlRspackPlugin({
      filename: 'index.html',
      title: 'Hello World',
      template: path.join(__dirname, 'resources', 'template', 'index.ejs'),
      templateParameters: {
        appPrefix: process.env.HTML_BASE_URL ?? ''
      },
      favicon: path.join(__dirname, 'resources', 'public', 'favicon.ico'),
      meta: {
        charset: 'utf-8',
        viewport: 'user-scalable=no, width=device-width, initial-scale=1, shrink-to-fit=no'
      }
    })
  ],
  experiments: {
    css: true
  }
};
