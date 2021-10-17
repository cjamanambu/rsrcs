"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_admin_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/Index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/Index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      loading: true,
      pdfs: 0,
      htmls: 0,
      links: 0
    };
  },
  created: function created() {
    var _this = this;

    this.axios.get("".concat(this.$api, "admin/pdf")).then(function (response) {
      _this.pdfs = response.data.length;
    })["catch"](function (error) {
      return _this.$toast.error(error.response.data.message);
    })["finally"](function () {
      _this.axios.get("".concat(_this.$api, "admin/html")).then(function (response) {
        _this.htmls = response.data.length;
      })["catch"](function (error) {
        return _this.$toast.error(error.response.data.message);
      })["finally"](function () {
        _this.axios.get("".concat(_this.$api, "admin/link")).then(function (response) {
          _this.links = response.data.length;
        })["catch"](function (error) {
          return _this.$toast.error(error.response.data.message);
        })["finally"](function () {
          return _this.loading = false;
        });
      });
    });
  }
});

/***/ }),

/***/ "./resources/js/views/admin/Index.vue":
/*!********************************************!*\
  !*** ./resources/js/views/admin/Index.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_1fbfae7a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=1fbfae7a& */ "./resources/js/views/admin/Index.vue?vue&type=template&id=1fbfae7a&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/Index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_1fbfae7a___WEBPACK_IMPORTED_MODULE_0__.render,
  _Index_vue_vue_type_template_id_1fbfae7a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/Index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/Index.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/admin/Index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/Index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/Index.vue?vue&type=template&id=1fbfae7a&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/admin/Index.vue?vue&type=template&id=1fbfae7a& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_1fbfae7a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_1fbfae7a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_1fbfae7a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=template&id=1fbfae7a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/Index.vue?vue&type=template&id=1fbfae7a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/Index.vue?vue&type=template&id=1fbfae7a&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/Index.vue?vue&type=template&id=1fbfae7a& ***!
  \******************************************************************************************************************************************************************************************************************/
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
    _c("main", { attrs: { role: "main" } }, [
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
        : _c("div", { staticClass: "row mt-3" }, [
            _c("div", { staticClass: "col-lg-4" }, [
              _c("div", { staticClass: "card" }, [
                _c(
                  "div",
                  { staticClass: "card-body" },
                  [
                    _c("h5", { staticClass: "card-title" }, [
                      _vm._v("PDF Resources")
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "card-text" }, [
                      _vm._v(
                        "There are currently " +
                          _vm._s(_vm.pdfs) +
                          " PDF Resources in RSRCS."
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "router-link",
                      { staticClass: "card-link", attrs: { to: "/admin/pdf" } },
                      [_vm._v("View more")]
                    )
                  ],
                  1
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-4" }, [
              _c("div", { staticClass: "card" }, [
                _c(
                  "div",
                  { staticClass: "card-body" },
                  [
                    _c("h5", { staticClass: "card-title" }, [
                      _vm._v("HTML Resources")
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "card-text" }, [
                      _vm._v(
                        "There are currently " +
                          _vm._s(_vm.htmls) +
                          " HTML Resources in RSRCS."
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "router-link",
                      {
                        staticClass: "card-link",
                        attrs: { to: "/admin/html" }
                      },
                      [_vm._v("View more")]
                    )
                  ],
                  1
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-4" }, [
              _c("div", { staticClass: "card" }, [
                _c(
                  "div",
                  { staticClass: "card-body" },
                  [
                    _c("h5", { staticClass: "card-title" }, [
                      _vm._v("Link Resources")
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "card-text" }, [
                      _vm._v(
                        "There are currently " +
                          _vm._s(_vm.links) +
                          " Link Resources in RSRCS."
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "router-link",
                      {
                        staticClass: "card-link",
                        attrs: { to: "/admin/link" }
                      },
                      [_vm._v("View more")]
                    )
                  ],
                  1
                )
              ])
            ])
          ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "jumbotron jumbotron-fluid mt-3" }, [
      _c("div", { staticClass: "container px-5" }, [
        _c("h5", { staticClass: "display-4" }, [_vm._v("Admin End")]),
        _vm._v(" "),
        _c("p", { staticClass: "lead" }, [
          _vm._v(
            "Welcome! You can add, edit and delete PDF, HTML & Link resources here."
          )
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);