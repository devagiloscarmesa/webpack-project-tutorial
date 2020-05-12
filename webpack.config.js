const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/app/index.js',
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  devServer:{
      port:5050
  }, 
  module:{
     rules: [
         {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
         }
     ]
  }, 
  plugins: [
    new HTMLWebpackPlugin({
            template: './src/index.html',
            minify:  {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            } 
      })


  ]
};