var path = require("path");
var webpack = require("webpack");
var CommonsChunkPlugin = require("./node_modules/webpack/lib/optimize/CommonsChunkPlugin");

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
        loader: "style!css!"
      },
      {
        test: /\.less$/,
        loader: "style!css!less"
      }
    ]
  },
  plugins: [
    new CommonsChunkPlugin({
      name: "reactlib",
      minChunks: Infinity
    })
  ]
};