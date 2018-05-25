(function () {
  'use strict';
  
  // Include main page
  require('../index.pug');

  // Include styles
  require('../scss/index.scss');

  // Include favicon
  // require('../favicon.ico');

  // Include js-modules
  var req = require.context("./modules", true, /\.(js)$/);
  req.keys().forEach(function(key){
    req(key);
  });
  // Include images
  var req = require.context("../images", true, /\.(jpe?g|png|svg|webp|ico|gif)$/);
  req.keys().forEach(function(key){
    req(key);
  });
  // Include jquery plugins
  var req = require.context("./libs", true, /jquery.*\.(js)$/);
  req.keys().forEach(function(key){
    req(key);
  });

})();
