var express = require("express");
var webpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");
var webpackConfig = require("./webpack.base.config.js");

var app = express();
var compiler = webpack(webpackConfig);

app.use(webpackDevServer(compiler,{
	publicPath:"/"
}))

app.listen(3000,function(){
	console.log("listening in port 3000");
})