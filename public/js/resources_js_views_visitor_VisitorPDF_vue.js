"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_visitor_VisitorPDF_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/visitor/VisitorPDF.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/visitor/VisitorPDF.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_PDFResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/PDFResource */ "./resources/js/views/visitor/components/PDFResource.vue");
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
    PDFResource: _components_PDFResource__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      loading: true,
      pdfs: []
    };
  },
  created: function created() {
    var _this = this;

    this.axios.get("".concat(this.$api, "visitor/pdf")).then(function (response) {
      _this.pdfs = response.data;
    })["catch"](function (error) {
      return console.log(error);
    })["finally"](function () {
      return _this.loading = false;
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/visitor/components/PDFResource.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/visitor/components/PDFResource.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    pdf: {
      type: Object,
      required: true
    }
  },
  methods: {
    viewPDF: function viewPDF(pdf) {
      this.axios.get("".concat(this.$api, "visitor/pdf/").concat(pdf.id), {
        responseType: 'arraybuffer'
      }).then(function (response) {
        var blob = new Blob([response.data], {
          type: 'application/pdf'
        });
        var link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.target = '_blank';
        link.click();
      })["catch"](function (error) {
        return console.log(error);
      });
    },
    downloadPDF: function downloadPDF(pdf) {
      var _this = this;

      this.axios.get("".concat(this.$api, "visitor/pdf/").concat(pdf.id), {
        responseType: 'arraybuffer'
      }).then(function (response) {
        var newBlob = new Blob([response.data], {
          type: 'application/pdf'
        }); // IE

        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
          window.navigator.msSaveOrOpenBlob(newBlob);
          return;
        } // For other browsers:


        var data = window.URL.createObjectURL(newBlob);
        var link = document.createElement('a');
        link.href = data;
        link.download = pdf.file_name;
        link.click();
        setTimeout(function () {
          // Firefox
          window.URL.revokeObjectURL(data);
        }, 100);

        _this.$toast.success('File downloaded successfully');
      })["catch"](function (error) {
        return console.log(error);
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/views/visitor/VisitorPDF.vue":
/*!***************************************************!*\
  !*** ./resources/js/views/visitor/VisitorPDF.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _VisitorPDF_vue_vue_type_template_id_2e814a78___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VisitorPDF.vue?vue&type=template&id=2e814a78& */ "./resources/js/views/visitor/VisitorPDF.vue?vue&type=template&id=2e814a78&");
/* harmony import */ var _VisitorPDF_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VisitorPDF.vue?vue&type=script&lang=js& */ "./resources/js/views/visitor/VisitorPDF.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VisitorPDF_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VisitorPDF_vue_vue_type_template_id_2e814a78___WEBPACK_IMPORTED_MODULE_0__.render,
  _VisitorPDF_vue_vue_type_template_id_2e814a78___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/visitor/VisitorPDF.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/visitor/components/PDFResource.vue":
/*!***************************************************************!*\
  !*** ./resources/js/views/visitor/components/PDFResource.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PDFResource_vue_vue_type_template_id_5ad33df2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PDFResource.vue?vue&type=template&id=5ad33df2& */ "./resources/js/views/visitor/components/PDFResource.vue?vue&type=template&id=5ad33df2&");
/* harmony import */ var _PDFResource_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PDFResource.vue?vue&type=script&lang=js& */ "./resources/js/views/visitor/components/PDFResource.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PDFResource_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PDFResource_vue_vue_type_template_id_5ad33df2___WEBPACK_IMPORTED_MODULE_0__.render,
  _PDFResource_vue_vue_type_template_id_5ad33df2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/visitor/components/PDFResource.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/visitor/VisitorPDF.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/visitor/VisitorPDF.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VisitorPDF_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VisitorPDF.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/visitor/VisitorPDF.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VisitorPDF_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/visitor/components/PDFResource.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/visitor/components/PDFResource.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PDFResource_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PDFResource.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/visitor/components/PDFResource.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PDFResource_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/visitor/VisitorPDF.vue?vue&type=template&id=2e814a78&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/visitor/VisitorPDF.vue?vue&type=template&id=2e814a78& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VisitorPDF_vue_vue_type_template_id_2e814a78___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VisitorPDF_vue_vue_type_template_id_2e814a78___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VisitorPDF_vue_vue_type_template_id_2e814a78___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VisitorPDF.vue?vue&type=template&id=2e814a78& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/visitor/VisitorPDF.vue?vue&type=template&id=2e814a78&");


/***/ }),

/***/ "./resources/js/views/visitor/components/PDFResource.vue?vue&type=template&id=5ad33df2&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/views/visitor/components/PDFResource.vue?vue&type=template&id=5ad33df2& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PDFResource_vue_vue_type_template_id_5ad33df2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PDFResource_vue_vue_type_template_id_5ad33df2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PDFResource_vue_vue_type_template_id_5ad33df2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PDFResource.vue?vue&type=template&id=5ad33df2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/visitor/components/PDFResource.vue?vue&type=template&id=5ad33df2&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/visitor/VisitorPDF.vue?vue&type=template&id=2e814a78&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/visitor/VisitorPDF.vue?vue&type=template&id=2e814a78& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
            _vm._v("Here is the list of all your PDF resources to download")
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
              _vm.pdfs.length === 0
                ? _c("div", { staticClass: "col-12" }, [
                    _c(
                      "div",
                      {
                        staticClass: "alert alert-info text-center",
                        attrs: { role: "alert" }
                      },
                      [
                        _vm._v(
                          "\n          There are currently no PDF resources.\n        "
                        )
                      ]
                    )
                  ])
                : _vm._l(_vm.pdfs, function(pdf) {
                    return _c(
                      "div",
                      { key: pdf.id, staticClass: "col-12 mt-2" },
                      [_c("PDFResource", { attrs: { pdf: pdf } })],
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/visitor/components/PDFResource.vue?vue&type=template&id=5ad33df2&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/visitor/components/PDFResource.vue?vue&type=template&id=5ad33df2& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
            _vm._v(_vm._s(_vm.pdf.title))
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
                        return _vm.viewPDF(_vm.pdf)
                      }
                    }
                  },
                  [
                    _c("ion-icon", {
                      staticClass: "mr-1",
                      attrs: { name: "eye-outline", size: "small" }
                    }),
                    _vm._v("\n              View PDF\n            ")
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "dropdown-item",
                    attrs: { href: "javascript:void(0)" },
                    on: {
                      click: function($event) {
                        return _vm.downloadPDF(_vm.pdf)
                      }
                    }
                  },
                  [
                    _c("ion-icon", {
                      staticClass: "mr-1",
                      attrs: { name: "download-outline", size: "small" }
                    }),
                    _vm._v("\n              Download PDF\n            ")
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
      _c("p", { staticClass: "mb-1" }, [_vm._v(_vm._s(_vm.pdf.file_name))]),
      _vm._v(" "),
      _c("small", [_vm._v(_vm._s(new Date(_vm.pdf.created_at).toUTCString()))])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);