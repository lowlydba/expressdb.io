(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35],{

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"d33d2cce-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@vuepress/markdown-loader/index.js?!./sql-server-express-vs-localdb.md?vue&type=template&id=bd76830e":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"d33d2cce-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/babel-loader/lib??ref--3-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??ref--1-1!./node_modules/@vuepress/markdown-loader??ref--1-2!./sql-server-express-vs-localdb.md?vue&type=template&id=bd76830e ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      "id": "what-is-localdb"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#what-is-localdb"
    }
  }, [_vm._v("#")]), _vm._v(" What is LocalDB")]), _vm._v(" "), _c('p', [_vm._v("LocalDB is a developer oriented, on-demand managed instance of the SQL Server engine\nthat can be turned on automatically when needed and turned off when not in use. It requires\nno configuration to run and allows for quick access to a database engine without\nthe overhead of managing and installing a full SQL Server instance. LocalDB utilizes the minimal amount\nof files needed to achieve all of this. Having the database access stay local greatly reduces\nthe complexity for developing and testing applications with a SQL Server backend.")]), _vm._v(" "), _c('p', [_vm._v("LocalDB is packaged with "), _c('a', {
    attrs: {
      "href": "https://www.visualstudio.com/downloads/",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("Visual Studio"), _c('OutboundLink')], 1), _vm._v(" as well as "), _c('a', {
    attrs: {
      "href": "https://www.microsoft.com/en-us/sql-server/sql-server-editions-express",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("SQL Server Express"), _c('OutboundLink')], 1), _vm._v(" (with Advanced Services for versions 2016 and earlier).")]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "sql-server-express-vs-localdb"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#sql-server-express-vs-localdb"
    }
  }, [_vm._v("#")]), _vm._v(" SQL Server Express vs LocalDB")]), _vm._v(" "), _c('p', [_vm._v("SQL Server Express and LocalDB have a lot in common:")]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("Cost: free")]), _vm._v(" "), _c('li', [_vm._v("Target Audiences: developers and students")]), _vm._v(" "), _c('li', [_vm._v("API Compatibility with other versions of SQL Server")]), _vm._v(" "), _c('li', [_vm._v("Both run with sqlservr.exe")])]), _vm._v(" "), _c('p', [_vm._v("However, LocalDB is intended for a different use case by addressing needs that are specific\nto developers and less common for actual application use. As a result, it is only able to have one installation per version, runs in-process and not as a service,\ndoesn't stay running without active connections, requires a special connection string, and cannot be accessed remotely.\nBy providing the convenience of an embedded database with the compatibility of SQL Server, LocalDB\nservers a very real need for developers to quickly and painlessly use a local database. And by starting\nautomatically when an application connects, it only consumes resources necessary to run\nfor the duration of the connection, shutting off when no longer needed.")]), _vm._v(" "), _c('p', [_vm._v("SQL Server Express, on the other hand, can be used for local development but requires\nfar more installation and configuration time, stays on until it is manually turned off,\nand can be installed many times on a single server or computer. While it can be used\nfor the same purpose as LocalDB, it will consume more hardware resources to do so and\nstrives to be more of an exact match to other SQL Server versions from installation down to\nfunctionality, at the cost of being\nharder to maintain.")]), _vm._v(" "), _c('p', [_vm._v("Despite their differences, Microsoft still allows "), _c('strong', [_vm._v("both")]), _vm._v(" to be used for production applications\nat no cost. LocalDB can act as an embedded database for a small application and SQL Server Express\ncan act as a more robust, full-featured remote database engine for larger applications. There is no upgrade\npath to other versions when using LocalDB, though, so choosing it as a backend should only be\ndone if the application's database needs will not grow over time.")]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "further-reading"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#further-reading"
    }
  }, [_vm._v("#")]), _vm._v(" Further Reading")]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("Visual Studio Documentation's "), _c('a', {
    attrs: {
      "href": "https://msdn.microsoft.com/en-us/library/ms233817(v=vs.140).aspx",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("Local Data Overview"), _c('OutboundLink')], 1)]), _vm._v(" "), _c('li', [_vm._v("Microsoft's "), _c('a', {
    attrs: {
      "href": "https://blogs.msdn.microsoft.com/sqlexpress/2011/11/28/announcing-sql-server-2012-express-localdb-rc0/",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("LocalDB Product Announcement"), _c('OutboundLink')], 1)]), _vm._v(" "), _c('li', [_vm._v("Microsoft's "), _c('a', {
    attrs: {
      "href": "https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/sql-server-2016-express-localdb?view=sql-server-2017",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("SQL Server 2016 Express LocalDB"), _c('OutboundLink')], 1), _vm._v(" Documentation")])]), _vm._v(" "), _c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _c('ClientOnly', [_c('disqus-component'), _vm._v(" "), _c('userway-component')], 1)], 1);
};
var staticRenderFns = [];


/***/ }),

/***/ "./sql-server-express-vs-localdb.md":
/*!******************************************!*\
  !*** ./sql-server-express-vs-localdb.md ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sql_server_express_vs_localdb_md_vue_type_template_id_bd76830e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sql-server-express-vs-localdb.md?vue&type=template&id=bd76830e */ "./sql-server-express-vs-localdb.md?vue&type=template&id=bd76830e");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _sql_server_express_vs_localdb_md_vue_type_template_id_bd76830e__WEBPACK_IMPORTED_MODULE_0__["render"],
  _sql_server_express_vs_localdb_md_vue_type_template_id_bd76830e__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./sql-server-express-vs-localdb.md?vue&type=template&id=bd76830e":
/*!************************************************************************!*\
  !*** ./sql-server-express-vs-localdb.md?vue&type=template&id=bd76830e ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_d33d2cce_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_3_0_node_modules_babel_loader_lib_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_node_modules_vuepress_markdown_loader_index_js_ref_1_2_sql_server_express_vs_localdb_md_vue_type_template_id_bd76830e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"d33d2cce-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/babel-loader/lib??ref--3-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??ref--1-1!./node_modules/@vuepress/markdown-loader??ref--1-2!./sql-server-express-vs-localdb.md?vue&type=template&id=bd76830e */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"d33d2cce-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@vuepress/markdown-loader/index.js?!./sql-server-express-vs-localdb.md?vue&type=template&id=bd76830e");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_d33d2cce_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_3_0_node_modules_babel_loader_lib_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_node_modules_vuepress_markdown_loader_index_js_ref_1_2_sql_server_express_vs_localdb_md_vue_type_template_id_bd76830e__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_d33d2cce_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_3_0_node_modules_babel_loader_lib_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_node_modules_vuepress_markdown_loader_index_js_ref_1_2_sql_server_express_vs_localdb_md_vue_type_template_id_bd76830e__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=35.4144ce46.js.map