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
/* harmony import */ var _components_PDFResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/PDFResource */ "./resources/js/views/visitor/components/PDFResource.vue");
/* harmony import */ var _components_HTMLResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/HTMLResource */ "./resources/js/views/visitor/components/HTMLResource.vue");
/* harmony import */ var _components_LinkResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/LinkResource */ "./resources/js/views/visitor/components/LinkResource.vue");
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
    PDFResource: _components_PDFResource__WEBPACK_IMPORTED_MODULE_0__["default"],
    HTMLResource: _components_HTMLResource__WEBPACK_IMPORTED_MODULE_1__["default"],
    LinkResource: _components_LinkResource__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      loading: true,
      pdfs: [],
      numPdf: 0,
      htmls: [],
      numHtml: 0,
      links: [],
      numLink: 0
    };
  },
  created: function created() {
    var _this = this;

    this.axios.get("".concat(this.$api, "visitor/pdf")).then(function (response) {
      _this.pdfs = response.data;
      _this.numPdf = response.data.length;
      if (_this.numPdf > 3) _this.pdfs.splice(3, _this.numPdf);
    })["catch"](function (error) {
      return _this.$toast.error(error.response.data.message);
    })["finally"](function () {
      _this.axios.get("".concat(_this.$api, "visitor/html")).then(function (response) {
        _this.htmls = response.data;
        _this.numHtml = response.data.length;
        if (_this.numHtml > 3) _this.htmls.splice(3, _this.numHtml);
      })["catch"](function (error) {
        return _this.$toast.error(error.response.data.message);
      })["finally"](function () {
        _this.axios.get("".concat(_this.$api, "visitor/link")).then(function (response) {
          _this.links = response.data;
          _this.numLink = response.data.length;
          if (_this.numLink > 3) _this.links.splice(3, _this.numLink);
        })["catch"](function (error) {
          return _this.$toast.error(error.response.data.message);
        })["finally"](function () {
          return _this.loading = false;
        });
      });
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

      this.$copyText(html.snippet).then(function () {
        _this.$toast.info("Copied ".concat(html.title, "!"));
      })["catch"](function () {
        _this.$toast.error('Not Copied');
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/visitor/components/LinkResource.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/visitor/components/LinkResource.vue?vue&type=script&lang=js& ***!
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
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    link: {
      type: Object,
      required: true
    }
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
      var _this = this;

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
        return _this.$toast.error(error.response.data.message);
      });
    },
    downloadPDF: function downloadPDF(pdf) {
      var _this2 = this;

      this.axios.get("".concat(this.$api, "visitor/pdf/").concat(pdf.id), {
        responseType: 'arraybuffer'
      }).then(function (response) {
        var newBlob = new Blob([response.data], {
          type: 'application/pdf'
        }); // For IE

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
          // for Firefox
          window.URL.revokeObjectURL(data);
        }, 100);

        _this2.$toast.info('File download started');
      })["catch"](function (error) {
        return _this2.$toast.error(error.response.data.message);
      });
    }
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

/***/ "./resources/js/views/visitor/components/LinkResource.vue":
/*!****************************************************************!*\
  !*** ./resources/js/views/visitor/components/LinkResource.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LinkResource_vue_vue_type_template_id_7d8f8b51___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LinkResource.vue?vue&type=template&id=7d8f8b51& */ "./resources/js/views/visitor/components/LinkResource.vue?vue&type=template&id=7d8f8b51&");
/* harmony import */ var _LinkResource_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LinkResource.vue?vue&type=script&lang=js& */ "./resources/js/views/visitor/components/LinkResource.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LinkResource_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LinkResource_vue_vue_type_template_id_7d8f8b51___WEBPACK_IMPORTED_MODULE_0__.render,
  _LinkResource_vue_vue_type_template_id_7d8f8b51___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/visitor/components/LinkResource.vue"
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

