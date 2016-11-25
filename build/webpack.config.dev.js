var webpack = require('webpack')
var path = require('path')
var merge = require('@ersinfotech/merge');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var baseConfig = require('./webpack.config.js')

module.exports = merge(baseConfig, {
	devtool: '#eval-source-map',
	entry: {
    	app: [
    	  'react-hot-loader/patch',
    	  'webpack-hot-middleware/client',//热替换入口文件
          './src/index.js'
        ],
    },

    module: {
      loaders: [
        //匹配到rquire中以.css结尾的文件则直接使用指定loader
        { 
          test: /\.css$/, 
          loader: "style!css", 
        },
        { 
          test: /\.scss$/, 
          loader: "style!css?modules&localIdentName=[local]-[hash:base64:5]!sass?sourceMap=true", 
        }
      ]
    },

    plugins: [
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.NoErrorsPlugin(),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development'), 
      }),
      new HtmlWebpackPlugin({
      	title: 'first react app',
        template: 'html_template/index.html',
        filename: 'index.html',
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
      new webpack.HotModuleReplacementPlugin()
    ]
})