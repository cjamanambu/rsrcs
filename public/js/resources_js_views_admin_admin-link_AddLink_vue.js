"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_admin_admin-link_AddLink_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/admin-link/AddLink.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/admin-link/AddLink.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_PageHeader_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/PageHeader.vue */ "./resources/js/views/admin/components/PageHeader.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    PageHeader: _components_PageHeader_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      loading: false,
      link: {},
      crumbs: [{
        id: 1,
        name: 'Dashboard',
        active: false,
        path: '/admin'
      }, {
        id: 2,
        name: 'Link Resource',
        active: false,
        path: '/admin/link'
      }, {
        id: 3,
        name: 'Add Link Resource',
        active: true,
        path: ''
      }]
    };
  },
  methods: {
    addLink: function addLink() {
      var _this = this;

      this.$swal({
        title: 'Are you sure?',
        text: "This will add the link resource: ".concat(this.link.title),
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
          formData.append('title', _this.link.title);
          formData.append('link', _this.link.url);
          formData.append('new_tab', _this.link.newTab ? '1' : '0');

          _this.axios.post('http://localhost:8000/api/admin/link/add', formData).then(function (response) {
            _this.$router.push({
              name: 'admin-link'
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

/***/ "./resources/js/views/admin/admin-link/AddLink.vue":
/*!*********************************************************!*\
  !*** ./resources/js/views/admin/admin-link/AddLink.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AddLink_vue_vue_type_template_id_2ef740fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddLink.vue?vue&type=template&id=2ef740fa& */ "./resources/js/views/admin/admin-link/AddLink.vue?vue&type=template&id=2ef740fa&");
/* harmony import */ var _AddLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddLink.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/admin-link/AddLink.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddLink_vue_vue_type_template_id_2ef740fa___WEBPACK_IMPORTED_MODULE_0__.render,
  _AddLink_vue_vue_type_template_id_2ef740fa___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/admin-link/AddLink.vue"
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

/***/ "./resources/js/views/admin/admin-link/AddLink.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/admin/admin-link/AddLink.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddLink.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/admin-link/AddLink.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/views/admin/admin-link/AddLink.vue?vue&type=template&id=2ef740fa&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/admin/admin-link/AddLink.vue?vue&type=template&id=2ef740fa& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddLink_vue_vue_type_template_id_2ef740fa___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddLink_vue_vue_type_template_id_2ef740fa___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddLink_vue_vue_type_template_id_2ef740fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddLink.vue?vue&type=template&id=2ef740fa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/admin-link/AddLink.vue?vue&type=template&id=2ef740fa&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/admin-link/AddLink.vue?vue&type=template&id=2ef740fa&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/admin-link/AddLink.vue?vue&type=template&id=2ef740fa& ***!
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
          attrs: { "page-title": "Add Link Resource", crumbs: _vm.crumbs }
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
              _vm._v("Here you can add a new Link resource")
            ]),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-secondary btn-sm",
                on: {
                  click: function($event) {
                    return _vm.$router.push({ name: "admin-link" })
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
                  return _vm.addLink.apply(null, arguments)
                }
              }
            },
            [
              _c("div", { staticClass: "card-body" }, [
                _c("h5", { staticClass: "card-title mb-4" }, [
                  _vm._v("Add Link Form")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group mb-4" }, [
                  _c("label", { attrs: { for: "title" } }, [
                    _vm._v("Link Title")
                  ]),
                  _c("span", { staticClass: "text-danger" }, [_vm._v(" *")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.link.title,
                        expression: "link.title"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", id: "title", required: "" },
                    domProps: { value: _vm.link.title },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.link, "title", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group mb-4" }, [
                  _c("label", { attrs: { for: "url" } }, [_vm._v("Link URL")]),
                  _c("span", { staticClass: "text-danger" }, [_vm._v(" *")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.link.url,
                        expression: "link.url"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "url",
                      id: "url",
                      placeholder: "http://localhost.com",
                      required: ""
                    },
                    domProps: { value: _vm.link.url },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.link, "url", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group mb-4" }, [
                  _c("div", { staticClass: "custom-control custom-checkbox" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.link.newTab,
                          expression: "link.newTab"
                        }
                      ],
                      staticClass: "custom-control-input",
                      attrs: { type: "checkbox", id: "new-tab" },
                      domProps: {
                        checked: Array.isArray(_vm.link.newTab)
                          ? _vm._i(_vm.link.newTab, null) > -1
                          : _vm.link.newTab
                      },
                      on: {
                        change: function($event) {
                          var $$a = _vm.link.newTab,
                            $$el = $event.target,
                            $$c = $$el.checked ? true : false
                          if (Array.isArray($$a)) {
                            var $$v = null,
                              $$i = _vm._i($$a, $$v)
                            if ($$el.checked) {
                              $$i < 0 &&
                                _vm.$set(_vm.link, "newTab", $$a.concat([$$v]))
                            } else {
                              $$i > -1 &&
                                _vm.$set(
                                  _vm.link,
                                  "newTab",
                                  $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                )
                            }
                          } else {
                            _vm.$set(_vm.link, "newTab", $$c)
                          }
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "label",
                      {
                        staticClass: "custom-control-label",
                        attrs: { for: "new-tab" }
                      },
                      [_vm._v("Check this to open this link in a new tab")]
                    )
                  ])
                ]),
                _vm._v(" "),
                !_vm.loading
                  ? _c("button", { staticClass: "btn btn-primary" }, [
                      _vm._v("Add Link")
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