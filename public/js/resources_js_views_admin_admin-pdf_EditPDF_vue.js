"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_admin_admin-pdf_EditPDF_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/admin-pdf/EditPDF.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/admin-pdf/EditPDF.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
//
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
      loading: true,
      pdfID: this.$route.params.id || localStorage.getItem('pdfID'),
      pdf: {
        title: null,
        file: null
      },
      fileUploaded: false,
      crumbs: [{
        id: 1,
        name: 'Dashboard',
        active: false,
        path: '/admin'
      }, {
        id: 2,
        name: 'PDF Resource',
        active: false,
        path: '/admin/pdf'
      }, {
        id: 3,
        name: 'Edit PDF Resource',
        active: true,
        path: ''
      }]
    };
  },
  created: function created() {
    var _this = this;

    this.axios.get("http://localhost:8000/api/admin/pdf/".concat(this.pdfID)).then(function (response) {
      _this.pdf.title = response.data.title;
    })["catch"](function (error) {
      return console.log(error);
    })["finally"](function () {
      return _this.loading = false;
    });
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
    editPDF: function editPDF() {
      var _this2 = this;

      this.$swal({
        title: 'Are you sure?',
        text: "This will update the pdf resource",
        type: 'warning',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, update it!'
      }).then(function (result) {
        if (result.value) {
          _this2.loading = true;
          var formData = new FormData();
          formData.append('id', _this2.pdfID);
          formData.append('title', _this2.pdf.title);
          formData.append('file', _this2.pdf.file);

          _this2.axios.post('http://localhost:8000/api/admin/pdf/update', formData).then(function (response) {
            _this2.$router.push({
              name: 'admin-pdf'
            }).then(function () {
              _this2.$swal({
                title: 'Success',
                text: response.data,
                icon: 'success'
              });
            });
          })["catch"](function (error) {
            _this2.$swal({
              title: 'Error',
              text: error.response.data.message,
              icon: 'error'
            });
          })["finally"](function () {
            return _this2.loading = false;
          });
        }
      });
    }
  },
  beforeDestroy: function beforeDestroy() {
    localStorage.removeItem('pdfID');
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

/***/ "./resources/js/views/admin/admin-pdf/EditPDF.vue":
/*!********************************************************!*\
  !*** ./resources/js/views/admin/admin-pdf/EditPDF.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EditPDF_vue_vue_type_template_id_08b7cc44___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditPDF.vue?vue&type=template&id=08b7cc44& */ "./resources/js/views/admin/admin-pdf/EditPDF.vue?vue&type=template&id=08b7cc44&");
/* harmony import */ var _EditPDF_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditPDF.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/admin-pdf/EditPDF.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditPDF_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditPDF_vue_vue_type_template_id_08b7cc44___WEBPACK_IMPORTED_MODULE_0__.render,
  _EditPDF_vue_vue_type_template_id_08b7cc44___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/admin-pdf/EditPDF.vue"
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

/***/ "./resources/js/views/admin/admin-pdf/EditPDF.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/admin/admin-pdf/EditPDF.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditPDF_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditPDF.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/admin-pdf/EditPDF.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditPDF_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/views/admin/admin-pdf/EditPDF.vue?vue&type=template&id=08b7cc44&":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/admin/admin-pdf/EditPDF.vue?vue&type=template&id=08b7cc44& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditPDF_vue_vue_type_template_id_08b7cc44___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditPDF_vue_vue_type_template_id_08b7cc44___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditPDF_vue_vue_type_template_id_08b7cc44___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditPDF.vue?vue&type=template&id=08b7cc44& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/admin-pdf/EditPDF.vue?vue&type=template&id=08b7cc44&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/admin-pdf/EditPDF.vue?vue&type=template&id=08b7cc44&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/admin-pdf/EditPDF.vue?vue&type=template&id=08b7cc44& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
          attrs: { "page-title": "Edit PDF Resource", crumbs: _vm.crumbs }
        }),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2"
          },
          [
            _c("p", { staticClass: "text-muted" }, [
              _vm._v("Here you can edit your PDF resource")
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
        _vm.loading
          ? _c("div", { staticClass: "d-flex align-items-center mt-3" }, [
              _c("strong", [_vm._v("Loading...")]),
              _vm._v(" "),
              _c("div", {
                staticClass: "spinner-border ml-auto",
                attrs: { role: "status", "aria-hidden": "true" }
              })
            ])
          : _vm._e(),
        _vm._v(" "),
        !_vm.loading
          ? _c("div", { staticClass: "card" }, [
              _c(
                "form",
                {
                  attrs: { enctype: "multipart/form-data" },
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.editPDF.apply(null, arguments)
                    }
                  }
                },
                [
                  _c("div", { staticClass: "card-body" }, [
                    _c("h5", { staticClass: "card-title mb-4" }, [
                      _vm._v("Edit PDF Form")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group mb-4" }, [
                      _c("label", { attrs: { for: "title" } }, [
                        _vm._v("PDF Title")
                      ]),
                      _c("span", { staticClass: "text-danger" }, [
                        _vm._v(" *")
                      ]),
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
                      _c("span", { staticClass: "text-danger" }, [
                        _vm._v(" *")
                      ]),
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
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.pdfID,
                          expression: "pdfID"
                        }
                      ],
                      attrs: { type: "hidden", name: "id", id: "id" },
                      domProps: { value: _vm.pdfID },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.pdfID = $event.target.value
                        }
                      }
                    }),
                    _vm._v(" "),
                    !_vm.loading
                      ? _c("button", { staticClass: "btn btn-primary" }, [
                          _vm._v("Save Changes")
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.loading
                      ? _c(
                          "button",
                          {
                            staticClass: "btn btn-primary",
                            attrs: { disabled: "" }
                          },
                          [_vm._v("Saving... ")]
                        )
                      : _vm._e()
                  ])
                ]
              )
            ])
          : _vm._e()
      ],
      1
    )
  ])
}
var staticRenderFns = []
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