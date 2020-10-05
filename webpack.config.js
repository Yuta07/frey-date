const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    filename: 'index.js',
    path: path.join(__dirname, 'dist'),
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [{
      test: /\.(ts|tsx)$/,
      exclude: /node_modeules/,
      loader: 'ts-loader',
    }, ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
};