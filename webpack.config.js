const path = require('path')

module.exports = {
  entry: './src/index',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/static/'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      include: path.join(__dirname, 'src')
    }, {
      test: /\.elm$/,
      loader: 'elm-webpack',
      include: path.join(__dirname, 'src')
    }]
  }
}
