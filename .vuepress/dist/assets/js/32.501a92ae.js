(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[32],{

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"d33d2cce-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@vuepress/markdown-loader/index.js?!./sql-server-express-security-best-practices.md?vue&type=template&id=6e003c73":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"d33d2cce-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/babel-loader/lib??ref--3-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??ref--1-1!./node_modules/@vuepress/markdown-loader??ref--1-2!./sql-server-express-security-best-practices.md?vue&type=template&id=6e003c73 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      "id": "express-vs-other-editions-security"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#express-vs-other-editions-security"
    }
  }, [_vm._v("#")]), _vm._v(" Express vs Other Editions' Security")]), _vm._v(" "), _c('p', [_vm._v("Conveniently, security best practices for SQL Server Express are almost\nthe exact same as they are for any other more fully featured edition.")]), _vm._v(" "), _c('p', [_vm._v("The primary difference is that by default, SQL Server Express has its networking\nprotocols disabled by default. This means that out of the box, SQL Express isn't available\nto be connected to by other computers on a network. This actually makes it far "), _c('strong', [_vm._v("more")]), _vm._v(" secure\nby default than other editions. If SQL Server Express is being bundled with an application\nand both are residing on the same server, this default setting creates a very secure\ninstance without needing further customization.")]), _vm._v(" "), _c('p', [_vm._v("Otherwise, standard best practices apply. Since general security is out of the scope\nof this site, see the "), _c('a', {
    attrs: {
      "href": "#further-reading"
    }
  }, [_vm._v("Further Reading")]), _vm._v(" section at the bottom of this page\nfor general security recommendations.")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "enabling-network-connectivity"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#enabling-network-connectivity"
    }
  }, [_vm._v("#")]), _vm._v(" Enabling Network Connectivity")]), _vm._v(" "), _c('p', [_vm._v("If the Express instance needs to be available on a network, however, the following steps need\nto be completed:")]), _vm._v(" "), _c('ol', [_c('li', [_c('p', [_vm._v("Open SQL Server Configuration Manager")]), _vm._v(" "), _c('p', [_c('img', {
    attrs: {
      "src": "/sql_configuration_manager_1.PNG",
      "alt": "SQL Server Express Configuration Manager"
    }
  })])]), _vm._v(" "), _c('li', [_c('p', [_vm._v("Expand \"SQL Server Network Configuration\"")])]), _vm._v(" "), _c('li', [_c('p', [_vm._v("Select \"Protocols for MSSQLSERVER\" (or a custom instance name)")])]), _vm._v(" "), _c('li', [_c('p', [_vm._v("On the right pane, right click \"TCP/IP\" and choose \"Properties\"")]), _vm._v(" "), _c('p', [_c('img', {
    attrs: {
      "src": "/sql_configuration_manager_2.PNG",
      "alt": "SQL Server Express Configuration Manager"
    }
  })])]), _vm._v(" "), _c('li', [_c('p', [_vm._v("In the \"Protocol\" tab, make sure \"Enabled\" is set to "), _c('strong', [_vm._v("Yes")])]), _vm._v(" "), _c('p', [_c('img', {
    attrs: {
      "src": "/sql_configuration_manager_3.PNG",
      "alt": "SQL Server Express Configuration Manager"
    }
  })])]), _vm._v(" "), _c('li', [_c('p', [_vm._v("In the \"IP Addresses\" tab, scroll to the bottom of the dialogue to the header \"IPAll\" and  make sure the TCP Port is set to 1433 and apply all changes.")]), _vm._v(" "), _c('p', [_c('img', {
    attrs: {
      "src": "/sql_configuration_manager_4.PNG",
      "alt": "SQL Server Express Configuration Manager"
    }
  })])]), _vm._v(" "), _c('li', [_c('p', [_vm._v("Open the computer's Services find \"SQL Server Browser\" right click to open the \"Properties\" dialogue")]), _vm._v(" "), _c('p', [_c('img', {
    attrs: {
      "src": "/sql_configuration_manager_5.PNG",
      "alt": "SQL Server Express Configuration Manager"
    }
  })])]), _vm._v(" "), _c('li', [_c('p', [_vm._v("Set start to \"Automatic\" and apply the changes.")]), _vm._v(" "), _c('p', [_c('img', {
    attrs: {
      "src": "/sql_configuration_manager_6.PNG",
      "alt": "SQL Server Express Configuration Manager"
    }
  })])])]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "further-reading"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#further-reading"
    }
  }, [_vm._v("#")]), _vm._v(" Further Reading")]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("Microsoft Documentation's "), _c('a', {
    attrs: {
      "href": "https://docs.microsoft.com/en-us/dotnet/framework/data/adonet/sql/sql-server-express-security",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("SQL Server Express Security"), _c('OutboundLink')], 1)]), _vm._v(" "), _c('li', [_vm._v("Microsoft Documentation's "), _c('a', {
    attrs: {
      "href": "https://docs.microsoft.com/en-us/sql/relational-databases/security/securing-sql-server",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("Securing SQL Server"), _c('OutboundLink')], 1)]), _vm._v(" "), _c('li', [_vm._v("MSSQLTips' "), _c('a', {
    attrs: {
      "href": "https://www.mssqltips.com/sqlservertip/3159/sql-server-security-checklist/",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("SQL Server Security Checklist"), _c('OutboundLink')], 1)]), _vm._v(" "), _c('li', [_vm._v("Robert Sheldon's "), _c('a', {
    attrs: {
      "href": "https://www.red-gate.com/simple-talk/sql/database-administration/how-to-get-sql-server-security-horribly-wrong/",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("How to Get SQL Server Security Horribly Wrong"), _c('OutboundLink')], 1)])]), _vm._v(" "), _c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _c('ClientOnly', [_c('disqus-component'), _vm._v(" "), _c('userway-component')], 1)], 1);
};
var staticRenderFns = [];


