var path = require("path");
var webpack = require("webpack");

var context=path.join(__dirname,'webpack','src');
var buildPath=path.join(__dirname,'webpack','build');

module.exports = {
  context:context,
	entry: {
    index:'./index'
	},
	output: {
		path: buildPath,
		filename: "[name].js"
	}
};