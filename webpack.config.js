var Webpack = require('webpack');
var StatsPlugin = require('stats-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require('autoprefixer-core');
var csswring = require('csswring');
var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var assetsPath = path.resolve(__dirname, 'public', 'assets');
var entryPath = path.resolve(__dirname, 'app', 'app.es6.js');
var host = process.env.APP_HOST || 'localhost';

var config = {

  // Makes sure errors in console map to the correct file
  // and line number
  devtool: 'eval',
  entry: [

    // For hot style updates
    'webpack/hot/dev-server',

    // The script refreshing the browser on none hot updates
    'webpack-dev-server/client?http://' + host + ':3001',

    // Our application
    entryPath
  ],
  output: {
    path: assetsPath,
    filename: 'bundle.js'
  },
  module: {

    loaders: [
        { test: /\.es6.js$/, loader: 'babel-loader' },
        {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('css?sourceMap!postcss-loader?sourceMap')
        },
        {
            test: /\.less$/,
            loader: ExtractTextPlugin.extract('css?sourceMap!postcss-loader?sourceMap!less?sourceMap')
        },
        {
            test: /\.html$/,
            loader: 'html-loader'
        },
        {
          test: /\.scss$/,
          loaders: ['style-loader', 'css-loader', 'postcss-loader']
        },

        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image?bypassOnDebug&optimizationLevel=7&interlaced=false'
          ]
        },

        {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader',
        },

      {
      test: /\.(gif|png|jpe?g|svg)$/i,
      loaders: [
        'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
        'image-webpack-loader?{optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}, mozjpeg: {quality: 65}}'
      ]
      }



      // {
      //       test: /\.scss$/,
      //       use: [{
      //           loader: "style-loader" // creates style nodes from JS strings
      //       }, {
      //           loader: "css-loader" // translates CSS into CommonJS
      //       }, {
      //           loader: "sass-loader" // compiles Sass to CSS
      //       }]
      //   }

      ]
  },

  postcss: [autoprefixer, csswring],

  plugins: [
    // We have to manually add the Hot Replacement plugin when running
    // from Node
    new ExtractTextPlugin("styles.css"),
    new Webpack.HotModuleReplacementPlugin(),

    new Webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default'],
        // In case you imported plugins individually, you must also require them here:
        Util: "exports-loader?Util!bootstrap/js/dist/util",
        Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",

      })
  ],



};

module.exports = config;
