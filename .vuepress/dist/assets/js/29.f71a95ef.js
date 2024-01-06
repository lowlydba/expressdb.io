(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"d33d2cce-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@vuepress/markdown-loader/index.js?!./sql-server-express-hardware-limitations.md?vue&type=template&id=2a3228a4":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"d33d2cce-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/babel-loader/lib??ref--3-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??ref--1-1!./node_modules/@vuepress/markdown-loader??ref--1-2!./sql-server-express-hardware-limitations.md?vue&type=template&id=2a3228a4 ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('ContentSlotsDistributor', {
    attrs: {
      "slot-key": _vm.$parent.slotKey
    }
  }, [_c('h2', {
    attrs: {
      "id": "hardware-limitations"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#hardware-limitations"
    }
  }, [_vm._v("#")]), _vm._v(" Hardware Limitations")]), _vm._v(" "), _c('p', [_vm._v("Some of the major restrictions for SQL Server Express are the caps\non processors and RAM that can be used by an instance. While most people\nfocus on the storage limitation, these two can also be quite problematic.\nIf only a few 10GB databases exist on an Express instance, the\npain of having less RAM/CPU available may not be noticeable. But, for those\ntrying to utilize many databases on a single instance, it might become\nobvious that more resources are needed.")]), _vm._v(" "), _c('div', {
    staticClass: "custom-block warning"
  }, [_c('p', {
    staticClass: "custom-block-title"
  }, [_vm._v("Note")]), _vm._v(" "), _c('p', [_vm._v("SQL Server Express can utilize "), _c('em', [_vm._v("at most")]), _vm._v(" 1410MB\nof RAM and either 1 socket or 4 cores - whichever is less "), _c('a', {
    attrs: {
      "href": "/which-sql-server-express-version-to-use"
    }
  }, [_vm._v("depending on\nthe version")]), _vm._v(".")])]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "multiple-instances-on-one-machine"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#multiple-instances-on-one-machine"
    }
  }, [_vm._v("#")]), _vm._v(" Multiple Instances on One Machine")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "making-the-most-of-resources"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#making-the-most-of-resources"
    }
  }, [_vm._v("#")]), _vm._v(" Making the Most of Resources")]), _vm._v(" "), _c('p', [_vm._v("While the allowed maximum RAM and CPU numbers might\nseem paltry compared to even a mid-tier laptop these days, the good news is that this\nonly applies at the "), _c('em', [_vm._v("instance")]), _vm._v(" level, so using multiple instances is a fair strategy.")]), _vm._v(" "), _c('p', [_vm._v("In fact, Microsoft even advertises the fact that all versions, from Enterprise to\nExpress, can handle 50 instances sitting side-by-side on a server. That doesn't mean 50\nis an ideal number, but it should prove that there is the capability for as many as are necessary. While each instance does require a base amount of CPU and RAM usage to run, distributing\nacross multiple is potentially worthwhile for a large enough workload or one that can separate\nits data cross-instance.")]), _vm._v(" "), _c('p', [_vm._v("For example, a laptop with 8GB of RAM and a quad-core processor\ncould host four SQL Server Express instances easily:")]), _vm._v(" "), _c('table', [_c('thead', [_c('tr', [_c('th'), _vm._v(" "), _c('th', [_vm._v("RAM")]), _vm._v(" "), _c('th', [_vm._v("CPU")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("Instance 1")]), _vm._v(" "), _c('td', [_vm._v("1410MB")]), _vm._v(" "), _c('td', [_vm._v("4 cores")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Instance 2")]), _vm._v(" "), _c('td', [_vm._v("1410MB")]), _vm._v(" "), _c('td', [_vm._v("4 cores")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Instance 3")]), _vm._v(" "), _c('td', [_vm._v("1410MB")]), _vm._v(" "), _c('td', [_vm._v("4 cores")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Instance 4")]), _vm._v(" "), _c('td', [_vm._v("1410MB")]), _vm._v(" "), _c('td', [_vm._v("4 cores")])]), _vm._v(" "), _c('tr', [_c('td', [_c('strong', [_vm._v("Total")])]), _vm._v(" "), _c('td', [_c('strong', [_vm._v("5640MB")])]), _vm._v(" "), _c('td', [_c('strong', [_vm._v("4 cores")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "custom-block tip"
  }, [_c('p', {
    staticClass: "custom-block-title"
  }, [_vm._v("Note")]), _vm._v(" "), _c('p', [_vm._v("This example is for demonstration purposes. Hardware configurations should be\nhighly tailored based on required performance and available hardware.")])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "the-downsides-of-side-loading"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#the-downsides-of-side-loading"
    }
  }, [_vm._v("#")]), _vm._v(" The Downsides of Side-Loading")]), _vm._v(" "), _c('p', [_vm._v("However, for everything gained by side-loading SQL Server instances, there are downsides as well.\nRebooting the server means rebooting "), _c('em', [_vm._v("all")]), _vm._v(" the instances, that means patching and OS updates can become very painful.")]), _vm._v(" "), _c('p', [_vm._v("As noted in the chart above, it probably isn't feasible to dedicate cores per instance, so another risk\nis that the instances are still sharing resources (and not just cores). A noisy neighbor could adversely\nimpact all the other instances and tracking down the root of that problem is far from easy.")]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "virtualization"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#virtualization"
    }
  }, [_vm._v("#")]), _vm._v(" Virtualization")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "virtually-the-best-option"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#virtually-the-best-option"
    }
  }, [_vm._v("#")]), _vm._v(" Virtually the Best Option")]), _vm._v(" "), _c('p', [_vm._v("Similar so side-loading several instances, with a powerful enough server a great option is to run\ndifferent SQL Server Express instances inside of Virtual Machines. This approach removes most of the\ndownsides from side-loading, as each VM has more or less contained resources and can be rebooted indepdently\nof its siblings.")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "the-downsides-of-virtualization"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#the-downsides-of-virtualization"
    }
  }, [_vm._v("#")]), _vm._v(" The Downsides of Virtualization")]), _vm._v(" "), _c('p', [_vm._v("The biggest problem with using a slew of VMs is that each one is an independent OS, not just an instance,\nso the bare metal machine's resources will be stretched even thinner by having to run all of the underlying\nprocesses necessary to keep both the OS and a SQL instance running smoothly. Depending on the hardware available,\nhowever, this might be a non-issue, as enough storage, RAM, and processors can fix most problems for a reasonable\nprice these days.")]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "further-reading"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#further-reading"
    }
  }, [_vm._v("#")]), _vm._v(" Further Reading")]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("Microsoft's "), _c('a', {
    attrs: {
      "href": "https://docs.microsoft.com/en-us/sql/sql-server/install/work-with-multiple-versions-and-instances-of-sql-server",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("Work with Multiple Versions and Instances of SQL Server"), _c('OutboundLink')], 1)])]), _vm._v(" "), _c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _c('ClientOnly', [_c('disqus-component'), _vm._v(" "), _c('userway-component')], 1)], 1);
};
var staticRenderFns = [];


