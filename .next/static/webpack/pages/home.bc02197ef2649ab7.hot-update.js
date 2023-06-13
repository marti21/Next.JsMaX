"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/home",{

/***/ "./hooks/useTimeAgo.js":
/*!*****************************!*\
  !*** ./hooks/useTimeAgo.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ useTimeAgo; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s = $RefreshSig$();\n\nconst DATE_UNITS = [\n    [\n        \"day\",\n        86400\n    ],\n    [\n        \"hour\",\n        3600\n    ],\n    [\n        \"minute\",\n        60\n    ],\n    [\n        \"seconds\",\n        1\n    ]\n];\nconst getDateDiffs = (timestamp)=>{\n    const now = Date.now();\n    const elapse = (timestamp - now) / 1000;\n    for (const [unit, secondsInUnit] of DATE_UNITS){\n        if (Math.abs(elapse) > secondsInUnit || unit === \"seconds\") {\n            const value = Math.round(elapse / secondsInUnit);\n            return {\n                value,\n                unit\n            };\n        }\n    }\n};\nfunction useTimeAgo(timestamp) {\n    _s();\n    const [timeago, setTimeago] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n    getDateDiffs(timestamp);\n    //const rtf = new Intl.RelativeTimeFormat('es', {style: \"short\"})\n    //console.log(value, unit)\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const timeout = setTimeout(()=>{\n            const newTimeAgo = getDateDiffs(timestamp);\n            setTimeago(newTimeAgo);\n        }, 1000);\n        return ()=>clearTimeout(timeout);\n    }, [\n        timestamp\n    ]);\n    const rtf = new Intl.RelativeTimeFormat(navigator.language, {\n        style: \"short\"\n    });\n    const { value , unit  } = timeago;\n    return rtf.format(value, unit);\n}\n_s(useTimeAgo, \"bX9oe1j4+BveJjBTUpOdcochh8U=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2VUaW1lQWdvLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBMkM7QUFFM0MsTUFBTUUsYUFBYTtJQUNmO1FBQUM7UUFBTztLQUFNO0lBQ2Q7UUFBQztRQUFRO0tBQUs7SUFDZDtRQUFDO1FBQVU7S0FBRztJQUNkO1FBQUM7UUFBVztLQUFFO0NBQ2pCO0FBRUQsTUFBTUMsZUFBZUMsQ0FBQUE7SUFDakIsTUFBTUMsTUFBTUMsS0FBS0Q7SUFDakIsTUFBTUUsU0FBUyxDQUFDSCxZQUFZQyxHQUFFLElBQUs7SUFFbkMsS0FBSyxNQUFNLENBQUNHLE1BQU1DLGNBQWMsSUFBSVAsV0FBWTtRQUM1QyxJQUFHUSxLQUFLQyxJQUFJSixVQUFVRSxpQkFBaUJELFNBQVMsV0FBVztZQUN2RCxNQUFNSSxRQUFRRixLQUFLRyxNQUFNTixTQUFTRTtZQUNsQyxPQUFPO2dCQUFFRztnQkFBT0o7WUFBSztRQUN6QjtJQUNKO0FBQ0o7QUFFZSxTQUFTTSxXQUFZVixTQUFTOztJQUN6QyxNQUFNLENBQUNXLFNBQVNDLFdBQVcsR0FBR2YsK0NBQVFBO0lBQ3RDRSxhQUFhQztJQUViLGlFQUFpRTtJQUNqRSwwQkFBMEI7SUFDMUJKLGdEQUFTQSxDQUFDO1FBQ04sTUFBTWlCLFVBQVVDLFdBQVc7WUFDdkIsTUFBTUMsYUFBYWhCLGFBQWFDO1lBQ2hDWSxXQUFXRztRQUNmLEdBQUc7UUFFSCxPQUFPLElBQU1DLGFBQWFIO0lBQzlCLEdBQUc7UUFBQ2I7S0FBVTtJQUVkLE1BQU1pQixNQUFNLElBQUlDLEtBQUtDLG1CQUFtQkMsVUFBVUMsVUFBVTtRQUFFQyxPQUFPO0lBQVE7SUFDN0UsTUFBTSxFQUFDZCxNQUFLLEVBQUVKLEtBQUksRUFBQyxHQUFHTztJQUV0QixPQUFPTSxJQUFJTSxPQUFPZixPQUFPSjtBQUM3QjtHQW5Cd0JNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2hvb2tzL3VzZVRpbWVBZ28uanM/ZWJjOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuXHJcbmNvbnN0IERBVEVfVU5JVFMgPSBbXHJcbiAgICBbJ2RheScsIDg2NDAwXSxcclxuICAgIFsnaG91cicsIDM2MDBdLFxyXG4gICAgWydtaW51dGUnLCA2MF0sXHJcbiAgICBbJ3NlY29uZHMnLCAxXVxyXG5dXHJcblxyXG5jb25zdCBnZXREYXRlRGlmZnMgPSB0aW1lc3RhbXAgPT4ge1xyXG4gICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKVxyXG4gICAgY29uc3QgZWxhcHNlID0gKHRpbWVzdGFtcCAtIG5vdykgLyAxMDAwXHJcblxyXG4gICAgZm9yIChjb25zdCBbdW5pdCwgc2Vjb25kc0luVW5pdF0gb2YgREFURV9VTklUUykge1xyXG4gICAgICAgIGlmKE1hdGguYWJzKGVsYXBzZSkgPiBzZWNvbmRzSW5Vbml0IHx8IHVuaXQgPT09ICdzZWNvbmRzJykge1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IE1hdGgucm91bmQoZWxhcHNlIC8gc2Vjb25kc0luVW5pdClcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWUsIHVuaXQgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlVGltZUFnbyAodGltZXN0YW1wKSB7XHJcbiAgICBjb25zdCBbdGltZWFnbywgc2V0VGltZWFnb10gPSB1c2VTdGF0ZSgpXHJcbiAgICBnZXREYXRlRGlmZnModGltZXN0YW1wKVxyXG5cclxuICAgIC8vY29uc3QgcnRmID0gbmV3IEludGwuUmVsYXRpdmVUaW1lRm9ybWF0KCdlcycsIHtzdHlsZTogXCJzaG9ydFwifSlcclxuICAgIC8vY29uc29sZS5sb2codmFsdWUsIHVuaXQpXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbmV3VGltZUFnbyA9IGdldERhdGVEaWZmcyh0aW1lc3RhbXApXHJcbiAgICAgICAgICAgIHNldFRpbWVhZ28obmV3VGltZUFnbylcclxuICAgICAgICB9LCAxMDAwKVxyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVvdXQpXHJcbiAgICB9LCBbdGltZXN0YW1wXSlcclxuXHJcbiAgICBjb25zdCBydGYgPSBuZXcgSW50bC5SZWxhdGl2ZVRpbWVGb3JtYXQobmF2aWdhdG9yLmxhbmd1YWdlLCB7IHN0eWxlOiAnc2hvcnQnIH0pXHJcbiAgICBjb25zdCB7dmFsdWUsIHVuaXR9ID0gdGltZWFnb1xyXG5cclxuICAgIHJldHVybiBydGYuZm9ybWF0KHZhbHVlLCB1bml0KVxyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkRBVEVfVU5JVFMiLCJnZXREYXRlRGlmZnMiLCJ0aW1lc3RhbXAiLCJub3ciLCJEYXRlIiwiZWxhcHNlIiwidW5pdCIsInNlY29uZHNJblVuaXQiLCJNYXRoIiwiYWJzIiwidmFsdWUiLCJyb3VuZCIsInVzZVRpbWVBZ28iLCJ0aW1lYWdvIiwic2V0VGltZWFnbyIsInRpbWVvdXQiLCJzZXRUaW1lb3V0IiwibmV3VGltZUFnbyIsImNsZWFyVGltZW91dCIsInJ0ZiIsIkludGwiLCJSZWxhdGl2ZVRpbWVGb3JtYXQiLCJuYXZpZ2F0b3IiLCJsYW5ndWFnZSIsInN0eWxlIiwiZm9ybWF0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./hooks/useTimeAgo.js\n"));

/***/ })

});