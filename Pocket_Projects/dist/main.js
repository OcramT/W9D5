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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/clock.js":
/*!**********************!*\
  !*** ./src/clock.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _warmup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup */ \"./src/warmup.js\");\n\n\nclass Clock {\n    constructor() {\n        let date = new Date()\n        this.hours = date.getHours();\n        this.minutes = date.getMinutes();\n        this.seconds = date.getSeconds();\n\n        this.printTime()\n        setInterval(this._tick.bind(this), 1000);\n    }\n\n    printTime() {\n        const string = `${this.hours}:${this.minutes}:${this.seconds}`\n        const clockEl = document.getElementById(\"clock\")\n        Object(_warmup__WEBPACK_IMPORTED_MODULE_0__[\"htmlGenerator\"])(string, clockEl);\n    }\n\n    _tick() {\n        this.seconds++\n        if (this.seconds === 60) {\n            this.seconds = 0\n            this.minutes++;\n            if (this.minutes === 60) {\n                this.minutes = 0\n                this.hours++;\n                if (this.hours === 24) {\n                    this.hours = 0;\n                }\n            }\n        }\n        console.clear();\n        this.printTime();\n    };\n}\n\n// const clock = new Clock();\n/* harmony default export */ __webpack_exports__[\"default\"] = (Clock);\n\n//# sourceURL=webpack:///./src/clock.js?");

/***/ }),

/***/ "./src/drop_down.js":
/*!**************************!*\
  !*** ./src/drop_down.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const dogs = {\n  \"Corgi\": \"https://www.akc.org/dog-breeds/cardigan-welsh-corgi/\",\n  \"Australian Shepherd\": \"https://www.akc.org/dog-breeds/australian-shepherd/\",\n  \"Affenpinscher\": \"https://www.akc.org/dog-breeds/affenpinscher/\",\n  \"American Staffordshire Terrier\": \"https://www.akc.org/dog-breeds/american-staffordshire-terrier/\",\n  \"Tosa\": \"https://www.akc.org/dog-breeds/tosa/\",\n  \"Labrador Retriever\": \"https://www.akc.org/dog-breeds/labrador-retriever/\",\n  \"French Bulldog\": \"https://www.akc.org/dog-breeds/french-bulldog/\" \n};\n\nfunction dogLinkCreator(dogs) {\n  const dogLinks = [];\n\n  for (let dog in dogs) {\n    const aTag = document.createElement(\"a\");\n    aTag.innerHTML = dog;\n    aTag.href = dogs[dog];\n    const dogLink = document.createElement(\"li\");\n    dogLink.className = \"dog-link\";\n    dogLink.appendChild(aTag);\n    dogLinks.push(dogLink);\n  }\n\n  return dogLinks;\n}\n\nfunction attachDogLinks() {\n  const dogLinks = dogLinkCreator(dogs);\n  const dropDown = document.querySelector('.drop-down-dog-list');\n  dogLinks.forEach(dog => {\n    dropDown.appendChild(dog);\n  })\n}\n\nattachDogLinks();\n// export default attachDogLinks;\n\nconst handleEnter = (e) => {\n  const dogList = document.querySelector(\".drop-down-dog-list\")\n  if (dogList.className === \"drop-down-dog-list hidden\") {\n    dogList.className = \"drop-down-dog-list\";\n  // } else if (dogList.className === \"drop-down-dog-list\") {\n  //   dogList.className = \"drop-down-dog-list hidden\";\n  // }\n  }\n}\n\nconst handleLeave = (e) => {\n  const dogList = document.querySelector(\".drop-down-dog-list\")\n  if (dogList.className === \"drop-down-dog-list\") {\n    dogList.className = \"drop-down-dog-list hidden\";\n  }\n}\n\nconst dogHeader = document.querySelector(\".drop-down-dog-nav\");\ndogHeader.addEventListener(\"mouseenter\", handleEnter);\ndogHeader.addEventListener(\"mouseleave\", handleLeave);\n\n\n\n//# sourceURL=webpack:///./src/drop_down.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _warmup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup */ \"./src/warmup.js\");\n/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clock */ \"./src/clock.js\");\n/* harmony import */ var _drop_down__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drop_down */ \"./src/drop_down.js\");\n/* harmony import */ var _drop_down__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_drop_down__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _todo_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo_list */ \"./src/todo_list.js\");\n/* harmony import */ var _todo_list__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_todo_list__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nconst printClock = new _clock__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/todo_list.js":
/*!**************************!*\
  !*** ./src/todo_list.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const TODO = [];\nconst TODOLIST = document.querySelector(\".todos\");\nconst TODOFORM = document.querySelector(\".add-todo-form\"); \n\nconst addTodo = (e) => {\n  e.preventDefault();\n  const todoInput = document.querySelector(\"input[name='add-todo']\");\n  const todoVal = todoInput.value;\n  todoInput.value = \"\";\n  const todo = {\n    todoVal,\n    done: false \n  };\n  TODO.push(todo);\n  populateList(TODO, TODOLIST);\n}\n\nconst populateList = (todoArr, todoList) => {\n  todoArr.map(todo => {\n    const label = document.createElement(\"label\");\n    label.htmlFor = `${todo.todoVal}`;\n    label.innerHTML = `${todo.todoVal}`;\n    const inputCheck = document.createElement(\"input\");\n    inputCheck.setAttribute(\"type\", \"checkbox\");\n    inputCheck.setAttribute(\"id\", `${todo.todoVal}`);\n    label.appendChild(inputCheck);\n    const li = document.createElement(\"li\");\n    li.appendChild(label);\n    todoList.appendChild(li);\n  })\n}\n\nTODOFORM.addEventListener(\"submit\", addTodo);\n\n\n//# sourceURL=webpack:///./src/todo_list.js?");

/***/ }),

/***/ "./src/warmup.js":
/*!***********************!*\
  !*** ./src/warmup.js ***!
  \***********************/
/*! exports provided: htmlGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"htmlGenerator\", function() { return htmlGenerator; });\n\nconst partyHeader = document.getElementById('party');\n\nconst htmlGenerator = (string, htmlElement) => {\n    if (htmlElement.firstChild) {\n        htmlElement.removeChild(htmlElement.childNodes[0])\n    }\n    const newPTag = document.createElement(\"p\");\n    newPTag.textContent = string;\n    htmlElement.appendChild(newPTag);\n};\n\nhtmlGenerator('Party Time.', partyHeader);\n\n//# sourceURL=webpack:///./src/warmup.js?");

/***/ })

/******/ });