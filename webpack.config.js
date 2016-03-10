var path = require("path");
var webpack = require("webpack");

var ExtractTextPlugin = require("extract-text-webpack-plugin");

var context = path.join(__dirname, 'webpack', 'src');
var buildPath = path.join(__dirname, 'webpack', 'build');

module.exports = {
  context: context,
  entry: {
    reactlib: ['react', 'react-dom'],
    index: './index.js',
    index2: './index2',
    r1: './r1',
    r2: './r2',
  },
  output: {
    path: buildPath,
    filename: "[name].js"
  },
  resolve: {
    extensions: ["", ".webpack.js", ".web.js", ".js", ".jsx", ".less"]
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "reactlib",
      minChunks: Infinity
    }),
    new ExtractTextPlugin("[name].css")
  ]
};