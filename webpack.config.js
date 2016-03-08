var path = require("path");
var webpack = require("webpack");
var CommonsChunkPlugin = require("./node_modules/webpack/lib/optimize/CommonsChunkPlugin");

var context = path.join(__dirname, 'webpack', 'src');
var buildPath = path.join(__dirname, 'webpack', 'build');

module.exports = {
  context: context,
  entry: {
    index: './index',
    index2: './index2'
  },
  output: {
    path: buildPath,
    filename: "[name].js"
  },
  plugins: [
    // new CommonsChunkPlugin({
    //   name: "vendor"
    // })
  ]
};