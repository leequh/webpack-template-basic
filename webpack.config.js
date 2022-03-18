//import
const path  = require ('path')
const HtmlPlugin = require('html-webpack-plugin')

module.exports ={ 
    entry: './js/main.js',
    output : {
      //path:  path.resolve(__dirname, 'dist'),
     // filename: 'main.js',
      clean: true
    },

    plugins: [
    new HtmlPlugin({
      template: './index.html'
    })
    ]
}