/***/ "./resources/js/views/visitor/components/LinkResource.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/visitor/components/LinkResource.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LinkResource_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LinkResource.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/visitor/components/LinkResource.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LinkResource_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/views/visitor/components/LinkResource.vue?vue&type=template&id=7d8f8b51&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/views/visitor/components/LinkResource.vue?vue&type=template&id=7d8f8b51& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LinkResource_vue_vue_type_template_id_7d8f8b51___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LinkResource_vue_vue_type_template_id_7d8f8b51___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LinkResource_vue_vue_type_template_id_7d8f8b51___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LinkResource.vue?vue&type=template&id=7d8f8b51& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/visitor/components/LinkResource.vue?vue&type=template&id=7d8f8b51&");


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
                  ? _c("div", { staticClass: "col-12" }, [
                      _c(
                        "div",
                        {
                          staticClass: "alert alert-info text-center",
                          attrs: { role: "alert" }
                        },
                        [
                          _vm._v(
                            "\n            There are currently no PDF resources.\n          "
                          )
                        ]
                      )
                    ])
                  : _vm._l(_vm.pdfs, function(pdf) {
                      return _c(
                        "div",
                        { key: pdf.id, staticClass: "col-lg-4" },
                        [_c("PDFResource", { attrs: { pdf: pdf } })],
                        1
                      )
                    })
              ],
              2
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "d-flex justify-content-between mt-5" },
              [
                _c("h5", { staticClass: "mb-1" }, [
                  _vm._v("HTML Resources (" + _vm._s(_vm.numHtml) + " total)")
                ]),
                _vm._v(" "),
                _c(
                  "router-link",
                  { staticClass: "card-link", attrs: { to: "/visitor/html" } },
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
                            "\n            There are currently no HTML resources.\n          "
                          )
                        ]
                      )
                    ])
                  : _vm._l(_vm.htmls, function(html) {
                      return _c(
                        "div",
                        { key: html.id, staticClass: "col-lg-4" },
                        [
                          _c("HTMLResource", {
                            attrs: { html: html, "is-full": false }
                          })
                        ],
                        1
                      )
                    })
              ],
              2
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "d-flex justify-content-between mt-5" },
              [
                _c("h5", { staticClass: "mb-1" }, [
                  _vm._v("Link Resources (" + _vm._s(_vm.numLink) + " total)")
                ]),
                _vm._v(" "),
                _c(
                  "router-link",
                  { staticClass: "card-link", attrs: { to: "/visitor/link" } },
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
                _vm.links.length === 0
                  ? _c("div", { staticClass: "col-12" }, [
                      _c(
                        "div",
                        {
                          staticClass: "alert alert-info text-center",
                          attrs: { role: "alert" }
                        },
                        [
                          _vm._v(
                            "\n            There are currently no Link resources.\n          "
                          )
                        ]
                      )
                    ])
                  : _vm._l(_vm.links, function(link) {
                      return _c(
                        "div",
                        { key: link.id, staticClass: "col-lg-4" },
                        [_c("LinkResource", { attrs: { link: link } })],
                        1
                      )
                    })
              ],
              2
            )
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
        _c("h5", { staticClass: "display-4" }, [_vm._v("Visitor End")]),
        _vm._v(" "),
        _c("p", { staticClass: "lead" }, [
          _vm._v(
            "Welcome! You can download PDF resources, copy HTML resources, and open Link resources here."
          )
        ])
      ])
    ])
  }
]
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/visitor/components/LinkResource.vue?vue&type=template&id=7d8f8b51&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/visitor/components/LinkResource.vue?vue&type=template&id=7d8f8b51& ***!
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
            _vm._v(_vm._s(_vm.link.title))
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
                    attrs: {
                      href: _vm.link.link,
                      target: _vm.link.new_tab === 1 ? "_blank" : "_self"
                    }
                  },
                  [
                    _c("ion-icon", {
                      staticClass: "mr-1",
                      attrs: { name: "browsers-outline", size: "small" }
                    }),
                    _vm._v("\n              Open Link\n            ")
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
      _c("p", { staticClass: "mb-1" }, [_vm._v(_vm._s(_vm.link.link))]),
      _vm._v(" "),
      _vm.link.new_tab === 1
        ? _c("div", { staticClass: "badge badge-primary" }, [
            _vm._v("\n      Link opens in a new tab\n    ")
          ])
        : _c("div", { staticClass: "badge badge-success" }, [
            _vm._v("\n      Link opens in this tab\n    ")
          ]),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("small", [_vm._v(_vm._s(new Date(_vm.link.created_at).toUTCString()))])
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