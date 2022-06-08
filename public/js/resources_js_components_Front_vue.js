"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Front_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Front.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Front.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      categories: [],
      products: {},
      loading: true
    };
  },
  created: function created() {
    this.loadCategories();
    this.loadProducts();
  },
  methods: {
    loadCategories: function loadCategories() {
      var _this = this;

      axios.get('/api/categories').then(function (response) {
        _this.categories = response.data.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    loadProducts: function loadProducts() {
      var _this2 = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      axios.get('/api/products?page=' + page).then(function (response) {
        _this2.products = response.data;
        _this2.loading = false;
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Front.vue":
/*!*******************************************!*\
  !*** ./resources/js/components/Front.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Front_vue_vue_type_template_id_4c17cb64___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Front.vue?vue&type=template&id=4c17cb64& */ "./resources/js/components/Front.vue?vue&type=template&id=4c17cb64&");
/* harmony import */ var _Front_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Front.vue?vue&type=script&lang=js& */ "./resources/js/components/Front.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Front_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Front_vue_vue_type_template_id_4c17cb64___WEBPACK_IMPORTED_MODULE_0__.render,
  _Front_vue_vue_type_template_id_4c17cb64___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Front.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Front.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/components/Front.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Front_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Front.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Front.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Front_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Front.vue?vue&type=template&id=4c17cb64&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Front.vue?vue&type=template&id=4c17cb64& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Front_vue_vue_type_template_id_4c17cb64___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Front_vue_vue_type_template_id_4c17cb64___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Front_vue_vue_type_template_id_4c17cb64___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Front.vue?vue&type=template&id=4c17cb64& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Front.vue?vue&type=template&id=4c17cb64&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Front.vue?vue&type=template&id=4c17cb64&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Front.vue?vue&type=template&id=4c17cb64& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "container", class: { loading: _vm.loading } },
    [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-lg-3" }, [
          _c("h1", { staticClass: "my-4" }, [_vm._v("Shop Catalog")]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "list-group" },
            _vm._l(_vm.categories, function (category) {
              return _c("a", { staticClass: "list-group-item" }, [
                _vm._v(
                  "\n                    " +
                    _vm._s(category.name) +
                    "\n                "
                ),
              ])
            }),
            0
          ),
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-lg-9" },
          [
            _c(
              "div",
              { staticClass: "row mt-4" },
              _vm._l(_vm.products.data, function (product) {
                return _c("div", { staticClass: "col-lg-4 col-md-6 mb-4" }, [
                  _c("div", { staticClass: "card h-100" }, [
                    _vm._m(0, true),
                    _vm._v(" "),
                    _c("div", { staticClass: "card-body" }, [
                      _c("h4", { staticClass: "card-title" }, [
                        _c("a", { attrs: { href: "#" } }, [
                          _vm._v(_vm._s(product.name)),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("h5", [_vm._v("$ " + _vm._s(product.price))]),
                      _vm._v(" "),
                      _c("p", { staticClass: "card-text" }, [
                        _vm._v(_vm._s(product.description)),
                      ]),
                    ]),
                  ]),
                ])
              }),
              0
            ),
            _vm._v(" "),
            _c("pagination", {
              attrs: { data: _vm.products },
              on: { "pagination-change-page": _vm.loadProducts },
            }),
          ],
          1
        ),
      ]),
    ]
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { attrs: { href: "#" } }, [
      _c("img", {
        staticClass: "card-img-top",
        attrs: { src: "http://placehold.it/700x400", alt: "" },
      }),
    ])
  },
]
render._withStripped = true



/***/ })

}]);