var webpack = require('webpack')
var path = require('path')
var merge = require('@ersinfotech/merge');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin')
var baseConfig = require('./webpack.config.js')

module.exports = merge(baseConfig, {
	devtool: '#source-map',
	entry: {
    	app: [
    	 './src/index.js'
        ],
    },

    module: {
      loaders: [
        //匹配到rquire中以.css结尾的文件则直接使用指定loader
        { 
          test: /\.css$/, 
          loader: ExtractTextPlugin.extract("style", "css"), 
        },
        { 
          test: /\.scss$/, 
          loader: ExtractTextPlugin.extract("style", "css?modules&localIdentName=[hash:base64:5]!sass"), 
        }
      ]
    },

    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production'), 
      }),
      new HtmlWebpackPlugin({
      	title: 'first react app',
        template: 'html_template/index.html',
        filename: './../index.html',
        inject: false,
        minify: {
        html5: true,
	        collapseWhitespace: true,
	        removeComments: true,
	        removeTagWhitespace: true,
	        removeEmptyAttributes: true,
	        removeStyleLinkTypeAttributes: true,
      	}
      }),
      new webpack.optimize.UglifyJsPlugin({
	      compress: {
	          warnings: false
	      }
	  }),
	  new ExtractTextPlugin('../css/styles.css?hash=[hash]', {
      	 allChunks: true
      })
    ]
})