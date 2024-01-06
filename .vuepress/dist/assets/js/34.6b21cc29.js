(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[34],{

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"d33d2cce-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@vuepress/markdown-loader/index.js?!./sql-server-express-unattended-install.md?vue&type=template&id=41d5e446":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"d33d2cce-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/babel-loader/lib??ref--3-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??ref--1-1!./node_modules/@vuepress/markdown-loader??ref--1-2!./sql-server-express-unattended-install.md?vue&type=template&id=41d5e446 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      "id": "how-does-unattended-install-work"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#how-does-unattended-install-work"
    }
  }, [_vm._v("#")]), _vm._v(" How Does Unattended Install Work")]), _vm._v(" "), _c('p', [_vm._v("Automating the installation of SQL Server Express, also known as an\nunattended install, is done by launching the setup process via the command\nline and passing pre-determined parameters so that no human interaction\nis needed to complete the setup. This is ideal for any situation where\nmany servers must be provisioned and a requirement when bundling\nSQL Server Express with other software using it as a database.")]), _vm._v(" "), _c('p', [_vm._v("The configuration for the install can be input directly as parameter to\nthe setup file:")]), _vm._v(" "), _c('div', {
    staticClass: "language-batch line-numbers-mode"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-batch"
    }
  }, [_c('code', [_c('span', {
    pre: true,
    attrs: {
      "class": "token command"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("Setup")]), _vm._v(".exe /ACTION="), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"Install\"")])]), _vm._v("\n")])]), _vm._v(" "), _c('div', {
    staticClass: "line-numbers-wrapper"
  }, [_c('span', {
    staticClass: "line-number"
  }, [_vm._v("1")]), _c('br')])]), _c('p', [_vm._v("or passed in via a configuration file:")]), _vm._v(" "), _c('div', {
    staticClass: "language-batch line-numbers-mode"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-batch"
    }
  }, [_c('code', [_c('span', {
    pre: true,
    attrs: {
      "class": "token command"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("Setup")]), _vm._v(".exe /ConfigurationFile=MyConfigurationFile.INI  ")]), _vm._v("\n")])]), _vm._v(" "), _c('div', {
    staticClass: "line-numbers-wrapper"
  }, [_c('span', {
    staticClass: "line-number"
  }, [_vm._v("1")]), _c('br')])]), _c('p', [_vm._v("Using a configuration file makes it easy to store, maintain, and customize the various parameters that may change based on SQL Server version, install type, and target server. For this reason, the below configurations will be provided as template files that can be tailored to any additional needs.")]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "unattended-installs-for-sql-server-express"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#unattended-installs-for-sql-server-express"
    }
  }, [_vm._v("#")]), _vm._v(" Unattended Installs for SQL Server Express")]), _vm._v(" "), _c('p', [_vm._v("Installing SQL Server Express from a configuration file has a few differences when\ncompared to other versions like Standard and Enterprise. Some of the parameters\nbehave slightly differently, do not apply, and come with different default values.\nThese examples take those factors into account by having all mandatory fields\npresent and optional settings commented out to provide a generic template that can\nbe customized as needed.")]), _vm._v(" "), _c('ul', [_c('li', [_c('a', {
    attrs: {
      "href": "#_2008-2012-2014-unattended-install"
    }
  }, [_vm._v("SQL Server Express 2008, 2012, 2014 Unattended Install")]), _vm._v(" (Windows)")]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#_2016-2017-2019-2022-unattended-install"
    }
  }, [_vm._v("SQL Server Express 2016, 2017, 2019, 2022 Unattended Install")]), _vm._v(" (Windows)")]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#_2017-2019-2022-unattended-install-linux"
    }
  }, [_vm._v("SQL Server Express 2017, 2019, 2022 Unattended Install")]), _vm._v(" (Linux)")])]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "_2008-2012-2014-unattended-install"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_2008-2012-2014-unattended-install"
    }
  }, [_vm._v("#")]), _vm._v(" 2008, 2012, 2014 Unattended Install")]), _vm._v(" "), _c('p', [_vm._v("The configuration parameters change very little over the years, mostly with\nnew options being added and very few being modified or removed. Luckily, this\nmeans that the same configuration file can often be used for multiple version\ninstalls, as long as the general requirements of each install remain the same.")]), _vm._v(" "), _c('p', [_vm._v("The below sample configuration file focuses solely on the database engine installation\nand does not include other features to keep the configuration as generic as possible.")]), _vm._v(" "), _c('div', {
    staticClass: "language-batch line-numbers-mode"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-batch"
    }
  }, [_c('code', [_vm._v("; Microsoft SQL Server Express 2008, 2012, 2014 Configuration Template\n; Provided by Express Databases, LLC\n; https://expressdb.io\n[OPTIONS]  \n; Specifies a Setup work flow, like INSTALL, UNINSTALL, or UPGRADE.  \n; This is a required parameter.  \n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token command"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("ACTION")]), _vm._v("="), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"Install\"")]), _vm._v("  ")]), _vm._v("\n\n; Specifies features to install, uninstall, or upgrade.  \n; The list of top-level features include SQL, AS, RS, IS, and Tools.  \n; The SQL feature will install the database engine, replication, and full-text.  \n; The Tools feature will install Management Tools, Books online,\n; SQL Server Data Tools, and other shared components.  \n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token command"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("FEATURES")]), _vm._v("=SQL,Tools  ")]), _vm._v("\n\n; Accept license terms\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token command"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("IACCEPTSQLSERVERLICENSETERMS")]), _vm._v("="), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"True\"")])]), _vm._v("\n\n; Install English version if other langauge packs are available\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token command"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("ENU")]), _vm._v("="), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"True\"")])]), _vm._v("\n\n; Don"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("'")]), _vm._v("t display any install UI\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token command"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("QUIET")]), _vm._v("="), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"True\"")])]), _vm._v("\n\n; Show progress in command line\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token command"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("INDICATEPROGRESS")]), _vm._v("="), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"True\"")])]), _vm._v("\n\n; Define an Instance name\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token command"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("INSTANCENAME")]), _vm._v("="), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"SQLEXPRESS\"")])]), _vm._v("\n\n; Specify SQL Service account\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token command"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("SQLSVCACCOUNT")]), _vm._v("="), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"SQLServiceAccount\"")])]), _vm._v("\n\n; Specify SQL Service Account pwd\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token command"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("SQLSVCPASSWORD")]), _vm._v("="), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"ChangeMe123\"")])]), _vm._v("\n\n; Enable instant file initialization for the service account  \n; Enabling this is a best practice\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token command"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("SQLSVCINSTANTFILEINIT")]), _vm._v("="), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"True\"")])]), _vm._v("\n\n; OPTIONAL SETTINGS\n\n; Specify non-default data file directory\n; INSTALLSQLDATADIR=\"\"\n\n; Specify non-default user database data file directory\n; SQLUSERDBDIR=\"\"\n\n; Specify non-default user database log file directory\n; SQLUSERDBLOGDIR=\"\"\n\n; Specify non-default directory for tempdb files\n; SQLTEMPDBDIR=\"\"\n\n; Specify non-default directory for tempdb log files\n; SQLTEMPDBLOGDIR=\"\"\n\n; Specify non-default installation directory\n; INSTALLSHAREDDIR=\"\"\n\n; Specify non-default backup directory\n; SQLBACKUPDIR=\"\"\n\n; Specify non-default installation directory for 32-bit components  \n; INSTALLSHAREDWOWDIR=\"\"\n\n; Specify non-default installation directory for instance components\n; INSTANCEDIR=\"\"\n\n; Enable run-as credentials for SQL Server Express\n; ENABLERANU=\"True\"\n\n; Set non-default, Windows Authentication security mode\n; SECURITYMODE=\"SQL\"\n\n; Set the default SA Password, required for SECURITYMODE=SQL\n; SAPWD = \"MyStrongSAPwd\"\n\n; Specify non-default collation\n; SQLCOLLATION=\"\"\n\n; Specify startup mode for SQL Server: Automatic, Disabled, Manual\n; SQLSVCSTARTUPTYPE=\"Automatic\"\n\n; Specify additional SA users - current user is SA by default\n; SQLSYSADMINACCOUNTS=\"\"\n")])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("13")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("14")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("15")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("16")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("17")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("18")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("19")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("20")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("21")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("22")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("23")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("24")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("25")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("26")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("27")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("28")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("29")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("30")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("31")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("32")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("33")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("34")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("35")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("36")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("37")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("38")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("39")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("40")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("41")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("42")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("43")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("44")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("45")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("46")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("47")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("48")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("49")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("50")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("51")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("52")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("53")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("54")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("55")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("56")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("57")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("58")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("59")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("60")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("61")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("62")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("63")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("64")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("65")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("66")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("67")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("68")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("69")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("70")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("71")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("72")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("73")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("74")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("75")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("76")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("77")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("78")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("79")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("80")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("81")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("82")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("83")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("84")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("85")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("86")]), _c('br')])]), _c('h2', {
    attrs: {
      "id": "_2016-2017-2019-2022-unattended-install"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_2016-2017-2019-2022-unattended-install"
    }
  }, [_vm._v("#")]), _vm._v(" 2016, 2017, 2019, 2022 Unattended Install")]), _vm._v(" "), _c('p', [_vm._v("The newest versions of SQL Server Express have a configuration file that is\nvery similar to prior versions, with the addition of two new optional parameters:")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "sqltempdbfilesize"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#sqltempdbfilesize"
    }
  }, [_vm._v("#")]), _vm._v(" SQLTEMPDBFILESIZE")]), _vm._v(" "), _c('p', [_vm._v("This parameter allows the default size of all new tempdb data files to be specified\nat the time of installation. While the default for SQL Server Express is a paltry 4MB and\nall other versions are set to 8MB, customizing this value reduces the number of\npost-install steps required since most servers will require more than a few MB of\nspace for the tempdb.")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "sqltempdblogfilesize"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#sqltempdblogfilesize"
    }
  }, [_vm._v("#")]), _vm._v(" SQLTEMPDBLOGFILESIZE")]), _vm._v(" "), _c('p', [_vm._v("Similar to the above, the size of the tempdb log can also now be specified during\nthe installation process. The defaults of 4MB and 8MB are the same, so most people\nwill want to specify a larger value.")]), _vm._v(" "), _c('p', [_vm._v("The below sample configuration file focuses solely on the database engine installation\nand does not include other features to keep the configuration as generic as possible.")]), _vm._v(" "), _c('div', {
    staticClass: "language-batch line-numbers-mode"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-batch"
    }
  }, [_c('code', [_vm._v("; Microsoft SQL Server Express 2016/2017 Configuration Template\n; Provided by Express Databases, LLC\n; https://expressdb.io\n[OPTIONS]  \n; Specifies a Setup work flow, like INSTALL, UNINSTALL, or UPGRADE.  \n; This is a required parameter.  \n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token command"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("ACTION")]), _vm._v("="), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"Install\"")]), _vm._v("  ")]), _vm._v("\n\n; Specifies features to install, uninstall, or upgrade.  \n; The list of top-level features include SQL, AS, RS, IS, and Tools.  \n; The SQL feature will install the database engine, replication, and full-text.  \n; The Tools feature will install Management Tools, Books online,\n; SQL Server Data Tools, and other shared components.  \n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token command"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("FEATURES")]), _vm._v("=SQL,Tools  ")]), _vm._v("\n\n; Accept license terms\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token command"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("IACCEPTSQLSERVERLICENSETERMS")]), _vm._v("="), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"True\"")])]), _vm._v("\n\n; Install English version if other langauge packs are available\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token command"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("ENU")]), _vm._v("="), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"True\"")])]), _vm._v("\n\n; Don"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("'")]), _vm._v("t display any install UI\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token command"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("QUIET")]), _vm._v("="), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"True\"")])]), _vm._v("\n\n; Show progress in command line\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token command"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("INDICATEPROGRESS")]), _vm._v("="), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"True\"")])]), _vm._v("\n\n; Define an Instance name\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token command"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("INSTANCENAME")]), _vm._v("="), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"SQLEXPRESS\"")])]), _vm._v("\n\n; Specify SQL Service account\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token command"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("SQLSVCACCOUNT")]), _vm._v("="), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"SQLServiceAccount\"")])]), _vm._v("\n\n; Specify SQL Service Account pwd\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token command"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("SQLSVCPASSWORD")]), _vm._v("="), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"ChangeMe123\"")])]), _vm._v("\n\n; Enable instant file initialization for the service account - optional\n; Enabling this is a best practice\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token command"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("SQLSVCINSTANTFILEINIT")]), _vm._v("="), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"True\"")])]), _vm._v("\n\n; OPTIONAL SETTINGS\n\n; Specify non-default data file directory\n; INSTALLSQLDATADIR=\"\"\n\n; Specify non-default user database data file directory\n; SQLUSERDBDIR=\"\"\n\n; Specify non-default user database log file directory\n; SQLUSERDBLOGDIR=\"\"\n\n; Specify non-default directory for tempdb files\n; SQLTEMPDBDIR=\"\"\n\n; Specify non-default directory for tempdb log files\n; SQLTEMPDBLOGDIR=\"\"\n\n; Specifies initial file size of each tempdb data file. Default for SQL Server Express is 4MB, others are 8MB\n; SQLTEMPDBFILESIZE=4\n\n; Specifies initial file size the tempdb log file. Default for SQL Server Express is 4MB, others are 8MB\n; SQLTEMPDBLOGFILESIZE=4\n\n; Specify non-default installation directory\n; INSTALLSHAREDDIR=\"\"\n\n; Specify non-default backup directory\n; SQLBACKUPDIR=\"\"\n\n; Specify non-default installation directory for 32-bit components  \n; INSTALLSHAREDWOWDIR=\"\"\n\n; Specify non-default installation directory for instance components\n; INSTANCEDIR=\"\"\n\n; Enable run-as credentials for SQL Server Express\n; ENABLERANU=\"True\"\n\n; Set non-default, Win Authentication security mode\n; SECURITYMODE=\"SQL\"\n\n; Set the default SA Password - required for SECURITYMODE=SQL\n; SAPWD = \"MyStrongSAPwd\"\n\n; Specify non-default collation\n; SQLCOLLATION=\"\"\n\n; Specify startup mode for SQL Server: Automatic, Disabled, Manual\n; SQLSVCSTARTUPTYPE=\"Automatic\"\n\n; Specify additional SA users - current user is SA by default\n; SQLSYSADMINACCOUNTS=\"\"\n")])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("13")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("14")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("15")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("16")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("17")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("18")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("19")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("20")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("21")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("22")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("23")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("24")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("25")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("26")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("27")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("28")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("29")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("30")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("31")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("32")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("33")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("34")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("35")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("36")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("37")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("38")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("39")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("40")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("41")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("42")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("43")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("44")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("45")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("46")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("47")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("48")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("49")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("50")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("51")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("52")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("53")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("54")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("55")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("56")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("57")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("58")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("59")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("60")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("61")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("62")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("63")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("64")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("65")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("66")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("67")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("68")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("69")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("70")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("71")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("72")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("73")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("74")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("75")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("76")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("77")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("78")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("79")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("80")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("81")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("82")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("83")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("84")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("85")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("86")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("87")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("88")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("89")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("90")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("91")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("92")]), _c('br')])]), _c('h2', {
    attrs: {
      "id": "_2017-2019-2022-unattended-install-linux"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_2017-2019-2022-unattended-install-linux"
    }
  }, [_vm._v("#")]), _vm._v(" 2017, 2019, 2022 Unattended Install Linux")]), _vm._v(" "), _c('p', [_vm._v("Microsoft has done an excellent job on documenting an unattended SQL Server installation for Ubuntu, SUSE, and Red Hat.")]), _vm._v(" "), _c('ul', [_c('li', [_c('a', {
    attrs: {
      "href": "https://docs.microsoft.com/en-us/sql/linux/sample-unattended-install-redhat?view=sql-server-ver15",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("Unattended SQL Server install for Redhat"), _c('OutboundLink')], 1)]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "https://docs.microsoft.com/en-us/sql/linux/sample-unattended-install-suse?view=sql-server-ver15",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("Unattended SQL Server install for SUSE"), _c('OutboundLink')], 1)]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "https://docs.microsoft.com/en-us/sql/linux/sample-unattended-install-ubuntu?view=sql-server-ver15",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("Unattended SQL Server install for Ubuntu"), _c('OutboundLink')], 1)])]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "further-reading"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#further-reading"
    }
  }, [_vm._v("#")]), _vm._v(" Further Reading")]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("Microsoft's documentation "), _c('a', {
    attrs: {
      "href": "https://docs.microsoft.com/en-us/sql/database-engine/install-windows/install-sql-server-from-the-command-prompt?view=sql-server-2017",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("Install SQL Server from the Command Line"), _c('OutboundLink')], 1)]), _vm._v(" "), _c('li', [_vm._v("Microsoft's "), _c('a', {
    attrs: {
      "href": "https://msdn.microsoft.com/library/dd239405(v=sql.120).aspx",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("Install SQL Server 2014 using a Configuration File"), _c('OutboundLink')], 1)]), _vm._v(" "), _c('li', [_vm._v("SQL CAT Team's "), _c('a', {
    attrs: {
      "href": "https://blogs.msdn.microsoft.com/sqlcat/2017/10/03/unattended-install-and-configuration-for-sql-server-2017-on-linux/",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("Unattended install and configuration for SQL Server 2017 on Linux"), _c('OutboundLink')], 1)])]), _vm._v(" "), _c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _c('ClientOnly', [_c('disqus-component'), _vm._v(" "), _c('userway-component')], 1)], 1);
};
var staticRenderFns = [];


