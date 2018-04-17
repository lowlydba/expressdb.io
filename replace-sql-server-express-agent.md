---
layout: page
title:  Replace SQL Agent
subtitle: Three alternatives to SQL Agent for Job Scheduling
---

## The SQL Agent Replacements

* [JAMS](#jams)
* [Windows Task Scheduler](#windowstaskscheduler)
*


## JAMS

JAMS is a job scheduler application that allows advanced programming, configuring,
and execution of jobs and workflows on a Windows computer. The software is used
with a variety of vendor softwares and uses SQL Express as its back-end database.

Compatibility with SQL Server is part of its feature set, and JAMS even offers
job templates for SQL on their website as part of its free template library.

Since JAMS offers a free Community Edition version of their product with the
ability to run up to 50 jobs per day, it makes a great candidate for a SQL Agent replacement.
For managing an instance of SQL Server, there are only a couple of jobs required to
cover maintennace and backup best practices. Based on this, JAMS Community Edition
should be able to fully replace the SQL Agent of even 10 instances side-loaded on the
same server without hitting its 50 job cap.

Fill out their [form](http://www.jamsscheduler.com/do)wnload-free-community-edition/))
to receive a download link to the free Community Edition of JAMS.


50 jobs / day

### How to
up

### Maintenance Jobs in JAMS

### Backup jobs in JAMS



## Further Reading

* MSSQL Tips' [Centralized SQL Server Job Management with JAMS](https://www.mssqltips.com/sqlservertip/3158/centralized-sql-server-job-management-with-jams-job-scheduler/)
* http://www.jamsscheduler.com/platforms/sql-databases/
