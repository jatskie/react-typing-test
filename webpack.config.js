var path = require('path');

module.exports = {
  entry: ['webpack/hot/dev-server', './src/app.jsx'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'jsx-loader'
      },
      {
        test: /\.scss$/,
        include: [
          path.resolve(__dirname, "src/sass")
        ],
        loader: 'style!css!sass'
      }
    ]
  },
};
