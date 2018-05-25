const autoPrefixer = require('autoprefixer');
const cssMinifier = require('postcss-csso');


module.exports = {
  plugins: [
    autoPrefixer,
    cssMinifier
  ]
}