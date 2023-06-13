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

/***/ "./pages/home/index.js":
/*!*****************************!*\
  !*** ./pages/home/index.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/AppLayout */ \"./components/AppLayout/index.js\");\n/* harmony import */ var _components_Devit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Devit */ \"./components/Devit/index.js\");\n/* harmony import */ var _components_Icons_Create__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Icons/Create */ \"./components/Icons/Create.js\");\n/* harmony import */ var _firebase_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/firebase/client */ \"./firebase/client.js\");\n/* harmony import */ var _hooks_useUser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/hooks/useUser */ \"./hooks/useUser.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction HomePage() {\n    _s();\n    const [timeline, setTimeline] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)([]);\n    const user = (0,_hooks_useUser__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n    (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(()=>{\n        user && (0,_firebase_client__WEBPACK_IMPORTED_MODULE_5__.fetchLatestDevits)().then((timeline)=>{\n            setTimeline(timeline);\n        });\n    }, [\n        user\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AppLayout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                        className: \"jsx-396eeff5fa21888c\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"jsx-396eeff5fa21888c\",\n                            children: \"Inicio\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Repo\\\\MartiNextJSApp\\\\pages\\\\home\\\\index.js\",\n                            lineNumber: 22,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Repo\\\\MartiNextJSApp\\\\pages\\\\home\\\\index.js\",\n                        lineNumber: 21,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: \"jsx-396eeff5fa21888c\",\n                        children: timeline.map((param)=>/*#__PURE__*/ {\n                            let { id , userName , avatar , content , userId , createdAt  } = param;\n                            return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Devit__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                avatar: avatar,\n                                userName: userName,\n                                content: content,\n                                id: userId,\n                                userId: userId,\n                                createdAt: createdAt\n                            }, id, false, {\n                                fileName: \"D:\\\\Repo\\\\MartiNextJSApp\\\\pages\\\\home\\\\index.js\",\n                                lineNumber: 27,\n                                columnNumber: 25\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Repo\\\\MartiNextJSApp\\\\pages\\\\home\\\\index.js\",\n                        lineNumber: 25,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                        className: \"jsx-396eeff5fa21888c\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {\n                            href: \"/compose/tweet\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Icons_Create__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                stroke: \"#09f\",\n                                width: 32,\n                                height: 32\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Repo\\\\MartiNextJSApp\\\\pages\\\\home\\\\index.js\",\n                                lineNumber: 33,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Repo\\\\MartiNextJSApp\\\\pages\\\\home\\\\index.js\",\n                            lineNumber: 32,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Repo\\\\MartiNextJSApp\\\\pages\\\\home\\\\index.js\",\n                        lineNumber: 31,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Repo\\\\MartiNextJSApp\\\\pages\\\\home\\\\index.js\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"396eeff5fa21888c\",\n                children: \"header.jsx-396eeff5fa21888c{height:49px;position:-webkit-sticky;position:sticky;solid:#ccc;top:0;border-bottom:1px solid#eee;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;width:100%;background:#fffa;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px)}h2.jsx-396eeff5fa21888c{font-weight:700;font-size:21px;padding-left:15px}nav.jsx-396eeff5fa21888c{bottom:0;position:-webkit-sticky;position:sticky;height:49px;border-top:1px solid#eee;width:100%;background:#fff}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true);\n}\n_s(HomePage, \"2oOSuyRPMGxJhPs5LvODiSOaEII=\", false, function() {\n    return [\n        _hooks_useUser__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    ];\n});\n_c = HomePage;\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ob21lL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThDO0FBQ1I7QUFDUTtBQUNPO0FBQ2hCO0FBQ1Q7QUFDYTtBQUUxQixTQUFTUTs7SUFDcEIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdILCtDQUFRQSxDQUFDLEVBQUU7SUFDM0MsTUFBTUksT0FBT1AsMERBQU9BO0lBRXBCRSxnREFBU0EsQ0FBQztRQUFRSyxRQUFRUixtRUFBaUJBLEdBQUdTLEtBQUtILENBQUFBO1lBQy9DQyxZQUFZRDtRQUNoQjtJQUNBLEdBQUc7UUFBQ0U7S0FBSztJQUVULHFCQUNJOzswQkFDSSw4REFBQ1gsNkRBQVNBOztrQ0FDTiw4REFBQ2E7O2tDQUNHLDRFQUFDQzs7c0NBQUc7Ozs7Ozs7Ozs7O2tDQUdSLDhEQUFDQzs7a0NBQ0lOLFNBQVNPLElBQUk7Z0NBQUMsRUFBRUMsR0FBRSxFQUFFQyxTQUFRLEVBQUVDLE9BQU0sRUFBRUMsUUFBTyxFQUFFQyxPQUFNLEVBQUVDLFVBQVMsRUFBRTttQ0FDL0QsOERBQUNyQix5REFBS0E7Z0NBQVVrQixRQUFRQTtnQ0FBUUQsVUFBVUE7Z0NBQVVFLFNBQVNBO2dDQUFTSCxJQUFJSTtnQ0FBUUEsUUFBUUE7Z0NBQVFDLFdBQVdBOytCQUFqR0w7Ozs7O3dCQUE2Rzs7Ozs7O2tDQUlqSSw4REFBQ007O2tDQUNHLDRFQUFDbEIsa0RBQUlBOzRCQUFDbUIsTUFBSztzQ0FDUCw0RUFBQ3RCLGdFQUFNQTtnQ0FBQ3VCLFFBQU87Z0NBQU9DLE9BQU87Z0NBQUlDLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQ2pFO0dBN0R3Qm5COztRQUVQSixzREFBT0E7OztLQUZBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9ob21lL2luZGV4LmpzPzcxZGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcExheW91dCBmcm9tICdAL2NvbXBvbmVudHMvQXBwTGF5b3V0J1xyXG5pbXBvcnQgRGV2aXQgZnJvbSAnQC9jb21wb25lbnRzL0Rldml0J1xyXG5pbXBvcnQgQ3JlYXRlIGZyb20gJ0AvY29tcG9uZW50cy9JY29ucy9DcmVhdGUnXHJcbmltcG9ydCB7IGZldGNoTGF0ZXN0RGV2aXRzIH0gZnJvbSAnQC9maXJlYmFzZS9jbGllbnQnXHJcbmltcG9ydCB1c2VVc2VyIGZyb20gJ0AvaG9va3MvdXNlVXNlcidcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZVBhZ2UgKCkge1xyXG4gICAgY29uc3QgW3RpbWVsaW5lLCBzZXRUaW1lbGluZV0gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IHVzZXIgPSB1c2VVc2VyKClcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4geyB1c2VyICYmIGZldGNoTGF0ZXN0RGV2aXRzKCkudGhlbih0aW1lbGluZSA9PiB7XHJcbiAgICAgICAgc2V0VGltZWxpbmUodGltZWxpbmUpXHJcbiAgICB9KVxyXG4gICAgfSwgW3VzZXJdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEFwcExheW91dD5cclxuICAgICAgICAgICAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPkluaWNpbzwvaDI+XHJcbiAgICAgICAgICAgICAgICA8L2hlYWRlcj5cclxuXHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICB7dGltZWxpbmUubWFwKCh7IGlkLCB1c2VyTmFtZSwgYXZhdGFyLCBjb250ZW50LCB1c2VySWQsIGNyZWF0ZWRBdCB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEZXZpdCBrZXk9e2lkfSBhdmF0YXI9e2F2YXRhcn0gdXNlck5hbWU9e3VzZXJOYW1lfSBjb250ZW50PXtjb250ZW50fSBpZD17dXNlcklkfSB1c2VySWQ9e3VzZXJJZH0gY3JlYXRlZEF0PXtjcmVhdGVkQXR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgICAgICAgICAgPG5hdj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbXBvc2UvdHdlZXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENyZWF0ZSBzdHJva2U9XCIjMDlmXCIgd2lkdGg9ezMyfSBoZWlnaHQ9ezMyfT48L0NyZWF0ZT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgPC9BcHBMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICBoZWFkZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDlweDtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgICAgICAgICAgICAgICAgIHNvbGlkOiAjY2NjO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZmFhO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xyXG4gICAgICAgICAgICAgICAgfSAgICBcclxuXHJcbiAgICAgICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIG5hdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0OXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsiQXBwTGF5b3V0IiwiRGV2aXQiLCJDcmVhdGUiLCJmZXRjaExhdGVzdERldml0cyIsInVzZVVzZXIiLCJMaW5rIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJIb21lUGFnZSIsInRpbWVsaW5lIiwic2V0VGltZWxpbmUiLCJ1c2VyIiwidGhlbiIsImhlYWRlciIsImgyIiwic2VjdGlvbiIsIm1hcCIsImlkIiwidXNlck5hbWUiLCJhdmF0YXIiLCJjb250ZW50IiwidXNlcklkIiwiY3JlYXRlZEF0IiwibmF2IiwiaHJlZiIsInN0cm9rZSIsIndpZHRoIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/home/index.js\n"));

/***/ })

});