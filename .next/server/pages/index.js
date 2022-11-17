"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Index = ()=>{\n    const [userInput, setUserInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [toDoList, setToDoList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const handleChange = (e)=>{\n        e.preventDefault();\n        setUserInput(e.target.value);\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        setToDoList([\n            userInput,\n            ...toDoList\n        ]);\n        setUserInput(\"\");\n    };\n    const handleDelete = (item)=>{\n        const newList = toDoList.filter((todoItem)=>item !== todoItem);\n        setToDoList(newList);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \" Next JS TO DO LIST\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\ReactTraining\\\\ToDoList\\\\pages\\\\index.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Enter a to do item\",\n                        value: userInput,\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\ReactTraining\\\\ToDoList\\\\pages\\\\index.js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleSubmit,\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\ReactTraining\\\\ToDoList\\\\pages\\\\index.js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\ReactTraining\\\\ToDoList\\\\pages\\\\index.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: toDoList.length > 1 && toDoList.map((item, index)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            item,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: (e)=>{\n                                    e.preventDefault();\n                                    handleDelete(item);\n                                },\n                                children: \"Delete\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\ReactTraining\\\\ToDoList\\\\pages\\\\index.js\",\n                                lineNumber: 35,\n                                columnNumber: 42\n                            }, undefined)\n                        ]\n                    }, index, true, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\ReactTraining\\\\ToDoList\\\\pages\\\\index.js\",\n                        lineNumber: 35,\n                        columnNumber: 20\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\ReactTraining\\\\ToDoList\\\\pages\\\\index.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\ReactTraining\\\\ToDoList\\\\pages\\\\index.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQWlDO0FBRWpDLE1BQU1DLFFBQVEsSUFBTTtJQUVsQixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR0gsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDSSxVQUFVQyxZQUFZLEdBQUdMLCtDQUFRQSxDQUFDLEVBQUU7SUFFM0MsTUFBTU0sZUFBZSxDQUFDQyxJQUFNO1FBQzFCQSxFQUFFQyxjQUFjO1FBQ2hCTCxhQUFhSSxFQUFFRSxNQUFNLENBQUNDLEtBQUs7SUFDN0I7SUFFQSxNQUFNQyxlQUFlLENBQUNKLElBQU07UUFDMUJBLEVBQUVDLGNBQWM7UUFDaEJILFlBQVk7WUFBQ0g7ZUFBY0U7U0FBUztRQUVwQ0QsYUFBYTtJQUNmO0lBRUEsTUFBTVMsZUFBZSxDQUFDQyxPQUFRO1FBQzVCLE1BQU1DLFVBQVVWLFNBQVNXLE1BQU0sQ0FBQyxDQUFDQyxXQUFhSCxTQUFTRztRQUN2RFgsWUFBWVM7SUFDZDtJQUVBLHFCQUNFLDhEQUFDRzs7MEJBQ0MsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDOztrQ0FDQyw4REFBQ0M7d0JBQU1DLE1BQUs7d0JBQU9DLGFBQWE7d0JBQXFCWixPQUFPUjt3QkFBV3FCLFVBQVVqQjs7Ozs7O2tDQUNqRiw4REFBQ2tCO3dCQUFPQyxTQUFTZDtrQ0FBYzs7Ozs7Ozs7Ozs7OzBCQUVqQyw4REFBQ2U7MEJBRUd0QixTQUFTdUIsTUFBTSxHQUFHLEtBQUt2QixTQUFTd0IsR0FBRyxDQUFDLENBQUNmLE1BQU1nQixRQUFVO29CQUNuRCxxQkFBTyw4REFBQ0M7OzRCQUFnQmpCOzBDQUFLLDhEQUFDVztnQ0FBT0MsU0FBUyxDQUFDbEIsSUFBTTtvQ0FDbkRBLEVBQUVDLGNBQWM7b0NBQ2hCSSxhQUFhQztnQ0FDZjswQ0FBRzs7Ozs7Ozt1QkFIYWdCOzs7OztnQkFJbEI7Ozs7Ozs7Ozs7OztBQUtWO0FBRUEsaUVBQWU1QixLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBJbmRleCA9ICgpID0+IHtcclxuXHJcbiAgY29uc3QgW3VzZXJJbnB1dCwgc2V0VXNlcklucHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt0b0RvTGlzdCwgc2V0VG9Eb0xpc3RdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0VXNlcklucHV0KGUudGFyZ2V0LnZhbHVlKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRUb0RvTGlzdChbdXNlcklucHV0LCAuLi50b0RvTGlzdF0pXHJcbiAgICBcclxuICAgIHNldFVzZXJJbnB1dCgnJyk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVEZWxldGUgPSAoaXRlbSkgPT57XHJcbiAgICBjb25zdCBuZXdMaXN0ID0gdG9Eb0xpc3QuZmlsdGVyKCh0b2RvSXRlbSkgPT4gaXRlbSAhPT0gdG9kb0l0ZW0pXHJcbiAgICBzZXRUb0RvTGlzdChuZXdMaXN0KTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDM+IE5leHQgSlMgVE8gRE8gTElTVDwvaDM+XHJcbiAgICAgIDxmb3JtPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPSBcIkVudGVyIGEgdG8gZG8gaXRlbVwiIHZhbHVlPXt1c2VySW5wdXR9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9PjwvaW5wdXQ+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9PlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICB7XHJcbiAgICAgICAgICB0b0RvTGlzdC5sZW5ndGggPiAxICYmIHRvRG9MaXN0Lm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIDxsaSBrZXk9e2luZGV4fT57aXRlbX08YnV0dG9uIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgIGhhbmRsZURlbGV0ZShpdGVtKTtcclxuICAgICAgICAgICAgfX0+RGVsZXRlPC9idXR0b24+PC9saT5cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJJbmRleCIsInVzZXJJbnB1dCIsInNldFVzZXJJbnB1dCIsInRvRG9MaXN0Iiwic2V0VG9Eb0xpc3QiLCJoYW5kbGVDaGFuZ2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsImhhbmRsZURlbGV0ZSIsIml0ZW0iLCJuZXdMaXN0IiwiZmlsdGVyIiwidG9kb0l0ZW0iLCJkaXYiLCJoMyIsImZvcm0iLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiYnV0dG9uIiwib25DbGljayIsInVsIiwibGVuZ3RoIiwibWFwIiwiaW5kZXgiLCJsaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();