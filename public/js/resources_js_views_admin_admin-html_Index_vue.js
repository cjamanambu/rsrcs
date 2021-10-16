"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_admin_admin-html_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/admin-html/Index.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/admin-html/Index.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      htmls: []
    };
  },
  created: function created() {
    var _this = this;

    this.axios.get('http://localhost:8000/api/admin/html').then(function (response) {
      _this.htmls = response.data;
    })["catch"](function (error) {
      return console.log(error);
    })["finally"](function () {
      return _this.loading = false;
    });
  },
  methods: {
    editHTML: function editHTML(html) {
      localStorage.setItem('htmlID', html.id);
      this.$router.push({
        name: 'edit-html',
        params: {
          id: html.id
        }
      });
    },
    deleteHTML: function deleteHTML(html) {
      var _this2 = this;

      this.$swal({
        title: 'Are you sure?',
        text: "This will delete the html resource: ".concat(html.title, ". This action is irreversible."),
        type: 'warning',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(function (result) {
        if (result.value) {
          _this2.loading = true;
          var formData = new FormData();
          formData.append('id', html.id);

          _this2.axios.post('http://localhost:8000/api/admin/html/delete', formData).then(function (response) {
            _this2.$swal({
              title: 'Success',
              text: response.data,
              icon: 'success'
            });
          })["catch"](function (error) {
            _this2.$swal({
              title: 'Error',
              text: error.response.data.message,
              icon: 'error'
            });
          })["finally"](function () {
            _this2.axios.get('http://localhost:8000/api/admin/html').then(function (response) {
              _this2.htmls = response.data;
            })["catch"](function (error) {
              return console.log(error);
            })["finally"](function () {
              return _this2.loading = false;
            });
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/views/admin/admin-html/Index.vue":
/*!*******************************************************!*\
  !*** ./resources/js/views/admin/admin-html/Index.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_1e3409ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=1e3409ea& */ "./resources/js/views/admin/admin-html/Index.vue?vue&type=template&id=1e3409ea&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/admin-html/Index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_1e3409ea___WEBPACK_IMPORTED_MODULE_0__.render,
  _Index_vue_vue_type_template_id_1e3409ea___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/admin-html/Index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/admin-html/Index.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/admin/admin-html/Index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/admin-html/Index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/admin-html/Index.vue?vue&type=template&id=1e3409ea&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/admin/admin-html/Index.vue?vue&type=template&id=1e3409ea& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_1e3409ea___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_1e3409ea___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_1e3409ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=template&id=1e3409ea& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/admin-html/Index.vue?vue&type=template&id=1e3409ea&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/admin-html/Index.vue?vue&type=template&id=1e3409ea&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/admin-html/Index.vue?vue&type=template&id=1e3409ea& ***!
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
            _vm._v("Here is the list of all your HTML resources to manage")
          ]),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-primary btn-sm",
              on: {
                click: function($event) {
                  return _vm.$router.push({ name: "add-html" })
                }
              }
            },
            [_vm._v("Add HTML Resource")]
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
        ? _c(
            "table",
            {
              staticClass:
                "table table-bordered table-responsive-sm table-striped"
            },
            [
              _vm._m(0),
              _vm._v(" "),
              _c(
                "tbody",
                [
                  this.htmls.length === 0
                    ? _c("tr", [
                        _c(
                          "td",
                          {
                            staticClass: "font-weight-bolder text-center",
                            attrs: { colspan: "5" }
                          },
                          [_vm._v("No HTML Resource exists")]
                        )
                      ])
                    : _vm._l(_vm.htmls, function(html, key) {
                        return _c("tr", { key: html.id }, [
                          _c("td", { staticClass: "text-center" }, [
                            _vm._v(_vm._s(++key))
                          ]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(html.title))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(html.description))]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              _vm._s(new Date(html.created_at).toDateString())
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "text-center" }, [
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
                                          return _vm.editHTML(html)
                                        }
                                      }
                                    },
                                    [
                                      _c("ion-icon", {
                                        staticClass: "mr-1",
                                        attrs: {
                                          name: "create-outline",
                                          size: "small"
                                        }
                                      }),
                                      _vm._v(
                                        "\n                Edit HTML\n              "
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "a",
                                    {
                                      staticClass: "dropdown-item text-danger",
                                      attrs: { href: "javascript:void(0)" },
                                      on: {
                                        click: function($event) {
                                          return _vm.deleteHTML(html)
                                        }
                                      }
                                    },
                                    [
                                      _c("ion-icon", {
                                        staticClass: "mr-1",
                                        attrs: {
                                          name: "trash-outline",
                                          size: "small"
                                        }
                                      }),
                                      _vm._v(
                                        "\n                Delete HTML\n              "
                                      )
                                    ],
                                    1
                                  )
                                ])
                              ],
                              1
                            )
                          ])
                        ])
                      })
                ],
                2
              )
            ]
          )
        : _vm._e()
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { staticStyle: { width: "5%" } }, [_vm._v("#")]),
        _vm._v(" "),
        _c("th", [_vm._v("Title")]),
        _vm._v(" "),
        _c("th", [_vm._v("Description")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "20%" } }, [_vm._v("Added")]),
        _vm._v(" "),
        _c(
          "th",
          { staticClass: "text-center", staticStyle: { width: "10%" } },
          [_vm._v("Actions")]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);