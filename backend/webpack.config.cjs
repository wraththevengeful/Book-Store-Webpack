const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'development', // or 'production' for production mode
  target: 'node', // important in order not to bundle built-in modules like path, fs, etc.
  entry: './index.js', // entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.cjs', // output bundle file name
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
};
