
## Which Express Version to Use

In most cases, the answer to 'Which SQL Server Express Version?' is simple: the latest version you can. Since Microsoft adds
more features and decreases the limitations of SQL Server Express with every subsequent release,
the more recent the version the more advanced capabilities it will offer.

::: tip Note
For now, this means [SQL Express 2022][express2022].
:::

## Benefits of Newer Versions

The chart below covers a few of the important features and limitations that
have had import changes across versions and highlights the benefits of
pursuing the latest version possible when choosing which SQL Express to use. Versions below
2008 R2 are excluded due to their age and lack of support.

| Version | Max. RAM | Table/Index Partitioning | Data Compression | Database Snapshots | Transparent Data Encryption | UTF-8 | Polybase Compute Node |
| ------- | -------- | ------------------------ | ---------------- | ------------------ | --------------------------- | ----- | --------------------- |
| 2008 R2 | 1024MB   | No                       | No               | No                 | No                          | No    | No                    |
| 2012    | 1024MB   | No                       | No               | No                 | No                          | No    | No                    |
| 2014    | 1410MB   | No                       | No               | No                 | No                          | No    | No                    |
| 2016    | 1410MB   | Yes (SP1+)               | Yes (SP1+)       | No                 | No                          | No    | No                    |
| 2017    | 1410MB   | Yes                      | Yes              | Yes                | No                          | No    | No                    |
| 2019    | 1410MB   | Yes                      | Yes              | Yes                | Yes                         | Yes   | Yes                   |
| 2022    | 1410MB   | Yes                      | Yes              | Yes                | Yes                         | Yes   | Yes                   |

## Compatibility Mode

Even if your application requires an older version of SQL Server, using the latest version
and putting the database into compatibility mode may be a good option to get the
best of both worlds. This mode allows the behaviors of the database to
be compatible with older versions of SQL Server, but keeps server level benefits of newer versions,
like higher RAM usage, available.

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
| 2019    | 15             | 150                 | 150, 140, 130, 120, 110, 100
| 2022    | 16             | 160                 | 160, 150, 140, 130, 120, 110, 100

## Support Lifecycle Policies

Features aside, an important part of choosing between SQL Server Express versions
is the how long each will be support by Microsoft. Support entails Microsoft releasing
security updates, patches (and sometimes new features) as well as them
accepting bug and issue tickets for a given version. Once a version falls out of support,
Microsoft won't help troubleshoot any issues and often times vulnerabilities may
go unfixed when they are discovered at a later date. To take advantage of the mainstream support
dates, be sure to have the latest cumulative updates and service packs applied.

It is highly advised to *not* provision any new instances that are already out of support. Any SQL Express versions not included below are already out of date.

| Version | End of Mainstream Support |
| ------- | ------------------------- |
| 2008    | 7/8/2014                  |
| 2008 R2 | 7/8/2014                  |
| 2012    | 7/11/2017                 |
| 2014    | 7/9/2019                  |
| 2016    | 7/13/2021                 |
| 2017    | 10/11/2022                |
| 2019    | 1/7/2025                  |
| 2022    | 1/11/2028                 |

## Further Reading

* [SQL Server Express Feature Comparison][feature-comparison]
* [Microsoft's documentation on compatibility mode][compat]
* [SQL Collaborative's Build Reference][sqlcollab]

[compat]: https://docs.microsoft.com/en-us/sql/t-sql/statements/alter-database-transact-sql-compatibility-level
[express2022]: https://cloudblogs.microsoft.com/sqlserver/2022/11/16/sql-server-2022-is-now-generally-available
[feature-comparison]: /sql-server-express-feature-comparison.html
[sqlcollab]: https://sqlcollaborative.github.io/builds

<br/>
<br/>
