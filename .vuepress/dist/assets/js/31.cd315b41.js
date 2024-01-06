(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31],{

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"d33d2cce-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@vuepress/markdown-loader/index.js?!./sql-server-express-replace-sql-agent.md?vue&type=template&id=dc27f29a":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"d33d2cce-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/babel-loader/lib??ref--3-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??ref--1-1!./node_modules/@vuepress/markdown-loader??ref--1-2!./sql-server-express-replace-sql-agent.md?vue&type=template&id=dc27f29a ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      "id": "sql-express-no-agent"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#sql-express-no-agent"
    }
  }, [_vm._v("#")]), _vm._v(" SQL Express = No Agent")]), _vm._v(" "), _c('p', [_vm._v("One of the biggest feature limitations of SQL Server Express is the exclusion of\nthe SQL Agent. Not only does SQL Agent work wonderfully for managing ETL, SSIS,\nand maintenance jobs across one or more servers, but it also functions as a general\njob scheduler. It can execute any PowerShell or command prompt script to take care of\nany number of processes or jobs that may be 100% external to SQL Server.")]), _vm._v(" "), _c('ul', [_c('li', [_c('a', {
    attrs: {
      "href": "#windows"
    }
  }, [_vm._v("Windows")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#linux"
    }
  }, [_vm._v("Linux")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#platform-agnostic"
    }
  }, [_vm._v("Platform Agnostic")])])]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "windows"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#windows"
    }
  }, [_vm._v("#")]), _vm._v(" Windows")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "windows-task-scheduler"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#windows-task-scheduler"
    }
  }, [_vm._v("#")]), _vm._v(" Windows Task Scheduler")]), _vm._v(" "), _c('p', [_vm._v("Without a SQL Agent, the default option for "), _c('RouterLink', {
    attrs: {
      "to": "/sql-server-express-backups.html"
    }
  }, [_vm._v("managing backups")]), _vm._v(" and "), _c('RouterLink', {
    attrs: {
      "to": "/sql-server-express-maintenance.html"
    }
  }, [_vm._v("maintenance scripts")]), _vm._v(" on SQL Server Express is not an option. Luckily, one of the next best alternatives is free, included in Windows,\nand takes very little time to configure. Enter Windows Task Scheduler!")], 1), _vm._v(" "), _c('p', [_vm._v("To utilize the task scheduler, a task must be created that will execute a batch script containing the code to run on the SQL Express Instance. In this example, it will be a maintenance job\nthat will be run weekly to ensure indexes are defragmented on user databases. The\nsettings for the maintenance job will be copied directly from Ola's scripts to replicate\nthe parameters that are used to create a job when the SQL Agent is available.")]), _vm._v(" "), _c('ul', [_c('li', [_c('a', {
    attrs: {
      "href": "#task-scheduler-gui"
    }
  }, [_vm._v("Creating a Task via GUI")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#task-scheduler-command-line"
    }
  }, [_vm._v("Creating a Task via Command Line")])])]), _vm._v(" "), _c('h4', {
    attrs: {
      "id": "task-scheduler-gui"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#task-scheduler-gui"
    }
  }, [_vm._v("#")]), _vm._v(" Task Scheduler GUI")]), _vm._v(" "), _c('ol', [_c('li', [_c('p', [_vm._v("Install "), _c('a', {
    attrs: {
      "href": "https://ola.hallengren.com/sql-server-index-and-statistics-maintenance.html",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("Ola Hallengren's maintenance scripts"), _c('OutboundLink')], 1), _vm._v(" if they haven't been already. "), _c('em', [_vm._v("There may be a message about SQLServerAgent not running when installing these scripts. That is expected since the agent isn't available, but will not affect the installation.")])])]), _vm._v(" "), _c('li', [_c('p', [_vm._v("Create a "), _c('code', [_vm._v(".bat")]), _vm._v(" file for the sqlcmd script that will run the maintenance stored procedure:")]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("sqlcmd")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter attr-name"
    }
  }, [_vm._v("-E")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter attr-name"
    }
  }, [_vm._v("-S")]), _vm._v(" .\\SQLEXPRESS "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter attr-name"
    }
  }, [_vm._v("-d")]), _vm._v(" master "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("^")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter attr-name"
    }
  }, [_vm._v("-Q")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"EXECUTE [dbo].[IndexOptimize] @Databases = 'USER_DATABASES', @LogToTable = 'Y'\"")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter attr-name"
    }
  }, [_vm._v("-b")])]), _vm._v("\n")])]), _vm._v(" "), _c('div', {
    staticClass: "line-numbers-wrapper"
  }, [_c('span', {
    staticClass: "line-number"
  }, [_vm._v("1")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("2")]), _c('br')])])]), _vm._v(" "), _c('li', [_c('p', [_vm._v("Search for \"Task Scheduler\" from the start menu to open the scheduler")])]), _vm._v(" "), _c('li', [_c('p', [_vm._v("Right click \"Task Scheduler\" and select \"Create Basic Task\"")]), _vm._v(" "), _c('p', [_c('img', {
    attrs: {
      "src": "/task_scheduler_1.PNG",
      "alt": "Windows Task Scheduler"
    }
  })])]), _vm._v(" "), _c('li', [_c('p', [_vm._v("Input a name and description for the task.")]), _vm._v(" "), _c('p', [_c('img', {
    attrs: {
      "src": "/task_scheduler_2.PNG",
      "alt": "Windows Task Scheduler"
    }
  })])]), _vm._v(" "), _c('li', [_c('p', [_vm._v("Pick a weekly schedule or one that works based on the database's usage.")]), _vm._v(" "), _c('p', [_c('img', {
    attrs: {
      "src": "/task_scheduler_3.PNG",
      "alt": "Windows Task Scheduler"
    }
  })])]), _vm._v(" "), _c('li', [_c('p', [_vm._v("Choose \"Start a Program\" as the action type.")])]), _vm._v(" "), _c('li', [_c('p', [_vm._v("Insert the "), _c('code', [_vm._v(".bat")]), _vm._v(" file created earlier.")]), _vm._v(" "), _c('p', [_c('img', {
    attrs: {
      "src": "/task_scheduler_4.PNG",
      "alt": "Windows Task Scheduler"
    }
  })])]), _vm._v(" "), _c('li', [_c('p', [_vm._v("Test run the job to ensure it is working as expected.")])])]), _vm._v(" "), _c('p', [_vm._v("Repeat the above steps to handle database backups, DBCC checks, and other database maintenance as needed.")]), _vm._v(" "), _c('h4', {
    attrs: {
      "id": "task-scheduler-command-line"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#task-scheduler-command-line"
    }
  }, [_vm._v("#")]), _vm._v(" Task Scheduler Command Line")]), _vm._v(" "), _c('p', [_vm._v("Using Windows Task Scheduler from the command line involves running "), _c('a', {
    attrs: {
      "href": "https://docs.microsoft.com/en-us/windows/win32/taskschd/schtasks",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("schtasks.exe"), _c('OutboundLink')], 1), _vm._v(" to schedule and configure tasks.")]), _vm._v(" "), _c('ol', [_c('li', [_c('p', [_vm._v("Install "), _c('a', {
    attrs: {
      "href": "https://ola.hallengren.com/sql-server-index-and-statistics-maintenance.html",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("Ola Hallengren's maintenance scripts"), _c('OutboundLink')], 1), _vm._v(" if they haven't been already. "), _c('em', [_vm._v("There may be a message about SQLServerAgent not running when installing these scripts. That is expected since the agent isn't available, but will not affect the installation.")])])]), _vm._v(" "), _c('li', [_c('p', [_vm._v("Create a "), _c('code', [_vm._v(".bat")]), _vm._v(" file for the sqlcmd script that will run the maintenance stored procedure:")]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("sqlcmd")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter attr-name"
    }
  }, [_vm._v("-E")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter attr-name"
    }
  }, [_vm._v("-S")]), _vm._v(" .\\SQLEXPRESS "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter attr-name"
    }
  }, [_vm._v("-d")]), _vm._v(" master "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("^")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter attr-name"
    }
  }, [_vm._v("-Q")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"EXECUTE [dbo].[IndexOptimize] @Databases = 'USER_DATABASES', @LogToTable = 'Y'\"")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter attr-name"
    }
  }, [_vm._v("-b")])]), _vm._v("\n")])]), _vm._v(" "), _c('div', {
    staticClass: "line-numbers-wrapper"
  }, [_c('span', {
    staticClass: "line-number"
  }, [_vm._v("1")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("2")]), _c('br')])])]), _vm._v(" "), _c('li', [_c('p', [_vm._v("Replace the placeholder values and run the script below to create a scheduled task:")])])]), _vm._v(" "), _c('ul', [_c('li', [_c('p', [_c('code', [_vm._v("RU")]), _vm._v(" - Windows user the task will run as.")])]), _vm._v(" "), _c('li', [_c('p', [_c('code', [_vm._v("RP")]), _vm._v(" - Password for the RU.")])]), _vm._v(" "), _c('li', [_c('p', [_c('code', [_vm._v("SC")]), _vm._v(" - Run schedule (MINUTE, HOURLY, DAILY, WEEKLY, MONTHLY, ONCE, ONLOGON, ONIDLE, or ONEVENT.)")])]), _vm._v(" "), _c('li', [_c('p', [_c('code', [_vm._v("TN")]), _vm._v(" - Task Name.")])]), _vm._v(" "), _c('li', [_c('p', [_c('code', [_vm._v("TR")]), _vm._v(" - A value that specifies the path and file name of the task to be run.")])]), _vm._v(" "), _c('li', [_c('p', [_c('code', [_vm._v("MO")]), _vm._v(" - Modifier to add more fine grained control over the schedule:")]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("MINUTE: 1 - 1439 minutes.")]), _vm._v(" "), _c('li', [_vm._v("DAILY: 1 - 365 days.")]), _vm._v(" "), _c('li', [_vm._v("WEEKLY: weeks 1 - 52.")]), _vm._v(" "), _c('li', [_vm._v("MONTHLY: 1 - 12, or FIRST, SECOND, THIRD, FOURTH, LAST, and LASTDAY.")]), _vm._v(" "), _c('li', [_vm._v("ONEVENT: XPath event query string.")])])]), _vm._v(" "), _c('li', [_c('p', [_c('code', [_vm._v("D")]), _vm._v(" - A value that specifies the day of the week to run the task. Valid values are: MON, TUE, WED, THU, FRI, SAT, SUN and for MONTHLY schedules 1 - 31 (days of the month). The wildcard character ( * ) specifies all days.")])]), _vm._v(" "), _c('li', [_c('p', [_c('code', [_vm._v("M")]), _vm._v(" - A value that specifies months of the year. Defaults to the first day of the month. Valid values are: JAN, FEB, MAR, APR, MAY, JUN, JUL, AUG, SEP, OCT, NOV, and DEC. The wildcard character ( * ) specifies all months.")]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("schtasks")]), _vm._v("  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter attr-name"
    }
  }, [_vm._v("/Create")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter attr-name"
    }
  }, [_vm._v("/RU")]), _vm._v(" MyLogin "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter attr-name"
    }
  }, [_vm._v("/RP")]), _vm._v(" MyPassword "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter attr-name"
    }
  }, [_vm._v("/SC")]), _vm._v(" WEEKLY ["), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter attr-name"
    }
  }, [_vm._v("/MO")]), _vm._v(" modifier] ["), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter attr-name"
    }
  }, [_vm._v("/D")]), _vm._v(" day] ["), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter attr-name"
    }
  }, [_vm._v("/M")]), _vm._v(" months] "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("^")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter attr-name"
    }
  }, [_vm._v("/TN")]), _vm._v(" SQLExpressMaintenance "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter attr-name"
    }
  }, [_vm._v("/TR")]), _vm._v(" C:\\express_maintenance.bat")]), _vm._v("\n")])]), _vm._v(" "), _c('div', {
    staticClass: "line-numbers-wrapper"
  }, [_c('span', {
    staticClass: "line-number"
  }, [_vm._v("1")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("2")]), _c('br')])])])]), _vm._v(" "), _c('p', [_vm._v("Repeat the above steps to handle database backups, DBCC checks, and other database maintenance as needed.")]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "linux"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#linux"
    }
  }, [_vm._v("#")]), _vm._v(" Linux")]), _vm._v(" "), _c('p', [_vm._v("For installations of SQL Server Express on Linux, the built-in system chron scheduler can be used to run maintenance and other SQL Server tasks.")]), _vm._v(" "), _c('ol', [_c('li', [_c('p', [_vm._v("Install "), _c('a', {
    attrs: {
      "href": "https://ola.hallengren.com/sql-server-index-and-statistics-maintenance.html",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("Ola Hallengren's maintenance scripts"), _c('OutboundLink')], 1), _vm._v(" if they haven't been already. "), _c('em', [_vm._v("There may be a message about SQLServerAgent not running when installing these scripts. That is expected since the agent isn't available, but will not affect the installation.")])])]), _vm._v(" "), _c('li', [_c('p', [_vm._v("Create a bash script to execute the maintenance procedure (we'll call ours "), _c('code', [_vm._v("sqlmaint.sh")]), _vm._v("):")]), _vm._v(" "), _c('div', {
    staticClass: "language-bash line-numbers-mode"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-bash"
    }
  }, [_c('code', [_c('span', {
    pre: true,
    attrs: {
      "class": "token shebang important"
    }
  }, [_vm._v("#!/bin/bash")]), _vm._v("\nsqlcmd "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-E")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-S")]), _vm._v(" ."), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\\")]), _vm._v("SQLEXPRESS "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-d")]), _vm._v(" master "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\\")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-Q")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"EXECUTE [dbo].[IndexOptimize] @Databases = 'USER_DATABASES', @LogToTable = 'Y'\"")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-b")]), _vm._v("\n")])]), _vm._v(" "), _c('div', {
    staticClass: "line-numbers-wrapper"
  }, [_c('span', {
    staticClass: "line-number"
  }, [_vm._v("1")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("2")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("3")]), _c('br')])])]), _vm._v(" "), _c('li', [_c('p', [_vm._v("Schedule the script to run via cron by opening the cron editor from the shell:")]), _vm._v(" "), _c('div', {
    staticClass: "language-bash line-numbers-mode"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-bash"
    }
  }, [_c('code', [_c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("crontab")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-e")]), _vm._v("\n")])]), _vm._v(" "), _c('div', {
    staticClass: "line-numbers-wrapper"
  }, [_c('span', {
    staticClass: "line-number"
  }, [_vm._v("1")]), _c('br')])])]), _vm._v(" "), _c('li', [_c('p', [_vm._v("And adding the script on a schedule:")]), _vm._v(" "), _c('div', {
    staticClass: "language-bash line-numbers-mode"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-bash"
    }
  }, [_c('code', [_vm._v("00 "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("23")]), _vm._v(" * * * /bin/sqlmaint.sh "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# Run maintenance 11PM every day")]), _vm._v("\n")])]), _vm._v(" "), _c('div', {
    staticClass: "line-numbers-wrapper"
  }, [_c('span', {
    staticClass: "line-number"
  }, [_vm._v("1")]), _c('br')])])])]), _vm._v(" "), _c('p', [_vm._v("Repeat the above steps for any other tasks that need to be regularly scheduled.")]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "platform-agnostic"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#platform-agnostic"
    }
  }, [_vm._v("#")]), _vm._v(" Platform Agnostic")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "airflow"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#airflow"
    }
  }, [_vm._v("#")]), _vm._v(" Airflow")]), _vm._v(" "), _c('p', [_vm._v("A relative newcomer, "), _c('a', {
    attrs: {
      "href": "https://airflow.apache.org/",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("Airflow"), _c('OutboundLink')], 1), _vm._v(" is a \"platform created by community to programmatically author, schedule and monitor workflows.\" It is backed by Apache, built in Python, and 100 percent free. Airflow has been making huge waves in data engineering and data science areas due to its relative ease to manage and customizability.")]), _vm._v(" "), _c('p', [_vm._v("While it may be overkill to leverage Airflow "), _c('em', [_vm._v("just")]), _vm._v(" for simple backup or maintenance scripts, if you have needs for other scheduled workflows around SQL Server Express, it may be a good fit. Airflow will require some knowledge of Python to get everything operational, but out of the box Airflow does include a "), _c('a', {
    attrs: {
      "href": "https://airflow.apache.org/docs/stable/_api/airflow/hooks/mssql_hook/index.html",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("basic hook for SQL Server"), _c('OutboundLink')], 1), _vm._v(" which should make a basic proof of concept an easy task to accomplish.")]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "further-reading"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#further-reading"
    }
  }, [_vm._v("#")]), _vm._v(" Further Reading")]), _vm._v(" "), _c('ul', [_c('li', [_c('a', {
    attrs: {
      "href": "https://ola.hallengren.com/frequently-asked-questions.html",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("FAQ on Ola Hallengren's Scripts"), _c('OutboundLink')], 1)]), _vm._v(" "), _c('li', [_vm._v("Microsoft KB on "), _c('a', {
    attrs: {
      "href": "https://support.microsoft.com/en-us/help/2019698/how-to-schedule-and-automate-backups-of-sql-server-databases-in-sql-se",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("How to Schedule and Automate Backups of SQL Server Databases in SQL Server Express"), _c('OutboundLink')], 1)]), _vm._v(" "), _c('li', [_vm._v("Microsoft Documentation on "), _c('a', {
    attrs: {
      "href": "https://docs.microsoft.com/en-us/sql/tools/sqlcmd-utility?view=sql-server-2017",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("sqlcmd"), _c('OutboundLink')], 1)])]), _vm._v(" "), _c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _c('ClientOnly', [_c('disqus-component'), _vm._v(" "), _c('userway-component')], 1)], 1);
};
var staticRenderFns = [];


