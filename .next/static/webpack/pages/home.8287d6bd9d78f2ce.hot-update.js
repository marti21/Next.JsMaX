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

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/AppLayout */ \"./components/AppLayout/index.js\");\n/* harmony import */ var _components_Devit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Devit */ \"./components/Devit/index.js\");\n/* harmony import */ var _components_Icons_Create__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Icons/Create */ \"./components/Icons/Create.js\");\n/* harmony import */ var _components_Icons_Home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Icons/Home */ \"./components/Icons/Home.js\");\n/* harmony import */ var _components_Icons_Search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Icons/Search */ \"./components/Icons/Search.js\");\n/* harmony import */ var _firebase_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/firebase/client */ \"./firebase/client.js\");\n/* harmony import */ var _hooks_useUser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/hooks/useUser */ \"./hooks/useUser.js\");\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/styles/theme */ \"./styles/theme.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nfunction HomePage() {\n    _s();\n    const [timeline, setTimeline] = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)([]);\n    const user = (0,_hooks_useUser__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n    (0,react__WEBPACK_IMPORTED_MODULE_12__.useEffect)(()=>{\n        user && (0,_firebase_client__WEBPACK_IMPORTED_MODULE_7__.fetchLatestDevits)().then((timeline)=>{\n            setTimeline(timeline);\n        });\n    }, [\n        user\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AppLayout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_10___default()), {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                                [\n                                    \"c6cc2e6ec8f52026\",\n                                    [\n                                        _styles_theme__WEBPACK_IMPORTED_MODULE_9__.colors.primary\n                                    ]\n                                ]\n                            ]),\n                            children: \"Inicio / Marti\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Repo\\\\MartiNextJSApp\\\\pages\\\\home\\\\index.js\",\n                            lineNumber: 26,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Repo\\\\MartiNextJSApp\\\\pages\\\\home\\\\index.js\",\n                        lineNumber: 25,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                            [\n                                \"c6cc2e6ec8f52026\",\n                                [\n                                    _styles_theme__WEBPACK_IMPORTED_MODULE_9__.colors.primary\n                                ]\n                            ]\n                        ]),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                                [\n                                    \"c6cc2e6ec8f52026\",\n                                    [\n                                        _styles_theme__WEBPACK_IMPORTED_MODULE_9__.colors.primary\n                                    ]\n                                ]\n                            ]),\n                            children: \"Inicio\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Repo\\\\MartiNextJSApp\\\\pages\\\\home\\\\index.js\",\n                            lineNumber: 29,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Repo\\\\MartiNextJSApp\\\\pages\\\\home\\\\index.js\",\n                        lineNumber: 28,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                            [\n                                \"c6cc2e6ec8f52026\",\n                                [\n                                    _styles_theme__WEBPACK_IMPORTED_MODULE_9__.colors.primary\n                                ]\n                            ]\n                        ]),\n                        children: timeline.map((param)=>/*#__PURE__*/ {\n                            let { id , userName , avatar , content , userId , createdAt  } = param;\n                            return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Devit__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                avatar: avatar,\n                                userName: userName,\n                                content: content,\n                                id: userId,\n                                userId: userId,\n                                createdAt: createdAt\n                            }, id, false, {\n                                fileName: \"D:\\\\Repo\\\\MartiNextJSApp\\\\pages\\\\home\\\\index.js\",\n                                lineNumber: 34,\n                                columnNumber: 25\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Repo\\\\MartiNextJSApp\\\\pages\\\\home\\\\index.js\",\n                        lineNumber: 32,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                            [\n                                \"c6cc2e6ec8f52026\",\n                                [\n                                    _styles_theme__WEBPACK_IMPORTED_MODULE_9__.colors.primary\n                                ]\n                            ]\n                        ]),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                                    [\n                                        \"c6cc2e6ec8f52026\",\n                                        [\n                                            _styles_theme__WEBPACK_IMPORTED_MODULE_9__.colors.primary\n                                        ]\n                                    ]\n                                ]),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_11___default()), {\n                                    href: \"/home\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Icons_Home__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                        stroke: \"#09f\",\n                                        width: 32,\n                                        height: 32\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Repo\\\\MartiNextJSApp\\\\pages\\\\home\\\\index.js\",\n                                        lineNumber: 41,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Repo\\\\MartiNextJSApp\\\\pages\\\\home\\\\index.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Repo\\\\MartiNextJSApp\\\\pages\\\\home\\\\index.js\",\n                                lineNumber: 39,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                                    [\n                                        \"c6cc2e6ec8f52026\",\n                                        [\n                                            _styles_theme__WEBPACK_IMPORTED_MODULE_9__.colors.primary\n                                        ]\n                                    ]\n                                ]),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_11___default()), {\n                                    href: \"/search\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Icons_Search__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                        stroke: \"#09f\",\n                                        width: 32,\n                                        height: 32\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Repo\\\\MartiNextJSApp\\\\pages\\\\home\\\\index.js\",\n                                        lineNumber: 46,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Repo\\\\MartiNextJSApp\\\\pages\\\\home\\\\index.js\",\n                                    lineNumber: 45,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Repo\\\\MartiNextJSApp\\\\pages\\\\home\\\\index.js\",\n                                lineNumber: 44,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                                    [\n                                        \"c6cc2e6ec8f52026\",\n                                        [\n                                            _styles_theme__WEBPACK_IMPORTED_MODULE_9__.colors.primary\n                                        ]\n                                    ]\n                                ]),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_11___default()), {\n                                    href: \"/compose/tweet\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Icons_Create__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        stroke: \"#09f\",\n                                        width: 32,\n                                        height: 32\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Repo\\\\MartiNextJSApp\\\\pages\\\\home\\\\index.js\",\n                                        lineNumber: 51,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Repo\\\\MartiNextJSApp\\\\pages\\\\home\\\\index.js\",\n                                    lineNumber: 50,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Repo\\\\MartiNextJSApp\\\\pages\\\\home\\\\index.js\",\n                                lineNumber: 49,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Repo\\\\MartiNextJSApp\\\\pages\\\\home\\\\index.js\",\n                        lineNumber: 38,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Repo\\\\MartiNextJSApp\\\\pages\\\\home\\\\index.js\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"c6cc2e6ec8f52026\",\n                dynamic: [\n                    _styles_theme__WEBPACK_IMPORTED_MODULE_9__.colors.primary\n                ],\n                children: \"header.__jsx-style-dynamic-selector{height:49px;position:-webkit-sticky;position:sticky;solid:#ccc;top:0;border-bottom:1px solid#eee;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;width:100%;background:#fffa;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px)}h2.__jsx-style-dynamic-selector{font-weight:800;font-size:21px;padding-left:15px}nav.__jsx-style-dynamic-selector{bottom:0;position:-webkit-sticky;position:sticky;height:49px;border-top:1px solid#eee;width:100%;background:#fff;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}section.__jsx-style-dynamic-selector{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1}nav.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;height:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-webkit-flex:1 1 auto;-moz-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}nav.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector:hover{background:-webkit-radial-gradient(#09f2 15%,transparent 16%);background:-moz-radial-gradient(#09f2 15%,transparent 16%);background:-o-radial-gradient(#09f2 15%,transparent 16%);background:radial-gradient(#09f2 15%,transparent 16%);-webkit-background-size:180px 180px;-moz-background-size:180px 180px;-o-background-size:180px 180px;background-size:180px 180px;background-position:center}nav.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector:hover>svg{stroke:\".concat(_styles_theme__WEBPACK_IMPORTED_MODULE_9__.colors.primary, \"}\")\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true);\n}\n_s(HomePage, \"2oOSuyRPMGxJhPs5LvODiSOaEII=\", false, function() {\n    return [\n        _hooks_useUser__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n    ];\n});\n_c = HomePage;\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ob21lL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEM7QUFDUjtBQUNRO0FBQ0o7QUFDSTtBQUNPO0FBQ2hCO0FBQ0U7QUFDWDtBQUNBO0FBQ2E7QUFFMUIsU0FBU1k7O0lBQ3BCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHSCxnREFBUUEsQ0FBQyxFQUFFO0lBQzNDLE1BQU1JLE9BQU9ULDBEQUFPQTtJQUVwQkksaURBQVNBLENBQUM7UUFBUUssUUFBUVYsbUVBQWlCQSxHQUFHVyxLQUFLSCxDQUFBQTtZQUMvQ0MsWUFBWUQ7UUFDaEI7SUFDQSxHQUFHO1FBQUNFO0tBQUs7SUFFVCxxQkFDSTs7MEJBQ0ksOERBQUNmLDZEQUFTQTs7a0NBQ04sOERBQUNRLG1EQUFJQTtrQ0FDRCw0RUFBQ1M7Ozs7O3dDQWdGU1YseURBQWNXOzs7O3NDQWhGakI7Ozs7Ozs7Ozs7O2tDQUVYLDhEQUFDQzs7Ozs7b0NBOEVhWix5REFBY1c7Ozs7a0NBN0V4Qiw0RUFBQ0U7Ozs7O3dDQTZFU2IseURBQWNXOzs7O3NDQTdFcEI7Ozs7Ozs7Ozs7O2tDQUdSLDhEQUFDRzs7Ozs7b0NBMEVhZCx5REFBY1c7Ozs7a0NBekV2QkwsU0FBU1MsSUFBSTtnQ0FBQyxFQUFFQyxHQUFFLEVBQUVDLFNBQVEsRUFBRUMsT0FBTSxFQUFFQyxRQUFPLEVBQUVDLE9BQU0sRUFBRUMsVUFBUyxFQUFFO21DQUMvRCw4REFBQzNCLHlEQUFLQTtnQ0FBVXdCLFFBQVFBO2dDQUFRRCxVQUFVQTtnQ0FBVUUsU0FBU0E7Z0NBQVNILElBQUlJO2dDQUFRQSxRQUFRQTtnQ0FBUUMsV0FBV0E7K0JBQWpHTDs7Ozs7d0JBQTZHOzs7Ozs7a0NBSWpJLDhEQUFDTTs7Ozs7b0NBb0VhdEIseURBQWNXOzs7OzswQ0FuRXhCLDhEQUFDWTs7Ozs7NENBbUVTdkIseURBQWNXOzs7OzBDQWxFcEIsNEVBQUNULG1EQUFJQTtvQ0FBQ3NCLE1BQUs7OENBQ1AsNEVBQUM1Qiw4REFBSUE7d0NBQUM2QixRQUFPO3dDQUFPQyxPQUFPO3dDQUFJQyxRQUFROzs7Ozs7Ozs7Ozs7Ozs7OzBDQUcvQyw4REFBQ0o7Ozs7OzRDQThEU3ZCLHlEQUFjVzs7OzswQ0E3RHBCLDRFQUFDVCxtREFBSUE7b0NBQUNzQixNQUFLOzhDQUNQLDRFQUFDM0IsZ0VBQU1BO3dDQUFDNEIsUUFBTzt3Q0FBT0MsT0FBTzt3Q0FBSUMsUUFBUTs7Ozs7Ozs7Ozs7Ozs7OzswQ0FHakQsOERBQUNKOzs7Ozs0Q0F5RFN2Qix5REFBY1c7Ozs7MENBeERwQiw0RUFBQ1QsbURBQUlBO29DQUFDc0IsTUFBSzs4Q0FDUCw0RUFBQzdCLGdFQUFNQTt3Q0FBQzhCLFFBQU87d0NBQU9DLE9BQU87d0NBQUlDLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBdUR2QzNCLHlEQUFjVzs7bzREQUFkWCx5REFBY1c7Ozs7QUFNNUM7R0FuR3dCTjs7UUFFUE4sc0RBQU9BOzs7S0FGQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG9tZS9pbmRleC5qcz83MWRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHBMYXlvdXQgZnJvbSAnQC9jb21wb25lbnRzL0FwcExheW91dCdcclxuaW1wb3J0IERldml0IGZyb20gJ0AvY29tcG9uZW50cy9EZXZpdCdcclxuaW1wb3J0IENyZWF0ZSBmcm9tICdAL2NvbXBvbmVudHMvSWNvbnMvQ3JlYXRlJ1xyXG5pbXBvcnQgSG9tZSBmcm9tICdAL2NvbXBvbmVudHMvSWNvbnMvSG9tZSdcclxuaW1wb3J0IFNlYXJjaCBmcm9tICdAL2NvbXBvbmVudHMvSWNvbnMvU2VhcmNoJ1xyXG5pbXBvcnQgeyBmZXRjaExhdGVzdERldml0cyB9IGZyb20gJ0AvZmlyZWJhc2UvY2xpZW50J1xyXG5pbXBvcnQgdXNlVXNlciBmcm9tICdAL2hvb2tzL3VzZVVzZXInXHJcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJ0Avc3R5bGVzL3RoZW1lJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVQYWdlICgpIHtcclxuICAgIGNvbnN0IFt0aW1lbGluZSwgc2V0VGltZWxpbmVdID0gdXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCB1c2VyID0gdXNlVXNlcigpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHsgdXNlciAmJiBmZXRjaExhdGVzdERldml0cygpLnRoZW4odGltZWxpbmUgPT4ge1xyXG4gICAgICAgIHNldFRpbWVsaW5lKHRpbWVsaW5lKVxyXG4gICAgfSlcclxuICAgIH0sIFt1c2VyXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxBcHBMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+SW5pY2lvIC8gTWFydGk8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICAgICAgPGhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+SW5pY2lvPC9oMj5cclxuICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxyXG5cclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aW1lbGluZS5tYXAoKHsgaWQsIHVzZXJOYW1lLCBhdmF0YXIsIGNvbnRlbnQsIHVzZXJJZCwgY3JlYXRlZEF0IH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPERldml0IGtleT17aWR9IGF2YXRhcj17YXZhdGFyfSB1c2VyTmFtZT17dXNlck5hbWV9IGNvbnRlbnQ9e2NvbnRlbnR9IGlkPXt1c2VySWR9IHVzZXJJZD17dXNlcklkfSBjcmVhdGVkQXQ9e2NyZWF0ZWRBdH0gLz5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8bmF2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2hvbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIb21lIHN0cm9rZT1cIiMwOWZcIiB3aWR0aD17MzJ9IGhlaWdodD17MzJ9PjwvSG9tZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zZWFyY2hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWFyY2ggc3Ryb2tlPVwiIzA5ZlwiIHdpZHRoPXszMn0gaGVpZ2h0PXszMn0+PC9TZWFyY2g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29tcG9zZS90d2VldFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENyZWF0ZSBzdHJva2U9XCIjMDlmXCIgd2lkdGg9ezMyfSBoZWlnaHQ9ezMyfT48L0NyZWF0ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICA8L0FwcExheW91dD5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgIGhlYWRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0OXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICAgICAgICAgICAgICAgICAgc29saWQ6ICNjY2M7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmYWE7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XHJcbiAgICAgICAgICAgICAgICB9ICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjFweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbmF2IHtcclxuICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHNlY3Rpb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbmF2IHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMSAxIGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbmF2IHNwYW46aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgjMDA5OWZmMjIgMTUlLCB0cmFuc3BhcmVudCAxNiUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTgwcHggMTgwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIG5hdiBzcGFuOmhvdmVyID4gOmdsb2JhbChzdmcpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2U6ICR7Y29sb3JzLnByaW1hcnl9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsiQXBwTGF5b3V0IiwiRGV2aXQiLCJDcmVhdGUiLCJIb21lIiwiU2VhcmNoIiwiZmV0Y2hMYXRlc3REZXZpdHMiLCJ1c2VVc2VyIiwiY29sb3JzIiwiSGVhZCIsIkxpbmsiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkhvbWVQYWdlIiwidGltZWxpbmUiLCJzZXRUaW1lbGluZSIsInVzZXIiLCJ0aGVuIiwidGl0bGUiLCJwcmltYXJ5IiwiaGVhZGVyIiwiaDIiLCJzZWN0aW9uIiwibWFwIiwiaWQiLCJ1c2VyTmFtZSIsImF2YXRhciIsImNvbnRlbnQiLCJ1c2VySWQiLCJjcmVhdGVkQXQiLCJuYXYiLCJzcGFuIiwiaHJlZiIsInN0cm9rZSIsIndpZHRoIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/home/index.js\n"));

/***/ }),

/***/ "./node_modules/next/head.js":
/*!***********************************!*\
  !*** ./node_modules/next/head.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("module.exports = __webpack_require__(/*! ./dist/shared/lib/head */ \"./node_modules/next/dist/shared/lib/head.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9oZWFkLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBLGlIQUFrRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9oZWFkLmpzPzg4NDkiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3Qvc2hhcmVkL2xpYi9oZWFkJylcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/head.js\n"));

/***/ })

});