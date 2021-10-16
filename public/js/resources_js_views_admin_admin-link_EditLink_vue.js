"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_admin_admin-link_EditLink_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/admin-link/EditLink.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/admin-link/EditLink.vue?vue&type=script&lang=js& ***!
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
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      loading: true,
      saving: false,
      linkID: this.$route.params.id || localStorage.getItem('linkID'),
      link: {}
    };
  },
  created: function created() {
    var _this = this;

    this.axios.get("http://localhost:8000/api/admin/link/".concat(this.linkID)).then(function (response) {
      _this.link.title = response.data.title;
      _this.link.url = response.data.link;
      _this.link.newTab = response.data.new_tab === 1;
    })["catch"](function (error) {
      return console.log(error);
    })["finally"](function () {
      return _this.loading = false;
    });
  },
  methods: {
    editLink: function editLink() {
      var _this2 = this;

      this.$swal({
        title: 'Are you sure?',
        text: "This will update the link resource",
        type: 'warning',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, update it!'
      }).then(function (result) {
        if (result.value) {
          _this2.saving = true;
          var formData = new FormData();
          formData.append('id', _this2.linkID);
          formData.append('title', _this2.link.title);
          formData.append('link', _this2.link.url);
          formData.append('new_tab', _this2.link.newTab ? '1' : '0');

          _this2.axios.post('http://localhost:8000/api/admin/link/update', formData).then(function (response) {
            _this2.$router.push({
              name: 'admin-link'
            }).then(function () {
              _this2.$toast.success(response.data);
            });
          })["catch"](function (error) {
            _this2.$toast.error(error.response.data.message);
          })["finally"](function () {
            return _this2.saving = false;
          });
        }
      });
    }
  },
  beforeDestroy: function beforeDestroy() {
    localStorage.removeItem('linkID');
  }
});

/***/ }),

/***/ "./resources/js/views/admin/admin-link/EditLink.vue":
/*!**********************************************************!*\
  !*** ./resources/js/views/admin/admin-link/EditLink.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EditLink_vue_vue_type_template_id_7246e58c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditLink.vue?vue&type=template&id=7246e58c& */ "./resources/js/views/admin/admin-link/EditLink.vue?vue&type=template&id=7246e58c&");
/* harmony import */ var _EditLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditLink.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/admin-link/EditLink.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditLink_vue_vue_type_template_id_7246e58c___WEBPACK_IMPORTED_MODULE_0__.render,
  _EditLink_vue_vue_type_template_id_7246e58c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/admin-link/EditLink.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/admin-link/EditLink.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/admin/admin-link/EditLink.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditLink.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/admin-link/EditLink.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/admin-link/EditLink.vue?vue&type=template&id=7246e58c&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/admin/admin-link/EditLink.vue?vue&type=template&id=7246e58c& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditLink_vue_vue_type_template_id_7246e58c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditLink_vue_vue_type_template_id_7246e58c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditLink_vue_vue_type_template_id_7246e58c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditLink.vue?vue&type=template&id=7246e58c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/admin-link/EditLink.vue?vue&type=template&id=7246e58c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/admin-link/EditLink.vue?vue&type=template&id=7246e58c&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/admin-link/EditLink.vue?vue&type=template&id=7246e58c& ***!
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
    _c("main", { attrs: { role: "main" } }, [
      _c(
        "div",
        {
          staticClass:
            "d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2"
        },
        [
          _c("p", { staticClass: "text-muted" }, [
            _vm._v("Here you can edit your Link resource")
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
                    return _vm.editLink.apply(null, arguments)
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
                    _c("label", { attrs: { for: "url" } }, [
                      _vm._v("Link URL")
                    ]),
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
                    _c(
                      "div",
                      { staticClass: "custom-control custom-checkbox" },
                      [
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
                                    _vm.$set(
                                      _vm.link,
                                      "newTab",
                                      $$a.concat([$$v])
                                    )
                                } else {
                                  $$i > -1 &&
                                    _vm.$set(
                                      _vm.link,
                                      "newTab",
                                      $$a
                                        .slice(0, $$i)
                                        .concat($$a.slice($$i + 1))
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
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  !_vm.saving
                    ? _c("button", { staticClass: "btn btn-primary" }, [
                        _vm._v("Save Changes")
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.saving
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
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);