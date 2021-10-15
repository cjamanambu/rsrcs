"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_admin_admin-html_AddHTML_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/admin-html/AddHTML.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/admin-html/AddHTML.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      loading: false,
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
        name: 'Add HTML Resource',
        active: true,
        path: ''
      }]
    };
  },
  methods: {
    addHTML: function addHTML() {
      var _this = this;

      this.$swal({
        title: 'Are you sure?',
        text: "This will add the html resource: ".concat(this.html.title),
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
          formData.append('title', _this.html.title);
          formData.append('description', _this.html.description);
          formData.append('snippet', _this.html.snippet);

          _this.axios.post('http://localhost:8000/api/admin/html/add', formData).then(function (response) {
            _this.$router.push({
              name: 'admin-html'
            }).then(function () {
              _this.$swal({
                title: 'Success',
                text: response.data,
                icon: 'success'
              });
            });
          })["catch"](function (error) {
            _this.$swal({
              title: 'Error',
              text: error.response.data.message,
              icon: 'error'
            });
          })["finally"](function () {
            return _this.loading = false;
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/views/admin/admin-html/AddHTML.vue":
/*!*********************************************************!*\
  !*** ./resources/js/views/admin/admin-html/AddHTML.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AddHTML_vue_vue_type_template_id_1ae360c5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddHTML.vue?vue&type=template&id=1ae360c5& */ "./resources/js/views/admin/admin-html/AddHTML.vue?vue&type=template&id=1ae360c5&");
/* harmony import */ var _AddHTML_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddHTML.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/admin-html/AddHTML.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddHTML_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddHTML_vue_vue_type_template_id_1ae360c5___WEBPACK_IMPORTED_MODULE_0__.render,
  _AddHTML_vue_vue_type_template_id_1ae360c5___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/admin-html/AddHTML.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/admin-html/AddHTML.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/admin/admin-html/AddHTML.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddHTML_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddHTML.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/admin-html/AddHTML.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddHTML_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/admin-html/AddHTML.vue?vue&type=template&id=1ae360c5&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/admin/admin-html/AddHTML.vue?vue&type=template&id=1ae360c5& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddHTML_vue_vue_type_template_id_1ae360c5___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddHTML_vue_vue_type_template_id_1ae360c5___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddHTML_vue_vue_type_template_id_1ae360c5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddHTML.vue?vue&type=template&id=1ae360c5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/admin-html/AddHTML.vue?vue&type=template&id=1ae360c5&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/admin-html/AddHTML.vue?vue&type=template&id=1ae360c5&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/admin-html/AddHTML.vue?vue&type=template&id=1ae360c5& ***!
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
          attrs: { "page-title": "Add HTML Resource", crumbs: _vm.crumbs }
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
              _vm._v("Here you can add a new HTML resource")
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
        _c("div", { staticClass: "card" }, [
          _c(
            "form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.addHTML.apply(null, arguments)
                }
              }
            },
            [
              _c("div", { staticClass: "card-body" }, [
                _c("h5", { staticClass: "card-title mb-4" }, [
                  _vm._v("Add HTML Form")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group mb-4" }, [
                  _c("label", { attrs: { for: "title" } }, [
                    _vm._v("HTML Title")
                  ]),
                  _c("span", { staticClass: "text-danger" }, [_vm._v(" *")]),
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
                        _vm.$set(_vm.html, "description", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group mb-4" }, [
                  _c("label", { attrs: { for: "snippet" } }, [
                    _vm._v("HTML Snippet")
                  ]),
                  _c("span", { staticClass: "text-danger" }, [_vm._v(" *")]),
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
                      _vm._v("Add HTML")
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
                      [_vm._v("Adding... ")]
                    )
                  : _vm._e()
              ])
            ]
          )
        ])
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);