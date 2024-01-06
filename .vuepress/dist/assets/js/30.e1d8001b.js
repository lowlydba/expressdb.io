(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"d33d2cce-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@vuepress/markdown-loader/index.js?!./sql-server-express-maintenance.md?vue&type=template&id=80e0c64c":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"d33d2cce-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/babel-loader/lib??ref--3-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??ref--1-1!./node_modules/@vuepress/markdown-loader??ref--1-2!./sql-server-express-maintenance.md?vue&type=template&id=80e0c64c ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      "id": "what-goes-into-a-maintenance-plan"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#what-goes-into-a-maintenance-plan"
    }
  }, [_vm._v("#")]), _vm._v(" What goes into a Maintenance Plan?")]), _vm._v(" "), _c('p', [_vm._v("Unlike many other kinds of technology which generally stay static unless a\nchange is intentionally applied, databases are always evolving and changing\nlike a living being. And like all things that are alive, they need care and\nmaintenance to stay productive and healthy.")]), _vm._v(" "), _c('p', [_vm._v("Even for small databases, like those mandated by Express, database maintenance is a\nkey part of continuous performance and the proactive reduction of system errors. A standard\nmaintenance plan will address areas like:")]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("Index rebuilds / reorganizations")]), _vm._v(" "), _c('li', [_vm._v("Updating statistics")]), _vm._v(" "), _c('li', [_vm._v("Backing up the database")]), _vm._v(" "), _c('li', [_vm._v("Cleaning old backup files")]), _vm._v(" "), _c('li', [_vm._v("Purging unnecessary data\n"), _c('ul', [_c('li', [_vm._v("System Data")]), _vm._v(" "), _c('li', [_vm._v("Application Data")])])])]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "best-maintenance-plan-practices-for-sql-server-express"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#best-maintenance-plan-practices-for-sql-server-express"
    }
  }, [_vm._v("#")]), _vm._v(" Best Maintenance Plan Practices for SQL Server Express")]), _vm._v(" "), _c('p', [_vm._v("For the most part, maintenance on database of 10GB or less is straightforward. Most\nsystems are able to do index maintenance, update statistics, and purge old data extremely\nquickly on a data set of this size. The size restriction removes many potentially complicated\nscenarios where jobs must be run on individual partitions, by filegroups, or staggered across\ndifferent days of the week.")]), _vm._v(" "), _c('p', [_vm._v("Since SQL Server Express doesn't have SQL Agent, and thus doesn't have the GUI-focused\nmaintenance plan feature at all, maintenance must be achieved using T-SQL. Luckily, most seasoned\nDBAs agree that T-SQL based maintenance plans are better than their GUI counterparts,\nso general SQL Server best practices are applicable to Express.")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "ola-s-maintenance-scripts"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#ola-s-maintenance-scripts"
    }
  }, [_vm._v("#")]), _vm._v(" Ola's Maintenance Scripts")]), _vm._v(" "), _c('p', [_vm._v("Just as "), _c('a', {
    attrs: {
      "href": "https://ola.hallengren.com/sql-server-backup.html",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("Ola Hallengrens free scripts"), _c('OutboundLink')], 1), _vm._v(" are highly recommended for "), _c('RouterLink', {
    attrs: {
      "to": "/sql-server-express-backups.html"
    }
  }, [_vm._v("SQL Express backups")]), _vm._v(", the same goes for his index and statistic scripts which help to make managing both areas extremely easy and customizable.")], 1), _vm._v(" "), _c('p', [_vm._v("By default, Ola's scripts use the following settings:")]), _vm._v(" "), _c('div', {
    staticClass: "language-sql line-numbers-mode"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-sql"
    }
  }, [_c('code', [_c('span', {
    pre: true,
    attrs: {
      "class": "token variable"
    }
  }, [_vm._v("@FragmentationMedium")]), _vm._v(" nvarchar"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("max"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'INDEX_REORGANIZE,INDEX_REBUILD_ONLINE,INDEX_REBUILD_OFFLINE'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token variable"
    }
  }, [_vm._v("@FragmentationHigh")]), _vm._v(" nvarchar"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("max"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'INDEX_REBUILD_ONLINE,INDEX_REBUILD_OFFLINE'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token variable"
    }
  }, [_vm._v("@FragmentationLevel1")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("int")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("5")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token variable"
    }
  }, [_vm._v("@FragmentationLevel2")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("int")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("30")]), _vm._v("\n")])]), _vm._v(" "), _c('div', {
    staticClass: "line-numbers-wrapper"
  }, [_c('span', {
    staticClass: "line-number"
  }, [_vm._v("1")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("2")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("3")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("4")]), _c('br')])]), _c('p', [_vm._v("These translate to nothing being done to an index that is less than 5% fragmented;\nan attempt to reorganize, rebuild online, and rebuild offline (in that order) indexes fragmented more\nthan 5% but less than 30%; an attempt to rebuild online and rebuild offline (in that order)\nif fragmentation is greater than 30%. Subsequent maintenance actions are only tried if the\none before is unavailable or not supported on an index. For SQL Server Express, online index rebuilds\nare not available, so this option will always be skipped if not removed.")]), _vm._v(" "), _c('p', [_vm._v("These numbers are based off of Microsoft's BOL article "), _c('a', {
    attrs: {
      "href": "https://docs.microsoft.com/en-us/sql/relational-databases/indexes/reorganize-and-rebuild-indexes",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("Reorganize and Rebuild Indexes"), _c('OutboundLink')], 1), _vm._v(". Though that article may "), _c('em', [_vm._v("look")]), _vm._v(" new and shiny, most of its contents are from a many years ago and most aspects (like fragmentation thresholds) have never been updated. With that in mind, some higher thresholds than the default are not only acceptable, but encouraged.")]), _vm._v(" "), _c('p', [_vm._v("A more modern take is setting the first fragmentation level to 30% and the second level to 80%. Some even\nprefer to go higher (see further reading at the bottom). Adjusting Ola's defaults, by taking into consideration the lack of an online rebuild option and taking advantage of a few extra settings results in the following recommended script:")]), _vm._v(" "), _c('div', {
    staticClass: "language-sql line-numbers-mode"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-sql"
    }
  }, [_c('code', [_c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("EXECUTE")]), _vm._v(" dbo"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("IndexOptimize\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token variable"
    }
  }, [_vm._v("@Databases")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'USER_DATABASES'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token variable"
    }
  }, [_vm._v("@FragmentationLow")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token boolean"
    }
  }, [_vm._v("NULL")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token variable"
    }
  }, [_vm._v("@FragmentationMedium")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'INDEX_REORGANIZE,INDEX_REBUILD_OFFLINE'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token variable"
    }
  }, [_vm._v("@FragmentationHigh")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'INDEX_REBUILD_OFFLINE'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token variable"
    }
  }, [_vm._v("@FragmentationLevel1")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("30")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token variable"
    }
  }, [_vm._v("@FragmentationLevel2")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("80")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token variable"
    }
  }, [_vm._v("@SortInTempdb")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'Y'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token variable"
    }
  }, [_vm._v("@FillFactor")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("100")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token variable"
    }
  }, [_vm._v("@UpdateStatistics")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'Y'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token variable"
    }
  }, [_vm._v("@OnlyModifiedStatistics")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'Y'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token variable"
    }
  }, [_vm._v("@Indexes")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'ALL_INDEXES'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token variable"
    }
  }, [_vm._v("@LogToTable")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'Y'")]), _vm._v("\n")])]), _vm._v(" "), _c('div', {
    staticClass: "line-numbers-wrapper"
  }, [_c('span', {
    staticClass: "line-number"
  }, [_vm._v("1")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("2")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("3")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("4")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("5")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("6")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("7")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("8")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("9")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("10")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("11")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("12")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("13")]), _c('br')])]), _c('h4', {
    attrs: {
      "id": "fragmentation"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#fragmentation"
    }
  }, [_vm._v("#")]), _vm._v(" Fragmentation")]), _vm._v(" "), _c('p', [_vm._v("Since taking an index offline for a rebuild isn't ideal, 80% makes sure that scenario isn't\noccurring too often.")]), _vm._v(" "), _c('h4', {
    attrs: {
      "id": "fill-factor"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#fill-factor"
    }
  }, [_vm._v("#")]), _vm._v(" Fill Factor")]), _vm._v(" "), _c('p', [_vm._v("While normally a fill factor might need to be tweaked, it is\nprobably safe to keep at 100% (no padding in the index) to make sure that the database\nfiles aren't hitting the 10GB limit earlier than is absolutely necessary.")]), _vm._v(" "), _c('h4', {
    attrs: {
      "id": "update-statistics"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#update-statistics"
    }
  }, [_vm._v("#")]), _vm._v(" Update statistics")]), _vm._v(" "), _c('p', [_vm._v("One of the great features of Ola's script is that it will update statistics after it\ndoes the index rebuilds, since an index maintenance operation will automatically\nupdate statistics in use by the index. This prevents duplication of work and\nunnecessary transactions. Using the "), _c('code', [_vm._v("@OnlyModifiedStatistics")]), _vm._v(" flag further helps further by checking if a table's data has been altered since the last time\nstatistics were updated. If the table hasn't changed, then there is no reason to change\nthe statistics and it is skipped. This is especially helpful for archive tables or enum tables that\nhardly or ever change, but may take up significant time to do statistics samplings on.")]), _vm._v(" "), _c('h4', {
    attrs: {
      "id": "logging"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#logging"
    }
  }, [_vm._v("#")]), _vm._v(" Logging")]), _vm._v(" "), _c('p', [_vm._v("Logging to the built-in table is extremely useful when tracking down a failed index job or\nto analyze a growing trend in job runtime. It doesn't cost much to log each action,\nbut is key when hunting down problems with maintenance jobs.")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "other-maintenance-tasks"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#other-maintenance-tasks"
    }
  }, [_vm._v("#")]), _vm._v(" Other Maintenance Tasks")]), _vm._v(" "), _c('p', [_vm._v("Backup pruning is conveniently handled by settings within Ola's script, so that part of\nmaintenance can be bundled right into the backup commands themselves (see the "), _c('RouterLink', {
    attrs: {
      "to": "/best-practices/sql-server-express-backups/"
    }
  }, [_vm._v("Express Backup")]), _vm._v(") article for details.")], 1), _vm._v(" "), _c('p', [_vm._v("Data pruning is highly specific to an individual database's needs, so usually needs to be\ndeveloper a la carte. If you need help figuring this out for your databases, feel free to\nreach out via the "), _c('RouterLink', {
    attrs: {
      "to": "/author/contact/"
    }
  }, [_vm._v("contact page")]), _vm._v(" to get more one-on-one help.")], 1), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "further-reading"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#further-reading"
    }
  }, [_vm._v("#")]), _vm._v(" Further Reading")]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("Brent Ozar's "), _c('a', {
    attrs: {
      "href": "https://www.brentozar.com/archive/2014/12/tweaking-defaults-ola-hallengrens-maintenance-scripts/",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("Tweaking the Defaults for Ola Hallengren’s Maintenance Scripts"), _c('OutboundLink')], 1)]), _vm._v(" "), _c('li', [_vm._v("RedGate's "), _c('a', {
    attrs: {
      "href": "https://www.red-gate.com/simple-talk/sql/database-administration/automate-and-improve-your-database-maintenance-using-ola-hallengrens-free-script/",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("Automate and Improve Your Database Maintennace Using Ola Hallengren's Free Script"), _c('OutboundLink')], 1)])]), _vm._v(" "), _c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _c('ClientOnly', [_c('disqus-component'), _vm._v(" "), _c('userway-component')], 1)], 1);
};
var staticRenderFns = [];


