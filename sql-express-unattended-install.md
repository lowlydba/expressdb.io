---
layout: page
title:  Unattended Install of SQL Server Express
comments: true
---

## How Does Unattended Install Work?

Automating the installation of SQL Server Express, also known as an
unattended install, is done by launching the setup process via the command
line and passing pre-determined parameters so that no human interaction
is needed to complete the setup. This is ideal for any situation where
many servers must be provisioned and a requirement when bundling
SQL Server Express with other software using it as a database.

The configuration for the install can be input directly as parameter to
the setup file, like

```batch
Setup.exe /ACTION="Install"
```

or passed in via a configuration file:

```batch
Setup.exe /ConfigurationFile=MyConfigurationFile.INI  
```

Using a configuration file makes it easy to store, maintain, and customize the various parameters that may change based on SQL Server version, install type, and target server. For this reason, the below configurations will be provided as template files that can be tailored to any additional needs.

* SQL Server Express 2014 Unattended Install
* [SQL Server Express 2016/2017 Unattended Install](2016-2017-unattended-install)

### 2016/2017 Unattended Install

```batch
Setup.exe /IACCEPTSQLSERVERLICENSETERMS /Q /ConfigurationFile=MyConfigurationFile.INI
```