/***/ }),

/***/ "./sql-server-express-security-best-practices.md":
/*!*******************************************************!*\
  !*** ./sql-server-express-security-best-practices.md ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sql_server_express_security_best_practices_md_vue_type_template_id_6e003c73__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sql-server-express-security-best-practices.md?vue&type=template&id=6e003c73 */ "./sql-server-express-security-best-practices.md?vue&type=template&id=6e003c73");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _sql_server_express_security_best_practices_md_vue_type_template_id_6e003c73__WEBPACK_IMPORTED_MODULE_0__["render"],
  _sql_server_express_security_best_practices_md_vue_type_template_id_6e003c73__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./sql-server-express-security-best-practices.md?vue&type=template&id=6e003c73":
/*!*************************************************************************************!*\
  !*** ./sql-server-express-security-best-practices.md?vue&type=template&id=6e003c73 ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_d33d2cce_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_3_0_node_modules_babel_loader_lib_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_node_modules_vuepress_markdown_loader_index_js_ref_1_2_sql_server_express_security_best_practices_md_vue_type_template_id_6e003c73__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"d33d2cce-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/babel-loader/lib??ref--3-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??ref--1-1!./node_modules/@vuepress/markdown-loader??ref--1-2!./sql-server-express-security-best-practices.md?vue&type=template&id=6e003c73 */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"d33d2cce-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@vuepress/markdown-loader/index.js?!./sql-server-express-security-best-practices.md?vue&type=template&id=6e003c73");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_d33d2cce_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_3_0_node_modules_babel_loader_lib_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_node_modules_vuepress_markdown_loader_index_js_ref_1_2_sql_server_express_security_best_practices_md_vue_type_template_id_6e003c73__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_d33d2cce_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_3_0_node_modules_babel_loader_lib_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_node_modules_vuepress_markdown_loader_index_js_ref_1_2_sql_server_express_security_best_practices_md_vue_type_template_id_6e003c73__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=32.501a92ae.js.map