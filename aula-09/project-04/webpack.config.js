var webpack = require('webpack')

module.exports = {
    entry: "./index.js",
    output: {
        filename: "bundle.js"
    },
    module: {
  rules: [
    {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }
  ]
},
plugins: [new webpack.optimize.UglifyJsPlugin()]
}; 
