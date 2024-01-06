(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"d33d2cce-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@vuepress/markdown-loader/index.js?!./sql-server-express-database-size-limit.md?vue&type=template&id=6a90abd6":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"d33d2cce-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/babel-loader/lib??ref--3-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??ref--1-1!./node_modules/@vuepress/markdown-loader??ref--1-2!./sql-server-express-database-size-limit.md?vue&type=template&id=6a90abd6 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      "id": "size-limitations"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#size-limitations"
    }
  }, [_vm._v("#")]), _vm._v(" Size Limitations")]), _vm._v(" "), _c('p', [_vm._v("One of the reasons Microsoft is able to give SQL Server Express away for free is\nbecause of the limits imposed on certain facets of the server. One of the largest\nlimitations of SQL Server Express is the restriction on individual database sizes.\nNo single database can be over 10GB on modern versions. This restriction has been in place for over a decade\nand has not increased over time, even as modern data storage has become extremely\ncheap and plentiful.")]), _vm._v(" "), _c('p', [_vm._v("Even if an application doesn't require storing 10GB of data immediately, over years\nof use it is not uncommon for a database to hit the ceiling on its size. When SQL\nServer Express is bundled with software, this can result in customer support calls and\nperformance degradation for end users.")]), _vm._v(" "), _c('p', [_c('img', {
    attrs: {
      "src": "/sql-express.png",
      "alt": "SQL Server Express"
    }
  })]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "how-to-work-around-sql-server-express-s-data-limit"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#how-to-work-around-sql-server-express-s-data-limit"
    }
  }, [_vm._v("#")]), _vm._v(" How to Work Around SQL Server Express's Data Limit")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "compression"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#compression"
    }
  }, [_vm._v("#")]), _vm._v(" Compression")]), _vm._v(" "), _c('p', [_vm._v("In SQL Server 2016 SP1+, Express versions can utilize "), _c('a', {
    attrs: {
      "href": "https://docs.microsoft.com/en-us/sql/relational-databases/data-compression/data-compression?view=sql-server-ver15",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("data compression"), _c('OutboundLink')], 1), _vm._v(" on indexes and tables to increase the size of a database on disk. Generally, the additional CPU required to decompress data that is read from disk is a worthwhile trade off for larger tables and indexes.")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "design-smart"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#design-smart"
    }
  }, [_vm._v("#")]), _vm._v(" Design Smart")]), _vm._v(" "), _c('p', [_vm._v("Commonly, databases are created using generic data types that may provide flexibility, but\nalso come at the cost of an increased storage footprint. By assessing the below options,\na database can take up a fraction of its original size without sacrificing any actual data.")]), _vm._v(" "), _c('p', [_vm._v("This advice is meant to be general and should always be assessed in the context of\nthe specific use case at hand.")]), _vm._v(" "), _c('h4', {
    attrs: {
      "id": "integers"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#integers"
    }
  }, [_vm._v("#")]), _vm._v(" Integers")]), _vm._v(" "), _c('p', [_c('a', {
    attrs: {
      "href": "https://docs.microsoft.com/en-us/sql/t-sql/data-types/int-bigint-smallint-and-tinyint-transact-sql",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_c('code', [_vm._v("INT")]), _c('OutboundLink')], 1), _vm._v(" is a common data type for IDs and whole-number numeric data. With a size of 4 bytes, it isn't very big but can support numbers up to 2,147,483,647. However if it is clear that the\nvalue being captured is never going to hit anywhere near that limit, using a "), _c('a', {
    attrs: {
      "href": "https://docs.microsoft.com/en-us/sql/t-sql/data-types/int-bigint-smallint-and-tinyint-transact-sql",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_c('code', [_vm._v("SMALLINT")]), _c('OutboundLink')], 1), _vm._v(" for values up to 32,767 (2 bytes) or "), _c('a', {
    attrs: {
      "href": "https://docs.microsoft.com/en-us/sql/t-sql/data-types/int-bigint-smallint-and-tinyint-transact-sql",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_c('code', [_vm._v("TINYINT")]), _c('OutboundLink')], 1), _vm._v(" for values up to 255 (1 byte) can drastically reduce storage space. All of these types are available in SQL 2008+")]), _vm._v(" "), _c('p', [_vm._v("For example, a table "), _c('code', [_vm._v("[dbo].[state]")]), _vm._v(" may provide a list of all 50 states in the US.\nCommonly the ID for this table will be an "), _c('code', [_vm._v("INT")]), _vm._v(" data type, but since it is unlikely\nthere will be 200+ new states any time soon, it is safe to use a "), _c('code', [_vm._v("TINYINT")]), _vm._v(" instead and\nreduce the ID column's footprint to 25% of its original value.")]), _vm._v(" "), _c('h4', {
    attrs: {
      "id": "date-and-time"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#date-and-time"
    }
  }, [_vm._v("#")]), _vm._v(" Date and Time")]), _vm._v(" "), _c('p', [_vm._v("Similarly to integers, often times date and time datatypes are chosen that provide\nfar more detail than necessary. While some use cases necessitate the capturing of\nmilliseconds, many times precision more than a second is just excessive and provides\nno benefit to an application, yet takes up more disk space. Be sure that each type is not defaulting to a higher precision than is needed, also.")]), _vm._v(" "), _c('p', [_vm._v("There are many options for date, time, and datetime values, so assess what makes the most sense for each situation and use the smallest available:")]), _vm._v(" "), _c('table', [_c('thead', [_c('tr', [_c('th', [_vm._v("Data Type")]), _vm._v(" "), _c('th', [_vm._v("Accuracy")]), _vm._v(" "), _c('th', [_vm._v("Size")]), _vm._v(" "), _c('th', [_vm._v("Compatibility")]), _vm._v(" "), _c('th', [_vm._v("Example")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_c('a', {
    attrs: {
      "href": "https://docs.microsoft.com/en-us/sql/t-sql/data-types/date-transact-sql",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_c('code', [_vm._v("DATE")]), _c('OutboundLink')], 1)]), _vm._v(" "), _c('td', [_vm._v("One day")]), _vm._v(" "), _c('td', [_vm._v("3 bytes")]), _vm._v(" "), _c('td', [_vm._v("2008+")]), _vm._v(" "), _c('td', [_vm._v("2018-04-02")])]), _vm._v(" "), _c('tr', [_c('td', [_c('a', {
    attrs: {
      "href": "https://docs.microsoft.com/en-us/sql/t-sql/data-types/datetime-transact-sql",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_c('code', [_vm._v("DATETIME")]), _c('OutboundLink')], 1)]), _vm._v(" "), _c('td', [_vm._v("Rounded to increments of .000, .003, .007 sec")]), _vm._v(" "), _c('td', [_vm._v("8 bytes")]), _vm._v(" "), _c('td', [_vm._v("2008+")]), _vm._v(" "), _c('td', [_vm._v("2018-04-02 12:35:29.123")])]), _vm._v(" "), _c('tr', [_c('td', [_c('a', {
    attrs: {
      "href": "https://docs.microsoft.com/en-us/sql/t-sql/data-types/datetime2-transact-sql",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_c('code', [_vm._v("DATETIME2")]), _c('OutboundLink')], 1)]), _vm._v(" "), _c('td', [_vm._v("100 nanoseconds")]), _vm._v(" "), _c('td', [_vm._v("6 bytes for precisions < 3; 7 bytes for precisions 3 & 4; all others are 8 bytes")]), _vm._v(" "), _c('td', [_vm._v("2008+")]), _vm._v(" "), _c('td', [_vm._v("2018-04-02 12:35:29.1234567")])]), _vm._v(" "), _c('tr', [_c('td', [_c('a', {
    attrs: {
      "href": "https://docs.microsoft.com/en-us/sql/t-sql/data-types/datetimeoffset-transact-sql",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_c('code', [_vm._v("DATETIMEOFFSET")]), _c('OutboundLink')], 1)]), _vm._v(" "), _c('td', [_vm._v("100 nanoseconds")]), _vm._v(" "), _c('td', [_vm._v("8-10 bytes")]), _vm._v(" "), _c('td', [_vm._v("2008+")]), _vm._v(" "), _c('td', [_vm._v("2018-04-02 12:35:29.1234567 +12:15")])]), _vm._v(" "), _c('tr', [_c('td', [_c('a', {
    attrs: {
      "href": "https://docs.microsoft.com/en-us/sql/t-sql/data-types/smalldatetime-transact-sql",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_c('code', [_vm._v("SMALLDATETIME")]), _c('OutboundLink')], 1)]), _vm._v(" "), _c('td', [_vm._v("One minute")]), _vm._v(" "), _c('td', [_vm._v("4 bytes")]), _vm._v(" "), _c('td', [_vm._v("2008+")]), _vm._v(" "), _c('td', [_vm._v("2018-04-02 12:35:00")])]), _vm._v(" "), _c('tr', [_c('td', [_c('a', {
    attrs: {
      "href": "https://docs.microsoft.com/en-us/sql/t-sql/data-types/time-transact-sql",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_c('code', [_vm._v("TIME")]), _c('OutboundLink')], 1)]), _vm._v(" "), _c('td', [_vm._v("Varies")]), _vm._v(" "), _c('td', [_vm._v("3-5 bytes")]), _vm._v(" "), _c('td', [_vm._v("2008+")]), _vm._v(" "), _c('td', [_vm._v("12:35:29.1234567")])])])]), _vm._v(" "), _c('h4', {
    attrs: {
      "id": "decimals"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#decimals"
    }
  }, [_vm._v("#")]), _vm._v(" Decimals")]), _vm._v(" "), _c('p', [_vm._v("Similar to dates and integers, making sure only the precision necessary is being stored\nwhen dealing with "), _c('a', {
    attrs: {
      "href": "https://docs.microsoft.com/en-us/sql/t-sql/data-types/decimal-and-numeric-transact-sql",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_c('code', [_vm._v("DECIMAL")]), _vm._v(" and "), _c('code', [_vm._v("NUMERIC")]), _c('OutboundLink')], 1), _vm._v(" (functionally equivalent data types) is very important.")]), _vm._v(" "), _c('p', [_vm._v("For most cases, a precision of 9 or less will suffice, which means "), _c('code', [_vm._v("DECIMAL")]), _vm._v(" will only take up 5 bytes. However, if more is required, the following sizes will apply:")]), _vm._v(" "), _c('table', [_c('thead', [_c('tr', [_c('th', [_vm._v("Precision")]), _vm._v(" "), _c('th', [_vm._v("Size")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("1-9")]), _vm._v(" "), _c('td', [_vm._v("5 bytes")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("10-19")]), _vm._v(" "), _c('td', [_vm._v("9 bytes")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("20-28")]), _vm._v(" "), _c('td', [_vm._v("13 bytes")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("29-38")]), _vm._v(" "), _c('td', [_vm._v("17 bytes")])])])]), _vm._v(" "), _c('p', [_vm._v("It may be tempting to consider the "), _c('a', {
    attrs: {
      "href": "https://docs.microsoft.com/en-us/sql/t-sql/data-types/float-and-real-transact-sql",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_c('code', [_vm._v("FLOAT")]), _vm._v(" or "), _c('code', [_vm._v("REAL")]), _c('OutboundLink')], 1), _vm._v(" types as well, since they can store a precision of 7 digits in 4 bytes and 15 digits in 8 bytes. However, it is integral to remember that these types are "), _c('em', [_vm._v("floating point numerics")]), _vm._v(" and thus contain approximate values. Unless floating point numbers are a specific requirement, using these types can lead to rounding issues and are certainly not worth the risk for space savings.")]), _vm._v(" "), _c('h4', {
    attrs: {
      "id": "strings-and-varchars"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#strings-and-varchars"
    }
  }, [_vm._v("#")]), _vm._v(" Strings and VARCHARs")]), _vm._v(" "), _c('p', [_vm._v("Another easy way to slim down a database is choosing the right character data type format.\n"), _c('a', {
    attrs: {
      "href": "https://docs.microsoft.com/en-us/sql/t-sql/data-types/nchar-and-nvarchar-transact-sql",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_c('code', [_vm._v("NVARCHAR")]), _c('OutboundLink')], 1), _vm._v(" and "), _c('code', [_vm._v("NCHAR")]), _vm._v(" store Unicode data, and are thus must-haves for storing any multilingual or localized data. Conversely, "), _c('a', {
    attrs: {
      "href": "https://docs.microsoft.com/en-us/sql/t-sql/data-types/char-and-varchar-transact-sql",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_c('code', [_vm._v("VARCHAR")]), _c('OutboundLink')], 1), _vm._v(" and "), _c('code', [_vm._v("CHAR")]), _vm._v(" store non-Unicode data and only take 1 byte for every 2 bytes that "), _c('code', [_vm._v("NVARCHAR")]), _vm._v(" takes up. This can effectively cut a table's size in half if it is comprised mostly of a large string column, like a comment or note field.")]), _vm._v(" "), _c('p', [_vm._v("So, a simple \"Hello\" in "), _c('code', [_vm._v("NVARCHAR")]), _vm._v(" will be 10 bytes but only 5 in "), _c('code', [_vm._v("VARCHAR")]), _vm._v(". The difference can be huge for not only performance, but also storage, when strings are properly typed.")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "use-multiple-databases"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#use-multiple-databases"
    }
  }, [_vm._v("#")]), _vm._v(" Use Multiple Databases")]), _vm._v(" "), _c('p', [_vm._v("While each "), _c('em', [_vm._v("individual")]), _vm._v(" database has a size restriction, the number of databases\nin an instance is not limited any more than other versions. This leaves room to\npartition data horizontally or vertically into several databases.")]), _vm._v(" "), _c('h4', {
    attrs: {
      "id": "horizontal-partitioning"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#horizontal-partitioning"
    }
  }, [_vm._v("#")]), _vm._v(" Horizontal Partitioning")]), _vm._v(" "), _c('p', [_vm._v("Horizontal partitioning refers to slicing data by putting rows into different tables (and databases, in this case). The tables in each database will be the same, but contain different\nsets of data based on a logical grouping, like location.")]), _vm._v(" "), _c('p', [_vm._v("If a database contains data for all customers across the United States, but the data exceeds\n10GB, an option would be to create databases for regions, i.e. Northwest, Northeast, etc. and\nsplit the data across them.")]), _vm._v(" "), _c('p', [_vm._v("The downside to this approach is that there are now N number of identical databases to manage when it comes to upgrades, maintenance, and backups.")]), _vm._v(" "), _c('h4', {
    attrs: {
      "id": "vertical-partitioning"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#vertical-partitioning"
    }
  }, [_vm._v("#")]), _vm._v(" Vertical Partitioning")]), _vm._v(" "), _c('p', [_vm._v("In this context, vertical partitioning can be used to describe storing different columns and tables in different databases, as opposed to storing rows in different databases. By utilizing cross-database queries, tables in different databases can be queried and manipulated in almost the exact same way as if they were in the same database.")]), _vm._v(" "), _c('p', [_vm._v("If an application had a lot of static reference data, i.e. data points on every city and town in the US, those tables could be stored in another database to separate the storage costs\nof that data from interfering with the actual customer data in the primary database.")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "normalize-normalize-normalize"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#normalize-normalize-normalize"
    }
  }, [_vm._v("#")]), _vm._v(" Normalize, Normalize, Normalize")]), _vm._v(" "), _c('p', [_c('a', {
    attrs: {
      "href": "https://en.wikipedia.org/wiki/Database_normalization",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("Normalization"), _c('OutboundLink')], 1), _vm._v(" is a huge topic, but it isn't often talked about today in terms of storage benefits, due to the low cost of disk space.")]), _vm._v(" "), _c('p', [_vm._v("Proper normalization data can greatly reduce the redundancy of data. Often the most redundant data are of the string variety and thus can have a significant impact on the overall size of a database when not properly normalized. Aiming for the "), _c('a', {
    attrs: {
      "href": "https://en.wikipedia.org/wiki/Third_normal_form",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("third normal form"), _c('OutboundLink')], 1), _vm._v(" is a reasonable goal to achieve most of the size-related benefits that normal forms can offer.")]), _vm._v(" "), _c('p', [_vm._v("Since there are always exceptions as to when normalized data or denormalized data is most beneficial, it will depend on the case at hand, but defaulting to normalizing data is generally a good strategy.")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _c('ClientOnly', [_c('disqus-component'), _vm._v(" "), _c('userway-component')], 1)], 1);
};
var staticRenderFns = [];


/***/ }),

