/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/DOMModule.js":
/*!**************************!*\
  !*** ./src/DOMModule.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DOMModule: () => (/* binding */ DOMModule)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\r\nconst toDoDiv = document.querySelector('.toDos');\r\nconst DOMModule = (() =>{\r\n    \r\n    function clear(){\r\n        while(toDoDiv.firstChild){\r\n            toDoDiv.removeChild(toDoDiv.firstChild);\r\n        }\r\n    }\r\n\r\n    function createToDoElements(todos){\r\n        clear();\r\n        todos.forEach((toDo) =>{\r\n            createToDoContainer(toDo);\r\n        });\r\n        // let jsonToDos = JSON.stringify(todos);\r\n        // console.log(`jsonToDos: ${jsonToDos}, type: ${typeof(jsonToDos)}`)\r\n        // let jsonNewToDo = JSON.stringify(toDo);\r\n        // console.log(`jsonNewToDo: ${jsonNewToDo}, type: ${typeof(jsonNewToDo)}`);\r\n        //send toDo to the server \r\n\r\n    }\r\n    \r\n    function createToDoContainer(toDo){\r\n\r\n            const toDoContainer = document.createElement('div');\r\n            toDoContainer.classList.add('toDo');\r\n            if(toDo.getStatus()){\r\n                toDoContainer.classList.add('done');\r\n            }else{\r\n                toDoContainer.classList.add('undone');\r\n            }\r\n            toDoContainer.innerText = toDo.getName();\r\n            toDoDiv.appendChild(toDoContainer);\r\n            createToDoButtons(toDoContainer, toDo);\r\n\r\n    }\r\n    function createToDoButtons(toDoContainer, currentToDo){\r\n\r\n        const buttonsContainer = document.createElement('div');\r\n        buttonsContainer.classList.add('buttons-container');\r\n        \r\n        const statusButton = document.createElement('i');\r\n        statusButton.id = 'statusButton';\r\n        statusButton.classList.add('toDoButton');\r\n        statusButton.classList.add('fa-solid', 'fa-check');\r\n        statusButton.addEventListener('click', () => updateToDo(currentToDo, toDoContainer));\r\n\r\n        const deleteButton = document.createElement('i');\r\n        deleteButton.id = 'deleteButton';\r\n        deleteButton.classList.add('toDoButton');\r\n        deleteButton.classList.add('fa-solid', 'fa-xmark');\r\n        deleteButton.addEventListener('click', () => deleteToDo(_index_js__WEBPACK_IMPORTED_MODULE_0__.todos, currentToDo));\r\n\r\n        buttonsContainer.appendChild(statusButton);\r\n        buttonsContainer.appendChild(deleteButton);\r\n        \r\n        toDoContainer.appendChild(buttonsContainer);\r\n        \r\n    }\r\n\r\n    function deleteToDo(todos, deletedToDo){\r\n        //send deleted todo\r\n        // let jsonDeletedToDo = JSON.stringify(deletedToDo);\r\n        // console.log(`jsonDeletedToDo: ${jsonDeletedToDo}, type: ${typeof(jsonDeletedToDo)}`);\r\n\r\n   \r\n       todos.splice(todos.indexOf(deletedToDo, 0), 1);\r\n       createToDoElements(todos);\r\n        return;\r\n    }\r\n \r\n    function updateToDo(updatedToDo, toDoContainer){\r\n        // let jsonUpdatedToDo = JSON.stringify(updatedToDo);\r\n        // console.log(`jsonUpdatedToDo: ${jsonUpdatedToDo}, type: ${typeof(jsonUpdatedToDo)}`);\r\n        //send udpated todo\r\n\r\n        if(toDoContainer.classList.contains('done')){\r\n            toDoContainer.classList.replace('done', 'undone');\r\n\r\n        }else if(toDoContainer.classList.contains('undone')){\r\n            toDoContainer.classList.replace('undone', 'done');\r\n\r\n        }\r\n        updatedToDo.changeStatus();\r\n        return;\r\n\r\n    }\r\n\r\n\r\n\r\n    return {createToDoElements}\r\n})();\n\n//# sourceURL=webpack://todolist/./src/DOMModule.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   todos: () => (/* binding */ todos)\n/* harmony export */ });\n/* harmony import */ var _DOMModule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMModule.js */ \"./src/DOMModule.js\");\n/* harmony import */ var _toDoClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDoClass.js */ \"./src/toDoClass.js\");\n\r\n\r\nconst addButton = document.getElementById('addButton');\r\nconst toDoInput = document.getElementById('toDoInput');\r\n\r\nlet todos = [];\r\n\r\n\r\n\r\n// async function getData(){\r\n//     let dataArr = await fetch(/*fetch data */);\r\n//     todos = dataArr.json();\r\n//     renderToDos(todos);\r\n// }\r\naddButton.addEventListener('click', (event) => {\r\n    \r\n    if(toDoInput.value){\r\n\r\n        let index = todos.length\r\n        todos.push(new _toDoClass_js__WEBPACK_IMPORTED_MODULE_1__.ToDoDTO(toDoInput.value, false, index));\r\n        toDoInput.value = '';\r\n        _DOMModule_js__WEBPACK_IMPORTED_MODULE_0__.DOMModule.createToDoElements(todos);\r\n\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ }),

/***/ "./src/toDoClass.js":
/*!**************************!*\
  !*** ./src/toDoClass.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ToDoDTO: () => (/* binding */ ToDoDTO)\n/* harmony export */ });\nclass ToDoDTO{\r\n    constructor(name, status, index){\r\n        this.name = name;\r\n        this.status = status;\r\n        this.index = index;\r\n    }\r\n    setName(name){\r\n        this.name = name;\r\n    }\r\n    getName(){\r\n        return this.name;\r\n    }\r\n    getStatus(){\r\n        return this.status;\r\n    }\r\n    changeStatus(){\r\n        if(this.status){\r\n            this.status = false;\r\n        }else{\r\n            this.status = true;\r\n        }\r\n    }\r\n\r\n}\r\n\n\n//# sourceURL=webpack://todolist/./src/toDoClass.js?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;