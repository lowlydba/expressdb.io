---
layout: page
title:  Which SQL Express version to use?
---

In most cases, the answer is simple: the latest version you can. Since Microsoft adds
more features and decreases the limitations of SQL Server Express with every subsequent release,
the more recent the version the more advanced capabilities it will offer.

For now, this means [SQL Express 2017](https://www.microsoft.com/en-us/sql-server/sql-server-editions-express).

## Benefits of Newer Versions

The chart below covers a few of the important features and limitations that
have had import changes across versions and highlights the benefits of
pursuing the latest version possible when choosing which SQL Express to use.

| Version | Max. RAM | Table/Index Partitioning | Data Compression | Database Snapshots |
| ------- | -------- | ------------------------ | ---------------- | ------------------ |
| 2008 R2 | 1024MB   | No                       | No               | No
| 2012    | 1024MB   | No                       | No               | No
| 2014    | 1410MB   | No                       | No               | No
| 2016    | 1410MB   | Yes (SP1+)               | Yes (SP1+)       | No
| 2017    | 1410MB   | Yes                      | Yes              | Yes

## Compatibility Mode
Even if your application requires an older version of SQL Server, using the latest version
and putting the database into compatibility mode. This allows behaviors of the database to
be compatible with older versions of SQL Server.

The options for which levels are available will depend on the version:

| Version | Engine Version | Compatibility Level | Supported Compatibility Levels |
| ------- | -------------- | ------------------- | ------------------------------ |
| 2000    | 8              | 80                  | 80
| 2005    | 9              | 90                  | 90, 80
| 2008    | 10             | 100                 | 100, 90, 80
| 2008 R2 | 10.5           | 100                 | 100, 90, 80
| 2012    | 11             | 110                 | 110, 100, 90
| 2014    | 12             | 120                 | 120, 110, 100
| 2016    | 13             | 130                 | 130, 120, 110, 100
| 2017    | 14             | 140                 | 140, 130, 120, 110, 100

## Further Reading

* [SQL Server Express Feature Comparison](http://expressdb.io/sql-server-express-feature-comparison/)
* [Microsoft's documentation on compatibility mode](https://docs.microsoft.com/en-us/sql/t-sql/statements/alter-database-transact-sql-compatibility-level)