/***/ }),

/***/ "./sql-server-express-maintenance.md":
/*!*******************************************!*\
  !*** ./sql-server-express-maintenance.md ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sql_server_express_maintenance_md_vue_type_template_id_80e0c64c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sql-server-express-maintenance.md?vue&type=template&id=80e0c64c */ "./sql-server-express-maintenance.md?vue&type=template&id=80e0c64c");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _sql_server_express_maintenance_md_vue_type_template_id_80e0c64c__WEBPACK_IMPORTED_MODULE_0__["render"],
  _sql_server_express_maintenance_md_vue_type_template_id_80e0c64c__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./sql-server-express-maintenance.md?vue&type=template&id=80e0c64c":
/*!*************************************************************************!*\
  !*** ./sql-server-express-maintenance.md?vue&type=template&id=80e0c64c ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_d33d2cce_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_3_0_node_modules_babel_loader_lib_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_node_modules_vuepress_markdown_loader_index_js_ref_1_2_sql_server_express_maintenance_md_vue_type_template_id_80e0c64c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"d33d2cce-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/babel-loader/lib??ref--3-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??ref--1-1!./node_modules/@vuepress/markdown-loader??ref--1-2!./sql-server-express-maintenance.md?vue&type=template&id=80e0c64c */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"d33d2cce-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@vuepress/markdown-loader/index.js?!./sql-server-express-maintenance.md?vue&type=template&id=80e0c64c");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_d33d2cce_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_3_0_node_modules_babel_loader_lib_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_node_modules_vuepress_markdown_loader_index_js_ref_1_2_sql_server_express_maintenance_md_vue_type_template_id_80e0c64c__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_d33d2cce_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_3_0_node_modules_babel_loader_lib_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_node_modules_vuepress_markdown_loader_index_js_ref_1_2_sql_server_express_maintenance_md_vue_type_template_id_80e0c64c__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=30.e1d8001b.js.map