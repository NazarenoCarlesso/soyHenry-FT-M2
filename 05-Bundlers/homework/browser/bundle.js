/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./browser/app.js":
/*!************************!*\
  !*** ./browser/app.js ***!
  \************************/
/***/ (() => {

eval("(function () {\r\n\r\n  var whiteboard = window.whiteboard;\r\n  var socket = window.io(window.location.origin);\r\n\r\n  socket.on('connect', function () {\r\n    console.log('Connected!');\r\n  });\r\n\r\n  socket.on('load', function (strokes) {\r\n\r\n    strokes.forEach(function (stroke) {\r\n      var start = stroke.start;\r\n      var end = stroke.end;\r\n      var color = stroke.color;\r\n      whiteboard.draw(start, end, color, false);\r\n    });\r\n\r\n  });\r\n\r\n  socket.on('draw', function (start, end, color) {\r\n    whiteboard.draw(start, end, color, false);\r\n  });\r\n\r\n  whiteboard.on('draw', function (start, end, color) {\r\n    socket.emit('draw', start, end, color);\r\n  });\r\n\r\n})();\r\n\n\n//# sourceURL=webpack://05-bundlers/./browser/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./browser/app.js"]();
/******/ 	
/******/ })()
;