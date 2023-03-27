"use strict";
exports.id = 1;
exports.ids = [1];
exports.modules = {

/***/ 5001:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout_Main)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/Header.tsx + 6 modules
var Header = __webpack_require__(2908);
;// CONCATENATED MODULE: ./assets/imges/heartIcon.svg
/* harmony default export */ const heartIcon = ({"src":"/_next/static/media/heartIcon.f0175463.svg","height":16,"width":16,"blurWidth":0,"blurHeight":0});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/Footer.tsx



const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: "footer-main-box",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "footer-box",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "col-md-12",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "fs-6",
                                children: [
                                    "Built with",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "d-inline-block",
                                        "aria-label": "love",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: heartIcon,
                                            alt: "love"
                                        })
                                    }),
                                    "and GPT-4"
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "fs-12",
                                children: "Version: ALPHA 2.4 - MAR 17"
                            })
                        ]
                    })
                })
            })
        })
    });
};
/* harmony default export */ const components_Footer = (Footer);

;// CONCATENATED MODULE: ./components/layout/Main.tsx




const Main = ({ children  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "page",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "main-wrap",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Header/* default */.Z, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("main", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                            children: children
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_Footer, {})
                ]
            })
        })
    });
};
/* harmony default export */ const layout_Main = (Main);


/***/ })

};
;