/***/ }),

/***/ "./sql-server-express-unattended-install.md":
/*!**************************************************!*\
  !*** ./sql-server-express-unattended-install.md ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sql_server_express_unattended_install_md_vue_type_template_id_41d5e446__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sql-server-express-unattended-install.md?vue&type=template&id=41d5e446 */ "./sql-server-express-unattended-install.md?vue&type=template&id=41d5e446");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _sql_server_express_unattended_install_md_vue_type_template_id_41d5e446__WEBPACK_IMPORTED_MODULE_0__["render"],
  _sql_server_express_unattended_install_md_vue_type_template_id_41d5e446__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./sql-server-express-unattended-install.md?vue&type=template&id=41d5e446":
/*!********************************************************************************!*\
  !*** ./sql-server-express-unattended-install.md?vue&type=template&id=41d5e446 ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_d33d2cce_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_3_0_node_modules_babel_loader_lib_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_node_modules_vuepress_markdown_loader_index_js_ref_1_2_sql_server_express_unattended_install_md_vue_type_template_id_41d5e446__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"d33d2cce-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/babel-loader/lib??ref--3-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??ref--1-1!./node_modules/@vuepress/markdown-loader??ref--1-2!./sql-server-express-unattended-install.md?vue&type=template&id=41d5e446 */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"d33d2cce-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@vuepress/markdown-loader/index.js?!./sql-server-express-unattended-install.md?vue&type=template&id=41d5e446");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_d33d2cce_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_3_0_node_modules_babel_loader_lib_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_node_modules_vuepress_markdown_loader_index_js_ref_1_2_sql_server_express_unattended_install_md_vue_type_template_id_41d5e446__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_d33d2cce_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_3_0_node_modules_babel_loader_lib_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_node_modules_vuepress_markdown_loader_index_js_ref_1_2_sql_server_express_unattended_install_md_vue_type_template_id_41d5e446__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=34.6b21cc29.js.map