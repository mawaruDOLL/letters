const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');
const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  target: 'web',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devtool: isDevelopment ? 'inline-source-map' : '',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  devServer: {
    hot: true,
    inline: true,
    port: 5002,
    host: '127.0.0.1',
    contentBase: path.resolve(__dirname, 'build')
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Letters',
    }),
    new HtmlWebpackPartialsPlugin({
      path: path.resolve(__dirname, 'src', 'templatePartials', 'body.html')
    })
  ]
};