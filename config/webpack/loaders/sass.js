const ExtractTextPlugin = require('extract-text-webpack-plugin')
const { env } = require('../configuration.js')

module.exports = {
  test: /\.css$/,
  use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: 'css-loader?modules,localIdentName="[name]-[local]-[hash:base64:6]"'
  }),
}
