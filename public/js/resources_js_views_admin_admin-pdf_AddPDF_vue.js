"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_admin_admin-pdf_AddPDF_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/admin-pdf/AddPDF.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/admin-pdf/AddPDF.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      pdf: {
        title: null,
        file: null
      },
      fileUploaded: false,
      loading: false
    };
  },
  methods: {
    getFile: function getFile(e) {
      this.pdf.file = '';
      var fileList = e.target.files;

      if (fileList.length > 0) {
        this.pdf.file = fileList[0];
      }

      this.fileUploaded = fileList.length > 0;
    },
    addPdf: function addPdf() {
      var _this = this;

      this.$swal({
        title: 'Are you sure?',
        text: "This will add the pdf resource: ".concat(this.pdf.title),
        type: 'warning',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, add it!'
      }).then(function (result) {
        if (result.value) {
          _this.loading = true;
          var formData = new FormData();
          formData.append('title', _this.pdf.title);
          formData.append('file', _this.pdf.file);

          _this.axios.post("".concat(_this.$api, "admin/pdf/add"), formData).then(function (response) {
            _this.$router.push({
              name: 'admin-pdf'
            }).then(function () {
              return _this.$toast.success(response.data);
            });
          })["catch"](function (error) {
            return _this.$toast.error(error.response.data.message);
          })["finally"](function () {
            return _this.loading = false;
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/views/admin/admin-pdf/AddPDF.vue":
/*!*******************************************************!*\
  !*** ./resources/js/views/admin/admin-pdf/AddPDF.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AddPDF_vue_vue_type_template_id_685af3aa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddPDF.vue?vue&type=template&id=685af3aa& */ "./resources/js/views/admin/admin-pdf/AddPDF.vue?vue&type=template&id=685af3aa&");
/* harmony import */ var _AddPDF_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddPDF.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/admin-pdf/AddPDF.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddPDF_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddPDF_vue_vue_type_template_id_685af3aa___WEBPACK_IMPORTED_MODULE_0__.render,
  _AddPDF_vue_vue_type_template_id_685af3aa___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/admin-pdf/AddPDF.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/admin-pdf/AddPDF.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/admin/admin-pdf/AddPDF.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddPDF_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddPDF.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/admin-pdf/AddPDF.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddPDF_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/admin-pdf/AddPDF.vue?vue&type=template&id=685af3aa&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/admin/admin-pdf/AddPDF.vue?vue&type=template&id=685af3aa& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddPDF_vue_vue_type_template_id_685af3aa___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddPDF_vue_vue_type_template_id_685af3aa___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddPDF_vue_vue_type_template_id_685af3aa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddPDF.vue?vue&type=template&id=685af3aa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/admin-pdf/AddPDF.vue?vue&type=template&id=685af3aa&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/admin-pdf/AddPDF.vue?vue&type=template&id=685af3aa&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/admin-pdf/AddPDF.vue?vue&type=template&id=685af3aa& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
            _vm._v("Here you can add a new PDF resource")
          ]),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-secondary btn-sm",
              on: {
                click: function($event) {
                  return _vm.$router.push({ name: "admin-pdf" })
                }
              }
            },
            [_vm._v("Go Back")]
          )
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "card" }, [
        _c(
          "form",
          {
            attrs: { enctype: "multipart/form-data" },
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.addPdf.apply(null, arguments)
              }
            }
          },
          [
            _c("div", { staticClass: "card-body" }, [
              _c("h5", { staticClass: "card-title mb-4" }, [
                _vm._v("Add PDF Form")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group mb-4" }, [
                _c("label", { attrs: { for: "title" } }, [_vm._v("PDF Title")]),
                _c("span", { staticClass: "text-danger" }, [_vm._v(" *")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.pdf.title,
                      expression: "pdf.title"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "text",
                    id: "title",
                    name: "title",
                    required: ""
                  },
                  domProps: { value: _vm.pdf.title },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.pdf, "title", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group mb-4" }, [
                _c("label", {}, [_vm._v("PDF File")]),
                _c("span", { staticClass: "text-danger" }, [_vm._v(" *")]),
                _vm._v(" "),
                _c("div", { staticClass: "custom-file" }, [
                  _c("input", {
                    staticClass: "custom-file-input",
                    attrs: {
                      type: "file",
                      id: "file",
                      accept: "application/pdf",
                      required: ""
                    },
                    on: { change: _vm.getFile }
                  }),
                  _vm._v(" "),
                  _c(
                    "label",
                    {
                      staticClass: "custom-file-label",
                      attrs: { for: "file" }
                    },
                    [_vm._v("Choose pdf file")]
                  )
                ]),
                _vm._v(" "),
                _vm.fileUploaded
                  ? _c(
                      "div",
                      {
                        staticClass: "alert alert-info mt-2",
                        attrs: { role: "alert" }
                      },
                      [
                        _vm._v(
                          "\n              You have chosen " +
                            _vm._s(_vm.pdf.file.name) +
                            " to upload.\n            "
                        )
                      ]
                    )
                  : _vm._e()
              ]),
              _vm._v(" "),
              !_vm.loading
                ? _c("button", { staticClass: "btn btn-primary" }, [
                    _vm._v("Add PDF")
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.loading
                ? _c(
                    "button",
                    { staticClass: "btn btn-primary", attrs: { disabled: "" } },
                    [_vm._v("Adding... ")]
                  )
                : _vm._e()
            ])
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);