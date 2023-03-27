(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7209:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ SideMenuContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const SideMenuContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});


/***/ }),

/***/ 1389:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useToggle = ()=>{
    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const onOpen = ()=>{
        setIsOpen(true);
    };
    const onClose = ()=>{
        setIsOpen(false);
    };
    const onToggle = ()=>{
        setIsOpen((prev)=>!prev);
    };
    return {
        isOpen,
        onOpen,
        onClose,
        onToggle
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useToggle);


/***/ }),

/***/ 4178:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(908);
/* harmony import */ var _assets_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_css_global_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1893);
/* harmony import */ var _assets_css_global_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_css_global_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_css_header_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3099);
/* harmony import */ var _assets_css_header_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_css_header_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_css_footer_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5694);
/* harmony import */ var _assets_css_footer_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_css_footer_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_css_chatbord_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8197);
/* harmony import */ var _assets_css_chatbord_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_css_chatbord_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_css_chatbord_responsive_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3321);
/* harmony import */ var _assets_css_chatbord_responsive_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_css_chatbord_responsive_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_css_secttings_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8800);
/* harmony import */ var _assets_css_secttings_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_css_secttings_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_css_settings_responsive_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9419);
/* harmony import */ var _assets_css_settings_responsive_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_css_settings_responsive_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_css_login_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2789);
/* harmony import */ var _assets_css_login_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_css_login_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_css_login_responsive_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(741);
/* harmony import */ var _assets_css_login_responsive_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_css_login_responsive_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _hooks_useToggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1389);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7209);
// Modules


// Global CSS



// Page Specific CSS






// Files


function App({ Component , pageProps  }) {
    const { isOpen , onToggle  } = (0,_hooks_useToggle__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)();
    const value = {
        isSideMenuVisible: isOpen,
        toggleSideMenu: onToggle
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_context__WEBPACK_IMPORTED_MODULE_12__/* .SideMenuContext.Provider */ .E.Provider, {
        value: value,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
            ...pageProps
        })
    });
}


/***/ }),

/***/ 908:
/***/ (() => {



/***/ }),

/***/ 3321:
/***/ (() => {



/***/ }),

/***/ 8197:
/***/ (() => {



/***/ }),

/***/ 5694:
/***/ (() => {



/***/ }),

/***/ 1893:
/***/ (() => {



/***/ }),

/***/ 3099:
/***/ (() => {



/***/ }),

/***/ 741:
/***/ (() => {



/***/ }),

/***/ 2789:
/***/ (() => {



/***/ }),

/***/ 8800:
/***/ (() => {



/***/ }),

/***/ 9419:
/***/ (() => {



/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4178));
module.exports = __webpack_exports__;

})();