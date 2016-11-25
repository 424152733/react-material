var webpack = require('webpack')
var path = require('path')
module.exports = {
    output: {
	    filename: 'bundle.js?hash=[hash]',
	    //js打包输出目录，以package.json为准，相对路径
	    path: path.resolve(__dirname,'./../public/js'),
	    //内存和打包静态文件输出目录，以index.html为准,绝对路径
	    publicPath: '/js/',
	    //定义require.ensure文件名
	    chunkFilename: '[name]-[id]-[chunkHash].chunk.js',
    },

    resolve: {
    	extensions: ['', '.js', '.jsx']
  	},

    module: {
      loaders: [
        //limit是base64转换最大限制，小于设置值，都会转为base64格式
        { 
          test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, //匹配图片或字体格式的文件
          //[path]是以publicPath为准
          loader: 'url-loader',
          query: {
            limit: 50000,
            name: "images/[name].[hash].[ext]",
          }
        },
        { 
          //匹配.js或.jsx后缀名的文件
          test: /\.js[x]?$/, 
          loader: 'babel',
          exclude: /node_modules/,
        },
      ],
    },

    plugins: [
      new webpack.NoErrorsPlugin()
    ]
}