"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_visitor_VisitorHTML_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/visitor/VisitorHTML.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/visitor/VisitorHTML.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_HTMLResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/HTMLResource */ "./resources/js/views/visitor/components/HTMLResource.vue");
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
  components: {
    HTMLResource: _components_HTMLResource__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      loading: true,
      htmls: []
    };
  },
  created: function created() {
    var _this = this;

    this.axios.get("".concat(this.$api, "visitor/html")).then(function (response) {
      _this.htmls = response.data;
    })["catch"](function (error) {
      return console.log(error);
    })["finally"](function () {
      return _this.loading = false;
    });
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/visitor/components/HTMLResource.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/visitor/components/HTMLResource.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    html: {
      type: Object,
      required: true
    },
    isFull: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    copyHtml: function copyHtml(html) {
      var _this = this;

      this.$copyText(html.snippet).then(function (e) {
        _this.$toast.info("Copied ".concat(html.title, "!"));

        console.log(e);
      })["catch"](function (e) {
        _this.$toast.error('Not Copied');

        console.log(e);
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/views/visitor/VisitorHTML.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/visitor/VisitorHTML.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _VisitorHTML_vue_vue_type_template_id_4bfe43a9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VisitorHTML.vue?vue&type=template&id=4bfe43a9& */ "./resources/js/views/visitor/VisitorHTML.vue?vue&type=template&id=4bfe43a9&");
/* harmony import */ var _VisitorHTML_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VisitorHTML.vue?vue&type=script&lang=js& */ "./resources/js/views/visitor/VisitorHTML.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VisitorHTML_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VisitorHTML_vue_vue_type_template_id_4bfe43a9___WEBPACK_IMPORTED_MODULE_0__.render,
  _VisitorHTML_vue_vue_type_template_id_4bfe43a9___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/visitor/VisitorHTML.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/visitor/components/HTMLResource.vue":
/*!****************************************************************!*\
  !*** ./resources/js/views/visitor/components/HTMLResource.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HTMLResource_vue_vue_type_template_id_ce58d53c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HTMLResource.vue?vue&type=template&id=ce58d53c& */ "./resources/js/views/visitor/components/HTMLResource.vue?vue&type=template&id=ce58d53c&");
/* harmony import */ var _HTMLResource_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HTMLResource.vue?vue&type=script&lang=js& */ "./resources/js/views/visitor/components/HTMLResource.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _HTMLResource_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HTMLResource_vue_vue_type_template_id_ce58d53c___WEBPACK_IMPORTED_MODULE_0__.render,
  _HTMLResource_vue_vue_type_template_id_ce58d53c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/visitor/components/HTMLResource.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/visitor/VisitorHTML.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/visitor/VisitorHTML.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VisitorHTML_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VisitorHTML.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/visitor/VisitorHTML.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VisitorHTML_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/visitor/components/HTMLResource.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/visitor/components/HTMLResource.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HTMLResource_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HTMLResource.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/visitor/components/HTMLResource.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HTMLResource_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/visitor/VisitorHTML.vue?vue&type=template&id=4bfe43a9&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/visitor/VisitorHTML.vue?vue&type=template&id=4bfe43a9& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VisitorHTML_vue_vue_type_template_id_4bfe43a9___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VisitorHTML_vue_vue_type_template_id_4bfe43a9___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VisitorHTML_vue_vue_type_template_id_4bfe43a9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VisitorHTML.vue?vue&type=template&id=4bfe43a9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/visitor/VisitorHTML.vue?vue&type=template&id=4bfe43a9&");


/***/ }),

/***/ "./resources/js/views/visitor/components/HTMLResource.vue?vue&type=template&id=ce58d53c&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/views/visitor/components/HTMLResource.vue?vue&type=template&id=ce58d53c& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HTMLResource_vue_vue_type_template_id_ce58d53c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HTMLResource_vue_vue_type_template_id_ce58d53c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HTMLResource_vue_vue_type_template_id_ce58d53c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HTMLResource.vue?vue&type=template&id=ce58d53c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/visitor/components/HTMLResource.vue?vue&type=template&id=ce58d53c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/visitor/VisitorHTML.vue?vue&type=template&id=4bfe43a9&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/visitor/VisitorHTML.vue?vue&type=template&id=4bfe43a9& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
      _c(
        "div",
        {
          staticClass:
            "d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2"
        },
        [
          _c("p", { staticClass: "text-muted" }, [
            _vm._v("Here is the list of all your HTML resources to copy")
          ]),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-secondary btn-sm",
              on: {
                click: function($event) {
                  return _vm.$router.push({ name: "visitor" })
                }
              }
            },
            [_vm._v("Go Back")]
          )
        ]
      ),
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
        : _c(
            "div",
            { staticClass: "row mt-2" },
            [
              _vm.htmls.length === 0
                ? _c("div", { staticClass: "col-12" }, [
                    _c(
                      "div",
                      {
                        staticClass: "alert alert-info text-center",
                        attrs: { role: "alert" }
                      },
                      [
                        _vm._v(
                          "\n          There are currently no HTML resources.\n        "
                        )
                      ]
                    )
                  ])
                : _vm._l(_vm.htmls, function(html) {
                    return _c(
                      "div",
                      { key: html.id, staticClass: "col-12 mt-3" },
                      [
                        _c("HTMLResource", {
                          attrs: { html: html, "is-full": true }
                        })
                      ],
                      1
                    )
                  })
            ],
            2
          )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/visitor/components/HTMLResource.vue?vue&type=template&id=ce58d53c&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/visitor/components/HTMLResource.vue?vue&type=template&id=ce58d53c& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "card" }, [
    _c("div", { staticClass: "card-body" }, [
      _c("div", { staticClass: "card-title" }, [
        _c("div", { staticClass: "d-flex justify-content-between" }, [
          _c("strong", { staticClass: "mb-1" }, [
            _vm._v(_vm._s(_vm.html.title))
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
                  name: "ellipsis-horizontal-outline",
                  "data-toggle": "dropdown"
                }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "dropdown-menu" }, [
                _c(
                  "a",
                  {
                    staticClass: "dropdown-item",
                    attrs: { href: "javascript:void(0)" },
                    on: {
                      click: function($event) {
                        return _vm.copyHtml(_vm.html)
                      }
                    }
                  },
                  [
                    _c("ion-icon", {
                      staticClass: "mr-1",
                      attrs: { name: "copy-outline", size: "small" }
                    }),
                    _vm._v("\n              Copy HTML Snippet\n            ")
                  ],
                  1
                )
              ])
            ],
            1
          )
        ])
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "mb-1" }, [_vm._v(_vm._s(_vm.html.description))]),
      _vm._v(" "),
      _vm.isFull
        ? _c("pre", { staticClass: "language-html mb-1" }, [
            _vm._v("      "),
            _c("code", [
              _vm._v("\n        " + _vm._s(_vm.html.snippet) + "\n      ")
            ]),
            _vm._v("\n    ")
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("small", [_vm._v(_vm._s(new Date(_vm.html.created_at).toUTCString()))])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);