/***/ }),

/***/ "./sql-server-express-replace-sql-agent.md":
/*!*************************************************!*\
  !*** ./sql-server-express-replace-sql-agent.md ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sql_server_express_replace_sql_agent_md_vue_type_template_id_dc27f29a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sql-server-express-replace-sql-agent.md?vue&type=template&id=dc27f29a */ "./sql-server-express-replace-sql-agent.md?vue&type=template&id=dc27f29a");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _sql_server_express_replace_sql_agent_md_vue_type_template_id_dc27f29a__WEBPACK_IMPORTED_MODULE_0__["render"],
  _sql_server_express_replace_sql_agent_md_vue_type_template_id_dc27f29a__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./sql-server-express-replace-sql-agent.md?vue&type=template&id=dc27f29a":
/*!*******************************************************************************!*\
  !*** ./sql-server-express-replace-sql-agent.md?vue&type=template&id=dc27f29a ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_d33d2cce_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_3_0_node_modules_babel_loader_lib_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_node_modules_vuepress_markdown_loader_index_js_ref_1_2_sql_server_express_replace_sql_agent_md_vue_type_template_id_dc27f29a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"d33d2cce-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/babel-loader/lib??ref--3-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??ref--1-1!./node_modules/@vuepress/markdown-loader??ref--1-2!./sql-server-express-replace-sql-agent.md?vue&type=template&id=dc27f29a */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"d33d2cce-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@vuepress/markdown-loader/index.js?!./sql-server-express-replace-sql-agent.md?vue&type=template&id=dc27f29a");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_d33d2cce_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_3_0_node_modules_babel_loader_lib_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_node_modules_vuepress_markdown_loader_index_js_ref_1_2_sql_server_express_replace_sql_agent_md_vue_type_template_id_dc27f29a__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_d33d2cce_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_3_0_node_modules_babel_loader_lib_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_node_modules_vuepress_markdown_loader_index_js_ref_1_2_sql_server_express_replace_sql_agent_md_vue_type_template_id_dc27f29a__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=31.cd315b41.js.map