/***/ "./sql-server-express-database-size-limit.md":
/*!***************************************************!*\
  !*** ./sql-server-express-database-size-limit.md ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sql_server_express_database_size_limit_md_vue_type_template_id_6a90abd6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sql-server-express-database-size-limit.md?vue&type=template&id=6a90abd6 */ "./sql-server-express-database-size-limit.md?vue&type=template&id=6a90abd6");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _sql_server_express_database_size_limit_md_vue_type_template_id_6a90abd6__WEBPACK_IMPORTED_MODULE_0__["render"],
  _sql_server_express_database_size_limit_md_vue_type_template_id_6a90abd6__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./sql-server-express-database-size-limit.md?vue&type=template&id=6a90abd6":
/*!*********************************************************************************!*\
  !*** ./sql-server-express-database-size-limit.md?vue&type=template&id=6a90abd6 ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_d33d2cce_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_3_0_node_modules_babel_loader_lib_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_node_modules_vuepress_markdown_loader_index_js_ref_1_2_sql_server_express_database_size_limit_md_vue_type_template_id_6a90abd6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"d33d2cce-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/babel-loader/lib??ref--3-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??ref--1-1!./node_modules/@vuepress/markdown-loader??ref--1-2!./sql-server-express-database-size-limit.md?vue&type=template&id=6a90abd6 */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"d33d2cce-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@vuepress/markdown-loader/index.js?!./sql-server-express-database-size-limit.md?vue&type=template&id=6a90abd6");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_d33d2cce_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_3_0_node_modules_babel_loader_lib_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_node_modules_vuepress_markdown_loader_index_js_ref_1_2_sql_server_express_database_size_limit_md_vue_type_template_id_6a90abd6__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_d33d2cce_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_3_0_node_modules_babel_loader_lib_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_node_modules_vuepress_markdown_loader_index_js_ref_1_2_sql_server_express_database_size_limit_md_vue_type_template_id_6a90abd6__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=27.0c58409c.js.map