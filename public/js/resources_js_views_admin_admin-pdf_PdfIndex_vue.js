"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_admin_admin-pdf_PdfIndex_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/admin-pdf/PdfIndex.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/admin-pdf/PdfIndex.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_PageHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/PageHeader */ "./resources/js/views/admin/components/PageHeader.vue");
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
    PageHeader: _components_PageHeader__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      crumbs: [{
        id: 1,
        name: 'Dashboard',
        active: false,
        path: '/admin'
      }, {
        id: 2,
        name: 'PDF Resource',
        active: true,
        path: ''
      }],
      pdfs: []
    };
  },
  created: function created() {
    var _this = this;

    this.axios.get('http://localhost:8000/api/admin/pdf').then(function (response) {
      _this.pdfs = response.data;
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/components/PageHeader.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/components/PageHeader.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    pageTitle: {
      type: String,
      required: true
    },
    crumbs: {
      type: Array,
      required: true
    }
  }
});

/***/ }),

/***/ "./resources/js/views/admin/admin-pdf/PdfIndex.vue":
/*!*********************************************************!*\
  !*** ./resources/js/views/admin/admin-pdf/PdfIndex.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PdfIndex_vue_vue_type_template_id_0b29409a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PdfIndex.vue?vue&type=template&id=0b29409a& */ "./resources/js/views/admin/admin-pdf/PdfIndex.vue?vue&type=template&id=0b29409a&");
/* harmony import */ var _PdfIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PdfIndex.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/admin-pdf/PdfIndex.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PdfIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PdfIndex_vue_vue_type_template_id_0b29409a___WEBPACK_IMPORTED_MODULE_0__.render,
  _PdfIndex_vue_vue_type_template_id_0b29409a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/admin-pdf/PdfIndex.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/components/PageHeader.vue":
/*!************************************************************!*\
  !*** ./resources/js/views/admin/components/PageHeader.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PageHeader_vue_vue_type_template_id_2d6d6f46___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageHeader.vue?vue&type=template&id=2d6d6f46& */ "./resources/js/views/admin/components/PageHeader.vue?vue&type=template&id=2d6d6f46&");
/* harmony import */ var _PageHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageHeader.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/components/PageHeader.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PageHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PageHeader_vue_vue_type_template_id_2d6d6f46___WEBPACK_IMPORTED_MODULE_0__.render,
  _PageHeader_vue_vue_type_template_id_2d6d6f46___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/components/PageHeader.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/admin-pdf/PdfIndex.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/admin/admin-pdf/PdfIndex.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PdfIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PdfIndex.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/admin-pdf/PdfIndex.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PdfIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/components/PageHeader.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/admin/components/PageHeader.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PageHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/components/PageHeader.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/admin-pdf/PdfIndex.vue?vue&type=template&id=0b29409a&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/admin/admin-pdf/PdfIndex.vue?vue&type=template&id=0b29409a& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PdfIndex_vue_vue_type_template_id_0b29409a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PdfIndex_vue_vue_type_template_id_0b29409a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PdfIndex_vue_vue_type_template_id_0b29409a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PdfIndex.vue?vue&type=template&id=0b29409a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/admin-pdf/PdfIndex.vue?vue&type=template&id=0b29409a&");


/***/ }),

/***/ "./resources/js/views/admin/components/PageHeader.vue?vue&type=template&id=2d6d6f46&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/admin/components/PageHeader.vue?vue&type=template&id=2d6d6f46& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_template_id_2d6d6f46___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_template_id_2d6d6f46___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_template_id_2d6d6f46___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PageHeader.vue?vue&type=template&id=2d6d6f46& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/components/PageHeader.vue?vue&type=template&id=2d6d6f46&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/admin-pdf/PdfIndex.vue?vue&type=template&id=0b29409a&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/admin-pdf/PdfIndex.vue?vue&type=template&id=0b29409a& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
          attrs: { "page-title": "PDF Resource", crumbs: _vm.crumbs }
        }),
        _vm._v(" "),
        _vm._m(0),
        _vm._v(" "),
        _c("table", { staticClass: "table table-bordered" }, [
          _vm._m(1),
          _vm._v(" "),
          _c("tbody", [
            _vm.pdfs.length === 0
              ? _c("tr", [
                  _c(
                    "td",
                    {
                      staticClass: "text-center font-weight-bolder",
                      attrs: { colspan: "4" }
                    },
                    [_vm._v("No PDF Resource exists")]
                  )
                ])
              : _c("tr")
          ])
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
    return _c(
      "div",
      {
        staticClass:
          "d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2"
      },
      [
        _c("p", { staticClass: "text-muted" }, [
          _vm._v("Here is the list of all your PDF resources to manage")
        ]),
        _vm._v(" "),
        _c("button", { staticClass: "btn btn-primary btn-sm" }, [
          _vm._v("Add PDF Resource")
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("#")]),
        _vm._v(" "),
        _c("th", [_vm._v("Title")]),
        _vm._v(" "),
        _c("th", [_vm._v("File Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Actions")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/components/PageHeader.vue?vue&type=template&id=2d6d6f46&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/components/PageHeader.vue?vue&type=template&id=2d6d6f46& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    {
      staticClass:
        "d-flex justify-content-between flex-wrap align-items-center pt-3 pb-1 border-bottom"
    },
    [
      _c("h1", { staticClass: "h3" }, [_vm._v(_vm._s(_vm.pageTitle))]),
      _vm._v(" "),
      _c("nav", { attrs: { "aria-label": "breadcrumb" } }, [
        _c(
          "ol",
          { staticClass: "breadcrumb" },
          _vm._l(_vm.crumbs, function(crumb) {
            return _c(
              "li",
              {
                key: crumb.id,
                staticClass: "breadcrumb-item",
                class: { active: crumb.active }
              },
              [
                !crumb.active
                  ? _c("router-link", { attrs: { to: crumb.path } }, [
                      _vm._v(_vm._s(crumb.name))
                    ])
                  : _c("span", [_vm._v(_vm._s(crumb.name))])
              ],
              1
            )
          }),
          0
        )
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);