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

/***/ "./src/clock.js":
/*!**********************!*\
  !*** ./src/clock.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _warmup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup */ \"./src/warmup.js\");\n\n\nclass Clock {\n    constructor() {\n        let date = new Date()\n        this.hours = date.getHours();\n        this.minutes = date.getMinutes();\n        this.seconds = date.getSeconds();\n\n        this.printTime()\n        setInterval(this._tick.bind(this), 1000);\n    }\n\n    printTime() {\n        const string = `${this.hours}:${this.minutes}:${this.seconds}`\n        const clockEl = document.getElementById(\"clock\")\n        ;(0,_warmup__WEBPACK_IMPORTED_MODULE_0__.htmlGenerator)(string, clockEl);\n    }\n\n    _tick() {\n        this.seconds++\n        if (this.seconds === 60) {\n            this.seconds = 0\n            this.minutes++;\n            if (this.minutes === 60) {\n                this.minutes = 0\n                this.hours++;\n                if (this.hours === 24) {\n                    this.hours = 0;\n                }\n            }\n        }\n        console.clear();\n        this.printTime();\n    };\n}\n\n// const clock = new Clock();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Clock);\n\n//# sourceURL=webpack:///./src/clock.js?");

/***/ }),

/***/ "./src/drop_down.js":
/*!**************************!*\
  !*** ./src/drop_down.js ***!
  \**************************/
/***/ (() => {

eval("const dogs = {\n  \"Corgi\": \"https://www.akc.org/dog-breeds/cardigan-welsh-corgi/\",\n  \"Australian Shepherd\": \"https://www.akc.org/dog-breeds/australian-shepherd/\",\n  \"Affenpinscher\": \"https://www.akc.org/dog-breeds/affenpinscher/\",\n  \"American Staffordshire Terrier\": \"https://www.akc.org/dog-breeds/american-staffordshire-terrier/\",\n  \"Tosa\": \"https://www.akc.org/dog-breeds/tosa/\",\n  \"Labrador Retriever\": \"https://www.akc.org/dog-breeds/labrador-retriever/\",\n  \"French Bulldog\": \"https://www.akc.org/dog-breeds/french-bulldog/\" \n};\n\nfunction dogLinkCreator(dogs) {\n  const dogLinks = [];\n\n  for (let dog in dogs) {\n    const aTag = document.createElement(\"a\");\n    aTag.innerHTML = dog;\n    aTag.href = dogs[dog];\n    const dogLink = document.createElement(\"li\");\n    dogLink.className = \"dog-link\";\n    dogLink.appendChild(aTag);\n    dogLinks.push(dogLink);\n  }\n\n  return dogLinks;\n}\n\nfunction attachDogLinks() {\n  const dogLinks = dogLinkCreator(dogs);\n  const dropDown = document.querySelector('.drop-down-dog-list');\n  dogLinks.forEach(dog => {\n    dropDown.appendChild(dog);\n  })\n}\n\nattachDogLinks();\n// export default attachDogLinks;\n\nconst handleEnter = (e) => {\n  const dogList = document.querySelector(\".drop-down-dog-list\")\n  if (dogList.className === \"drop-down-dog-list hidden\") {\n    dogList.className = \"drop-down-dog-list\";\n  // } else if (dogList.className === \"drop-down-dog-list\") {\n  //   dogList.className = \"drop-down-dog-list hidden\";\n  // }\n  }\n}\n\nconst handleLeave = (e) => {\n  const dogList = document.querySelector(\".drop-down-dog-list\")\n  if (dogList.className === \"drop-down-dog-list\") {\n    dogList.className = \"drop-down-dog-list hidden\";\n  }\n}\n\nconst dogHeader = document.querySelector(\".drop-down-dog-nav\");\ndogHeader.addEventListener(\"mouseenter\", handleEnter);\ndogHeader.addEventListener(\"mouseleave\", handleLeave);\n\n\n\n//# sourceURL=webpack:///./src/drop_down.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _warmup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup */ \"./src/warmup.js\");\n/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clock */ \"./src/clock.js\");\n/* harmony import */ var _drop_down__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drop_down */ \"./src/drop_down.js\");\n/* harmony import */ var _drop_down__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_drop_down__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _todo_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo_list */ \"./src/todo_list.js\");\n/* harmony import */ var _todo_list__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_todo_list__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nconst printClock = new _clock__WEBPACK_IMPORTED_MODULE_1__.default();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/todo_list.js":
/*!**************************!*\
  !*** ./src/todo_list.js ***!
  \**************************/
/***/ (() => {

eval("const TODO = JSON.parse(localStorage.getItem('TODO')) || [];\n// debugger\nconst TODOLIST = document.querySelector(\".todos\");\nconst TODOFORM = document.querySelector(\".add-todo-form\"); \n\nconst addTodo = (e) => {\n  // debugger\n  e.preventDefault();\n  const todoInput = document.querySelector(\"input[name='add-todo']\");\n  const todoVal = todoInput.value;\n  todoInput.value = \"\";\n  const todo = {\n    todoVal,\n    done: false \n  };\n  TODO.push(todo);\n  populateList();\n  localStorage.setItem('TODO', JSON.stringify(TODO));\n  e.currentTarget.reset();\n  // debugger\n}\n\nconst populateList = () => {\n  // debugger\n  TODOLIST.innerHTML = \"\";\n  TODO.map(todo => {\n    const label = document.createElement(\"label\");\n    label.htmlFor = `${todo.todoVal}`;\n    label.innerHTML = `${todo.todoVal}`;\n    const inputCheck = document.createElement(\"input\");\n    inputCheck.setAttribute(\"type\", \"checkbox\");\n    inputCheck.setAttribute(\"id\", `${todo.todoVal}`);\n    label.appendChild(inputCheck);\n    const li = document.createElement(\"li\");\n    li.appendChild(label);\n    TODOLIST.appendChild(li);\n  })\n}\n\nconst persistCheck = () => {\n  const checkbox = \n  checked = \"checked\"\n}\n\nTODOFORM.addEventListener(\"submit\", addTodo);\nTODOLIST.addEventListener(\"click\", persistCheck)\n\n//# sourceURL=webpack:///./src/todo_list.js?");

/***/ }),

/***/ "./src/warmup.js":
/*!***********************!*\
  !*** ./src/warmup.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"htmlGenerator\": () => (/* binding */ htmlGenerator)\n/* harmony export */ });\n\nconst partyHeader = document.getElementById('party');\n\nconst htmlGenerator = (string, htmlElement) => {\n    if (htmlElement.firstChild) {\n        htmlElement.removeChild(htmlElement.childNodes[0])\n    }\n    const newPTag = document.createElement(\"p\");\n    newPTag.textContent = string;\n    htmlElement.appendChild(newPTag);\n};\n\nhtmlGenerator('Party Time.', partyHeader);\n\n//# sourceURL=webpack:///./src/warmup.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;