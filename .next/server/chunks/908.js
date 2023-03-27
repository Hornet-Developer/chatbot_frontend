"use strict";
exports.id = 908;
exports.ids = [908];
exports.modules = {

/***/ 2908:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Header)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./assets/imges/logoipsum-264.svg
/* harmony default export */ const logoipsum_264 = ({"src":"/_next/static/media/logoipsum-264.9c5b5f86.svg","height":41,"width":170,"blurWidth":0,"blurHeight":0});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/LoginButton.tsx


const LoginButton = ({ className  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: className ? className : "Login-btn",
        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            href: "/login",
            children: "Login"
        })
    });
};
/* harmony default export */ const components_LoginButton = (LoginButton);

;// CONCATENATED MODULE: ./assets/imges/settingIcon.svg
/* harmony default export */ const settingIcon = ({"src":"/_next/static/media/settingIcon.75a625f1.svg","height":24,"width":24,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./assets/imges/chatIcon.svg
/* harmony default export */ const chatIcon = ({"src":"/_next/static/media/chatIcon.8b53b69a.svg","height":22,"width":22,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./_mock/menuList.ts


const menuList = [
    {
        href: "/chatbot",
        src: chatIcon,
        alt: "chat",
        text: "Chat"
    },
    {
        href: "/settings",
        src: settingIcon,
        alt: "settings",
        text: "Settings"
    }
];
/* harmony default export */ const _mock_menuList = (menuList);

;// CONCATENATED MODULE: ./components/MenuList.tsx




const MenuList = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: "list",
        children: _mock_menuList.map(({ href , src , alt , text  }, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                    href: href,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: src,
                            alt: alt
                        }),
                        " ",
                        text
                    ]
                })
            }, index))
    });
};
/* harmony default export */ const components_MenuList = (MenuList);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./hooks/useToggle.ts
var useToggle = __webpack_require__(1389);
// EXTERNAL MODULE: ./context.ts
var context = __webpack_require__(7209);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/Header.tsx










const Header = ()=>{
    const { isOpen , onToggle  } = (0,useToggle/* default */.Z)();
    const { toggleSideMenu  } = (0,external_react_.useContext)(context/* SideMenuContext */.E);
    const router = (0,router_.useRouter)();
    const isLoginPage = router.pathname === "/login";
    const isChatbotPage = router.pathname === "/chatbot";
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: isLoginPage ? /*#__PURE__*/ jsx_runtime_.jsx("header", {
            className: "main-header",
            children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                className: "navigetion",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "navlisting",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "left",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "logo",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: logoipsum_264,
                                    alt: "logo",
                                    title: "main-logo"
                                })
                            })
                        })
                    })
                })
            })
        }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
            className: "main-header",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                    className: "navigetion",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "navlisting",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "left",
                                children: [
                                    isChatbotPage && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "humburger-left",
                                        onClick: toggleSideMenu,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "main-header-menu-icon d-lg-none",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "logo",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                src: logoipsum_264,
                                                alt: "logo",
                                                title: "main-logo"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(components_MenuList, {})
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "right",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(components_LoginButton, {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "humburger-right",
                                        onClick: onToggle,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "#",
                                            className: "main-header-menu-icon d-lg-none",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: `responsive-bar ${isOpen ? "slide-left" : ""}`,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(components_MenuList, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(components_LoginButton, {
                            className: "Login2-btn"
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const components_Header = (Header);


/***/ }),

/***/ 7209:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ SideMenuContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const SideMenuContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});


/***/ }),

/***/ 1389:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ })

};
;