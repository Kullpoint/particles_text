/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/index.scss */ \"./src/styles/index.scss\");\n\n\n//=====================================================================================================================\n\n/** @type {HTMLCanvasElement} */\nconst canvas = document.getElementById('canvas1');\nconst ctx = canvas.getContext('2d');\ncanvas.width = window.innerWidth;\ncanvas.height = window.innerHeight;\nlet particleArray = [];\nlet adjustX = 0;\nlet adjustY = 0;\nconst mouse = {\n  x: null,\n  y: null,\n  radius: 150\n};\nwindow.addEventListener('mousemove', e => {\n  mouse.x = e.x;\n  mouse.y = e.y;\n});\nctx.fillStyle = 'white';\nctx.font = '30px Verdana';\nctx.fillText('Hello!', 0, 30);\nconst textCoordinates = ctx.getImageData(0, 0, 100, 100);\nclass Particle {\n  constructor(x, y) {\n    this.x = x;\n    this.y = y;\n    this.size = 3;\n    this.baseX = this.x;\n    this.baseY = this.y;\n    this.density = Math.random() * 40 + 5;\n  }\n  draw() {\n    ctx.fillStyle = 'white';\n    ctx.beginPath();\n    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);\n    ctx.closePath();\n    ctx.fill();\n  }\n  update() {\n    let dx = mouse.x - this.x;\n    let dy = mouse.y - this.y;\n    let distance = Math.sqrt(dx * dx + dy * dy);\n    let forcedDirectionX = dx / distance;\n    let forcedDirectionY = dy / distance;\n    let maxDistance = mouse.radius;\n    let force = (maxDistance - distance) / maxDistance;\n    let directionX = forcedDirectionX * force * this.density;\n    let directionY = forcedDirectionY * force * this.density;\n    if (distance < mouse.radius) {\n      this.x -= directionX;\n      this.y -= directionY;\n    } else {\n      if (this.x !== this.baseX) {\n        let dx = this.x - this.baseX;\n        this.x -= dx / 10;\n      }\n      if (this.y !== this.baseY) {\n        let dy = this.y - this.baseY;\n        this.y -= dy / 10;\n      }\n    }\n  }\n}\nconst init = () => {\n  particleArray = [];\n  for (let y = 0, y2 = textCoordinates.height; y < y2; y++) {\n    for (let x = 0, x2 = textCoordinates.width; x < x2; x++) {\n      if (textCoordinates.data[y * 4 * textCoordinates.width + x * 4 + 3] > 128) {\n        let positionX = x + adjustX;\n        let positionY = y + adjustY;\n        particleArray.push(new Particle(positionX * 20, positionY * 20));\n      }\n    }\n  }\n};\ninit();\nconst connect = () => {\n  let opacityValue = 1;\n  for (let a = 0; a < particleArray.length; a++) {\n    for (let b = a; b < particleArray.length; b++) {\n      let dx = particleArray[a].x - particleArray[b].x;\n      let dy = particleArray[a].y - particleArray[b].y;\n      let distance = Math.sqrt(dx * dx + dy * dy);\n      opacityValue = 1 - distance / 50;\n      if (distance < 50) {\n        ctx.strokeStyle = `rgba(255, 255, 255, ${opacityValue})`;\n        ctx.lineWidth = 2;\n        ctx.beginPath();\n        ctx.moveTo(particleArray[a].x, particleArray[a].y);\n        ctx.lineTo(particleArray[b].x, particleArray[b].y);\n        ctx.stroke();\n      }\n    }\n  }\n};\nconst animate = () => {\n  ctx.clearRect(0, 0, canvas.width, canvas.height);\n  for (let i = 0; i < particleArray.length; i++) {\n    particleArray[i].draw();\n    particleArray[i].update();\n  }\n  connect();\n  requestAnimationFrame(animate);\n};\nanimate();\n\n//# sourceURL=webpack://canvas/./src/scripts/index.js?");

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://canvas/./src/styles/index.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/index.js");
/******/ 	
/******/ })()
;