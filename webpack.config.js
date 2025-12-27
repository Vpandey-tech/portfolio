const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/app.js',
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].bundle.js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
      },
      // Shaders
      {
        test: /\.(glsl|vs|fs|vert|frag)$/,
        exclude: /node_modules/,
        type: 'asset/source',
      },
      // Images
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new CompressionPlugin(),
    // We can use HtmlWebpackPlugin to inject the bundle if we want, 
    // but the existing index.html manually scripts it. 
    // We'll stick to the manual way for now or configure CopyPlugin.
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, ''),
    },
    compress: true,
    port: 8080,
    host: '0.0.0.0',
    allowedHosts: 'all', 
    hot: true,
  },
  resolve: {
    fallback: {
      fs: false,
      path: false,
    },
  },
  optimization: {
    minimize: false, // Easier debugging
  },
};
