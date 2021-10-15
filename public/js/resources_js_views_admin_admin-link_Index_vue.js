"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_admin_admin-link_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/admin-link/Index.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/admin-link/Index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
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
      crumbs: [{
        id: 1,
        name: 'Dashboard',
        active: false,
        path: '/admin'
      }, {
        id: 2,
        name: 'Link Resource',
        active: true,
        path: ''
      }],
      links: []
    };
  },
  created: function created() {
    var _this = this;

    this.axios.get('http://localhost:8000/api/admin/link').then(function (response) {
      _this.links = response.data;
    })["catch"](function (error) {
      return console.log(error);
    })["finally"](function () {
      return _this.loading = false;
    });
  },
  methods: {
    editLink: function editLink(link) {
      localStorage.setItem('linkID', link.id);
      this.$router.push({
        name: 'edit-link',
        params: {
          id: link.id
        }
      });
    },
    deleteLink: function deleteLink(link) {}
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

/***/ "./resources/js/views/admin/admin-link/Index.vue":
/*!*******************************************************!*\
  !*** ./resources/js/views/admin/admin-link/Index.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_a8ee66cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=a8ee66cc& */ "./resources/js/views/admin/admin-link/Index.vue?vue&type=template&id=a8ee66cc&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/admin-link/Index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_a8ee66cc___WEBPACK_IMPORTED_MODULE_0__.render,
  _Index_vue_vue_type_template_id_a8ee66cc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/admin-link/Index.vue"
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

/***/ "./resources/js/views/admin/admin-link/Index.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/admin/admin-link/Index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/admin-link/Index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/views/admin/admin-link/Index.vue?vue&type=template&id=a8ee66cc&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/admin/admin-link/Index.vue?vue&type=template&id=a8ee66cc& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_a8ee66cc___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_a8ee66cc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_a8ee66cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=template&id=a8ee66cc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/admin-link/Index.vue?vue&type=template&id=a8ee66cc&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/admin-link/Index.vue?vue&type=template&id=a8ee66cc&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/admin-link/Index.vue?vue&type=template&id=a8ee66cc& ***!
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
    _c(
      "main",
      { attrs: { role: "main" } },
      [
        _c("PageHeader", {
          attrs: { "page-title": "Link Resource", crumbs: _vm.crumbs }
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
              _vm._v("Here is the list of all your Link resources to manage")
            ]),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-primary btn-sm",
                on: {
                  click: function($event) {
                    return _vm.$router.push({ name: "add-link" })
                  }
                }
              },
              [_vm._v("Add Link Resource")]
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
                    this.links.length === 0
                      ? _c("tr", [
                          _c(
                            "td",
                            {
                              staticClass: "font-weight-bolder text-center",
                              attrs: { colspan: "5" }
                            },
                            [_vm._v("No Link Resource exists")]
                          )
                        ])
                      : _vm._l(_vm.links, function(link, key) {
                          return _c("tr", { key: link.id }, [
                            _c("td", { staticClass: "text-center" }, [
                              _vm._v(_vm._s(++key))
                            ]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(link.title))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(link.link))]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(
                                _vm._s(new Date(link.created_at).toDateString())
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
                                            return _vm.editLink(link)
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
                                          "\n                Edit Link\n              "
                                        )
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "a",
                                      {
                                        staticClass:
                                          "dropdown-item text-danger",
                                        attrs: { href: "javascript:void(0)" },
                                        on: {
                                          click: function($event) {
                                            return _vm.deleteLink(link)
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
                                          "\n                Delete Link\n              "
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
    return _c("thead", [
      _c("tr", [
        _c("th", { staticStyle: { width: "5%" } }, [_vm._v("#")]),
        _vm._v(" "),
        _c("th", [_vm._v("Title")]),
        _vm._v(" "),
        _c("th", [_vm._v("Link")]),
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