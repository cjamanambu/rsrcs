"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_admin_admin-html_EditHTML_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/admin-html/EditHTML.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/admin-html/EditHTML.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      loading: true,
      htmlID: this.$route.params.id || localStorage.getItem('htmlID'),
      html: {},
      crumbs: [{
        id: 1,
        name: 'Dashboard',
        active: false,
        path: '/admin'
      }, {
        id: 2,
        name: 'HTML Resource',
        active: false,
        path: '/admin/html'
      }, {
        id: 3,
        name: 'Edit HTML Resource',
        active: true,
        path: ''
      }]
    };
  },
  created: function created() {
    var _this = this;

    this.axios.get("http://localhost:8000/api/admin/html/".concat(this.htmlID)).then(function (response) {
      _this.html.title = response.data.title;
      _this.html.description = response.data.description;
      _this.html.snippet = response.data.snippet;
    })["catch"](function (error) {
      return console.log(error);
    })["finally"](function () {
      return _this.loading = false;
    });
  },
  methods: {
    editHTML: function editHTML() {
      var _this2 = this;

      this.$swal({
        title: 'Are you sure?',
        text: "This will update the html resource",
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
          formData.append('id', _this2.htmlID);
          formData.append('title', _this2.html.title);
          formData.append('description', _this2.html.description);
          formData.append('snippet', _this2.html.snippet);

          _this2.axios.post('http://localhost:8000/api/admin/html/update', formData).then(function (response) {
            _this2.$router.push({
              name: 'admin-html'
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
    localStorage.removeItem('htmlID');
  }
});

/***/ }),

/***/ "./resources/js/views/admin/admin-html/EditHTML.vue":
/*!**********************************************************!*\
  !*** ./resources/js/views/admin/admin-html/EditHTML.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EditHTML_vue_vue_type_template_id_387a008c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditHTML.vue?vue&type=template&id=387a008c& */ "./resources/js/views/admin/admin-html/EditHTML.vue?vue&type=template&id=387a008c&");
/* harmony import */ var _EditHTML_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditHTML.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/admin-html/EditHTML.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditHTML_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditHTML_vue_vue_type_template_id_387a008c___WEBPACK_IMPORTED_MODULE_0__.render,
  _EditHTML_vue_vue_type_template_id_387a008c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/admin-html/EditHTML.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/admin-html/EditHTML.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/admin/admin-html/EditHTML.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditHTML_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditHTML.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/admin-html/EditHTML.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditHTML_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/admin-html/EditHTML.vue?vue&type=template&id=387a008c&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/admin/admin-html/EditHTML.vue?vue&type=template&id=387a008c& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditHTML_vue_vue_type_template_id_387a008c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditHTML_vue_vue_type_template_id_387a008c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditHTML_vue_vue_type_template_id_387a008c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditHTML.vue?vue&type=template&id=387a008c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/admin-html/EditHTML.vue?vue&type=template&id=387a008c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/admin-html/EditHTML.vue?vue&type=template&id=387a008c&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/admin-html/EditHTML.vue?vue&type=template&id=387a008c& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
          attrs: { "page-title": "Edit HTML Resource", crumbs: _vm.crumbs }
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
              _vm._v("Here you can edit your HTML resource")
            ]),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-secondary btn-sm",
                on: {
                  click: function($event) {
                    return _vm.$router.push({ name: "admin-html" })
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
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.editHTML.apply(null, arguments)
                    }
                  }
                },
                [
                  _c("div", { staticClass: "card-body" }, [
                    _c("h5", { staticClass: "card-title mb-4" }, [
                      _vm._v("Edit HTML Form")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group mb-4" }, [
                      _c("label", { attrs: { for: "title" } }, [
                        _vm._v("HTML Title")
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
                            value: _vm.html.title,
                            expression: "html.title"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text", id: "title", required: "" },
                        domProps: { value: _vm.html.title },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.html, "title", $event.target.value)
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group mb-4" }, [
                      _c("label", { attrs: { for: "description" } }, [
                        _vm._v("HTML Description")
                      ]),
                      _vm._v(" "),
                      _c("textarea", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.html.description,
                            expression: "html.description"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { rows: "2", id: "description" },
                        domProps: { value: _vm.html.description },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.html,
                              "description",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group mb-4" }, [
                      _c("label", { attrs: { for: "snippet" } }, [
                        _vm._v("HTML Snippet")
                      ]),
                      _c("span", { staticClass: "text-danger" }, [
                        _vm._v(" *")
                      ]),
                      _vm._v(" "),
                      _c("textarea", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.html.snippet,
                            expression: "html.snippet"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { rows: "4", id: "snippet", required: "" },
                        domProps: { value: _vm.html.snippet },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.html, "snippet", $event.target.value)
                          }
                        }
                      })
                    ]),
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



/***/ })

}]);