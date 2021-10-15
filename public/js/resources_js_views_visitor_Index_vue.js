"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_visitor_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/visitor/Index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/visitor/Index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      loading: true,
      pdfs: [],
      numPdf: 0,
      htmls: [],
      links: [],
      crumbs: [{
        id: 1,
        name: 'Home',
        active: true,
        path: ''
      }]
    };
  },
  created: function created() {
    var _this = this;

    this.axios.get('http://localhost:8000/api/visitor/pdf').then(function (response) {
      _this.pdfs = response.data;
      _this.numPdf = response.data.length;
      if (_this.numPdf > 3) _this.pdfs.splice(3, _this.numPdf);
    })["catch"](function (error) {
      return console.log(error);
    })["finally"](function () {
      return _this.loading = false;
    });
  }
});

/***/ }),

/***/ "./resources/js/views/visitor/Index.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/visitor/Index.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_073c54e2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=073c54e2& */ "./resources/js/views/visitor/Index.vue?vue&type=template&id=073c54e2&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/views/visitor/Index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_073c54e2___WEBPACK_IMPORTED_MODULE_0__.render,
  _Index_vue_vue_type_template_id_073c54e2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/visitor/Index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/visitor/Index.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/visitor/Index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/visitor/Index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/visitor/Index.vue?vue&type=template&id=073c54e2&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/visitor/Index.vue?vue&type=template&id=073c54e2& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_073c54e2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_073c54e2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_073c54e2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=template&id=073c54e2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/visitor/Index.vue?vue&type=template&id=073c54e2&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/visitor/Index.vue?vue&type=template&id=073c54e2&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/visitor/Index.vue?vue&type=template&id=073c54e2& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "main",
      { attrs: { role: "main" } },
      [
        _c("PageHeader", {
          attrs: { "page-title": "Home", crumbs: _vm.crumbs }
        }),
        _vm._v(" "),
        _vm._m(0),
        _vm._v(" "),
        _vm.loading
          ? _c("div", { staticClass: "d-flex align-items-center mt-3" }, [
              _c("strong", [_vm._v("Loading...")]),
              _vm._v(" "),
              _c("div", {
                staticClass: "spinner-border ml-auto",
                attrs: { role: "status", "aria-hidden": "true" }
              })
            ])
          : _c("div", { staticClass: "mt-5" }, [
              _c(
                "div",
                { staticClass: "d-flex justify-content-between" },
                [
                  _c("h5", { staticClass: "mb-1" }, [
                    _vm._v("PDF Resources (" + _vm._s(_vm.numPdf) + " total)")
                  ]),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    { staticClass: "card-link", attrs: { to: "/visitor/pdf" } },
                    [_vm._v("View all")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "row" },
                [
                  _vm.pdfs.length === 0
                    ? _c("div", { staticClass: "col-lg-4" }, [_vm._m(1)])
                    : _vm._l(_vm.pdfs, function(pdf) {
                        return _c(
                          "div",
                          { key: pdf.id, staticClass: "col-lg-4" },
                          [
                            _c("div", { staticClass: "card" }, [
                              _c("div", { staticClass: "card-body" }, [
                                _c("div", { staticClass: "card-title" }, [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "d-flex justify-content-between"
                                    },
                                    [
                                      _c("strong", { staticClass: "mb-1" }, [
                                        _vm._v(_vm._s(pdf.title))
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "dropdown" },
                                        [
                                          _c("ion-icon", {
                                            staticClass: "dropdown-toggle",
                                            staticStyle: { cursor: "pointer" },
                                            attrs: {
                                              name:
                                                "ellipsis-horizontal-outline",
                                              "data-toggle": "dropdown"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "dropdown-menu" },
                                            [
                                              _c(
                                                "a",
                                                {
                                                  staticClass: "dropdown-item",
                                                  attrs: {
                                                    href: pdf.file_path,
                                                    download: pdf.file_name
                                                  }
                                                },
                                                [
                                                  _c("ion-icon", {
                                                    staticClass: "mr-1",
                                                    attrs: {
                                                      name: "download-outline",
                                                      size: "small"
                                                    }
                                                  }),
                                                  _vm._v(
                                                    "\n                        Download PDF\n                      "
                                                  )
                                                ],
                                                1
                                              )
                                            ]
                                          )
                                        ],
                                        1
                                      )
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("p", { staticClass: "mb-1" }, [
                                  _vm._v(_vm._s(pdf.file_name))
                                ]),
                                _vm._v(" "),
                                _c("small", [
                                  _vm._v(
                                    _vm._s(
                                      new Date(pdf.created_at).toUTCString()
                                    )
                                  )
                                ])
                              ])
                            ])
                          ]
                        )
                      })
                ],
                2
              )
            ])
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "jumbotron jumbotron-fluid mt-3" }, [
      _c("div", { staticClass: "container px-5" }, [
        _c("h5", { staticClass: "display-4" }, [_vm._v("Visitor End")]),
        _vm._v(" "),
        _c("p", { staticClass: "lead" }, [
          _vm._v(
            "Welcome! You can download PDF resources, copy HTML resources, and open Link resources here."
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card text-center" }, [
      _c("div", { staticClass: "card-body" }, [
        _vm._v(
          "\n              There are currently no PDF resources.\n            "
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);