/***/ }),

/***/ "./sql-server-express-hardware-limitations.md":
/*!****************************************************!*\
  !*** ./sql-server-express-hardware-limitations.md ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sql_server_express_hardware_limitations_md_vue_type_template_id_2a3228a4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sql-server-express-hardware-limitations.md?vue&type=template&id=2a3228a4 */ "./sql-server-express-hardware-limitations.md?vue&type=template&id=2a3228a4");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _sql_server_express_hardware_limitations_md_vue_type_template_id_2a3228a4__WEBPACK_IMPORTED_MODULE_0__["render"],
  _sql_server_express_hardware_limitations_md_vue_type_template_id_2a3228a4__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./sql-server-express-hardware-limitations.md?vue&type=template&id=2a3228a4":
/*!**********************************************************************************!*\
  !*** ./sql-server-express-hardware-limitations.md?vue&type=template&id=2a3228a4 ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_d33d2cce_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_3_0_node_modules_babel_loader_lib_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_node_modules_vuepress_markdown_loader_index_js_ref_1_2_sql_server_express_hardware_limitations_md_vue_type_template_id_2a3228a4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"d33d2cce-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/babel-loader/lib??ref--3-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??ref--1-1!./node_modules/@vuepress/markdown-loader??ref--1-2!./sql-server-express-hardware-limitations.md?vue&type=template&id=2a3228a4 */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"d33d2cce-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@vuepress/markdown-loader/index.js?!./sql-server-express-hardware-limitations.md?vue&type=template&id=2a3228a4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_d33d2cce_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_3_0_node_modules_babel_loader_lib_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_node_modules_vuepress_markdown_loader_index_js_ref_1_2_sql_server_express_hardware_limitations_md_vue_type_template_id_2a3228a4__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_d33d2cce_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_3_0_node_modules_babel_loader_lib_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_node_modules_vuepress_markdown_loader_index_js_ref_1_2_sql_server_express_hardware_limitations_md_vue_type_template_id_2a3228a4__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=29.f71a95ef.js.map