"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/sections/home.tsx":
/*!*******************************!*\
  !*** ./src/sections/home.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Page\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.module.css */ \"./src/sections/home.module.css\");\n/* harmony import */ var _home_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\"use client\";\n\n\n\nconst Page = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_home_module_css__WEBPACK_IMPORTED_MODULE_1___default().section),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.article, {\n            initial: {\n                position: \"absolute\",\n                top: \"50%\",\n                fontSize: \"4 rem\"\n            },\n            animate: {\n                position: \"absolute\",\n                top: \"0px\",\n                fontSize: \"1 rem\"\n            },\n            transition: {\n                duration: 1,\n                delay: 1.5\n            },\n            className: (_home_module_css__WEBPACK_IMPORTED_MODULE_1___default().box),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.p, {\n                initial: {\n                    opacity: 0,\n                    y: \"100px\"\n                },\n                animate: {\n                    opacity: 1,\n                    translateY: \"-100px\"\n                },\n                transition: {\n                    duration: 1,\n                    delay: 0.5\n                },\n                className: (_home_module_css__WEBPACK_IMPORTED_MODULE_1___default().logo),\n                children: \"enzym\"\n            }, void 0, false, {\n                fileName: \"/Users/kacperkondracki/Desktop/IT/TOP/enzym/src/sections/home.tsx\",\n                lineNumber: 18,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/kacperkondracki/Desktop/IT/TOP/enzym/src/sections/home.tsx\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/kacperkondracki/Desktop/IT/TOP/enzym/src/sections/home.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VjdGlvbnMvaG9tZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ3NDO0FBQ0M7QUFFaEMsTUFBTUUsT0FBTyxJQUFNO0lBQ3hCLHFCQUNFLDhEQUFDQztRQUFRQyxXQUFXSixpRUFBYTtrQkFDL0IsNEVBQUNDLHlEQUFjO1lBQ2JLLFNBQVM7Z0JBQUVDLFVBQVU7Z0JBQVlDLEtBQUs7Z0JBQU9DLFVBQVU7WUFBUTtZQUMvREMsU0FBUztnQkFDUEgsVUFBVTtnQkFDVkMsS0FBSztnQkFDTEMsVUFBVTtZQUNaO1lBQ0FFLFlBQVk7Z0JBQUVDLFVBQVU7Z0JBQUdDLE9BQU87WUFBSTtZQUN0Q1QsV0FBV0osNkRBQVM7c0JBRXBCLDRFQUFDQyxtREFBUTtnQkFDUEssU0FBUztvQkFBRVUsU0FBUztvQkFBR0MsR0FBRztnQkFBUTtnQkFDbENQLFNBQVM7b0JBQ1BNLFNBQVM7b0JBQ1RFLFlBQVk7Z0JBQ2Q7Z0JBQ0FQLFlBQVk7b0JBQUVDLFVBQVU7b0JBQUdDLE9BQU87Z0JBQUk7Z0JBQ3RDVCxXQUFXSiw4REFBVTswQkFDdEI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNVCxFQUFFO0tBM0JXRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc2VjdGlvbnMvaG9tZS50c3g/ZDUwNyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBzdHlsZSBmcm9tIFwiLi9ob21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbmV4cG9ydCBjb25zdCBQYWdlID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGUuc2VjdGlvbn0+XG4gICAgICA8bW90aW9uLmFydGljbGVcbiAgICAgICAgaW5pdGlhbD17eyBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCB0b3A6IFwiNTAlXCIsIGZvbnRTaXplOiBcIjQgcmVtXCIgfX1cbiAgICAgICAgYW5pbWF0ZT17e1xuICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgdG9wOiBcIjBweFwiLFxuICAgICAgICAgIGZvbnRTaXplOiBcIjEgcmVtXCIsXG4gICAgICAgIH19XG4gICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDEsIGRlbGF5OiAxLjUgfX1cbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS5ib3h9XG4gICAgICA+XG4gICAgICAgIDxtb3Rpb24ucFxuICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogXCIxMDBweFwiIH19XG4gICAgICAgICAgYW5pbWF0ZT17e1xuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIHRyYW5zbGF0ZVk6IFwiLTEwMHB4XCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAxLCBkZWxheTogMC41IH19XG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS5sb2dvfVxuICAgICAgICA+XG4gICAgICAgICAgZW56eW1cbiAgICAgICAgPC9tb3Rpb24ucD5cbiAgICAgIDwvbW90aW9uLmFydGljbGU+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJzdHlsZSIsIm1vdGlvbiIsIlBhZ2UiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiYXJ0aWNsZSIsImluaXRpYWwiLCJwb3NpdGlvbiIsInRvcCIsImZvbnRTaXplIiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImRlbGF5IiwiYm94IiwicCIsIm9wYWNpdHkiLCJ5IiwidHJhbnNsYXRlWSIsImxvZ28iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/sections/home.tsx\n"));

/***/ })

});