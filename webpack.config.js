var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = {
	entry: [
      'webpack/hot/dev-server',
      'webpack-dev-server/client?http://localhost:8080',
      path.resolve(__dirname, 'app/main.js')
    ],
	output:{
		path:path.resolve(__dirname,'build'),
		filename:'bundle.js'
	},
	module: { 
        loaders: [
            { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") },
            { test: /\.js$/,
             exclude: /(node_modules|bower_components)/,
             loader: 'babel?presets[]=react,presets[]=es2015'
            },
            { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
            { test: /\.(png|jpg)$/, loader: 'url?limit=8192'}
        ]
    },
     plugins: [
    new ExtractTextPlugin("[name].css")
  ]
};

module.exports = config;