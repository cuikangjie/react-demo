const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');

const resolve = (file) => {
  return path.resolve(__dirname, file)
}

module.exports = function(__DEV__) {
  return {
    entry: {
      vendor: [
        'react', 'react-dom'
      ],
      app: resolve('../src/app.js')
    },
    output: {
      path: resolve('../build/'),
      publicPath: '',
      filename: '[name].[hash:8].js',
      chunkFilename: '[name].[chunkhash:8].chunk.js'
    },
    devtool: __DEV__
      ? '#eval-source-map'
      : false,
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          include: [resolve('../src')]
        }, {
          test: /\.css$/,
          exclude: /node_modules/,
          include: path.join(__dirname, "../"),
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [
              {
                loader: 'css-loader',
                options: {
                  minimize: !__DEV__,
                  modules: true,
                  localIdentName: "[name]__[local]___[hash:base64:5]"
                }
              }, {
                loader: 'postcss-loader',
                options: {
                  config: {
                    path: resolve('./postcss.config.js')
                  }
                }
              }
            ]
          })
        },
        // {
        //   test: /\./
        // }

      ]
    },
    plugins: [
      new ExtractTextPlugin({filename: 'app.css', allChunks: true}),
      new HtmlWebpackPlugin({filename: 'index.html', template: resolve('../template/index.html'), inject: true}),
      new webpack.optimize.CommonsChunkPlugin({name: ['vendor']}),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: __DEV__
            ? '"development"'
            : '"production"'
        }
      }),
      ...(__DEV__
        ? [new webpack.HotModuleReplacementPlugin()]
        : [
          new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
              warnings: false,
              drop_debugger: true,
              drop_console: true
            }
          }),
          new webpack.LoaderOptionsPlugin({minimize: true}),
          new BundleAnalyzerPlugin()
        ])
    ]
  }
}
