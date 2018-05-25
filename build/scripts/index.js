/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./images/movie-poster-max-2.jpg";

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

(function () {
  'use strict';
  
  // Include main page
  __webpack_require__(2);

  // Include styles
  __webpack_require__(3);

  // Include favicon
  // require('../favicon.ico');

  // Include js-modules
  var req = __webpack_require__(4);
  req.keys().forEach(function(key){
    req(key);
  });
  // Include images
  var req = __webpack_require__(6);
  req.keys().forEach(function(key){
    req(key);
  });
  // Include jquery plugins
  var req = __webpack_require__(10);
  req.keys().forEach(function(key){
    req(key);
  });

})();


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "../index.html";

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./_canvas.js": 5
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 4;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

(function() {

  function getAverageColor(imageData) {
    let color = {
      red: 0,
      green: 0,
      blue: 0,
      alpha: 0
    };
    for (let i = 0; i < imageData.height; i++) {
      for (let j = 0; j < imageData.width; j++) {
        let offset = (i * imageData.width * 4) + j * 4;
        color.red += imageData.data[offset];
        color.green += imageData.data[offset + 1];
        color.blue += imageData.data[offset + 2];
        color.alpha += imageData.data[offset + 3];
      }
    }

    color.red = Math.ceil(color.red / (imageData.height * imageData.width));
    color.green = Math.ceil(color.green / (imageData.height * imageData.width));
    color.blue = Math.ceil(color.blue / (imageData.height * imageData.width));
    color.alpha = Math.ceil(color.alpha / (imageData.height * imageData.width));

    return color;
  }

  // Canvas Image
  var canvasImage = document.getElementById('canvas-image-id');
  var ctxImage = canvasImage.getContext('2d');

  var canvas = document.getElementById('canvas-id');
  var ctx = canvas.getContext('2d');

  var pointBlockWidth = 15;
  var pointWidth = Math.ceil(pointBlockWidth / 2);

  var mainImage = new Image();
  mainImage.src = './images/insta-logo.png';

  mainImage.onload = function() {
    ctxImage.fillStyle = 'rgba(255, 255, 255, 1)';
    ctxImage.fillRect(0, 0, 500, 500);
    ctxImage.save();
    ctxImage.scale(0.8, 0.8);
    ctxImage.drawImage(mainImage, -85, 5);
    ctxImage.restore();
    let pointImageData = ctxImage.getImageData(100, 130, pointBlockWidth, pointBlockWidth);

    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';

    for (let i = 0; i < Math.ceil(canvas.height / pointBlockWidth); i++) {
      for (let j = 0; j < Math.ceil(canvas.width / pointBlockWidth); j++) {
        ctx.save();
        ctx.beginPath();
        
        let pointImageData = ctxImage.getImageData(j * pointBlockWidth, i * pointBlockWidth, pointBlockWidth, pointBlockWidth);
        let pointColor = getAverageColor(pointImageData);
        // ctx.fillStyle = 'rgba(' + pointColor.red + ', ' + pointColor.green + ', ' + pointColor.blue + ', ' + (pointColor.alpha / 255) + ')';
        let pointColorAverage = (pointColor.red + pointColor.green + pointColor.blue) / 3;
        let scaleRatio = (255 - pointColorAverage) / 255;

        // Point radius 
        // Min point radius = 1
        let currentPointRadius = ((pointWidth / 2) - 0.5) * scaleRatio + 0.5;
        // Min point radius = 0
        // let currentPointRadius = ((pointWidth / 2)) * scaleRatio;
  
        ctx.moveTo((j * pointBlockWidth + pointWidth),(i * pointBlockWidth + pointWidth));
        ctx.arc((j * pointBlockWidth + pointWidth),(i * pointBlockWidth + pointWidth), currentPointRadius, 0, Math.PI*2, true);
        ctx.fill();
        ctx.restore();
      }
    }
  };
})();


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./image-1.jpg": 7,
	"./image-2.jpg": 8,
	"./insta-logo.png": 9,
	"./movie-poster-max-2.jpg": 0
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 6;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./images/image-1.jpg";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./images/image-2.jpg";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./images/insta-logo.png";

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./jquery-3.2.1.min.js": 11
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 10;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./scripts/jquery-3.2.1.min.js";

/***/ })
/******/ ]);