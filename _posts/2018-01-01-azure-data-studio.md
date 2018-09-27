---
layout: post
title:  Azure Data Studio
comments: true
date: 2018-09-26
author: John McCall
tags: [azure data studio, sql operations studio, sql data studio]
---

Announced during Microsoft's 2018 Ignite event, [Azure Data Studio](https://docs.microsoft.com/en-us/sql/azure-data-studio/download?view=sql-server-2017) (formerly SQL Operations Studio)
was released under General Availability.

This open source tool from Microsoft works on Linux, Mac, and Windows and builds off a very familiar foundation for anyone accustomed to using [Visual Studio Code](https://code.visualstudio.com/).

While its previous form had some rough edges, the 1.0 release of Azure Data Studio is much more polished and out of the box delivers amazing functionality and performance when compared to SQL Server Management Studio.

<div>
<img style="display: block; margin: auto; border: 1px solid gray;" src="../img/azure-data-studio.png" title="New vs Old SQL Server Management Studio" alt="New vs Old SQL Server Management Studio">
<p style="text-align: center; font-style: italic;">Azure Data Studio 1.0</p>
</div>

Right after connecting to a SQL instance a dashboard provides instance information, action buttons, a list of searchable databases, backup statuses, and database sizes in chart form. These are just a few default examples of what incredibly useful and powerful data can be shown *as soon as you connect to a server*.

Azure Data Studio is definitely targeted towards data-minded individuals. With integrated source control support, a host of free extensions, a file explorer, support for [Notebooks](https://notebooks.azure.com/), query results to graph capabilities it offers an ease of working with SQL and data that other database platforms have not come close to providing. And for anyone accustomed to using SQL Server Management Studio, the inclusion of both a fully supported dark theme and a blazing fast, reliable Intellisense are things that only dreams were made of until now.

<div>
<img style="display: block; margin: auto; border: 1px solid gray;" src="../img/azure-data-studio-dark-theme.PNG" title="Proof Intellisense isn't broken by design" alt="Proof Intellisense isn't broken by design">
<p style="text-align: center; font-style: italic;">Proof Intellisense isn't broken by design</p>
</div>


## When To Use It

If you're a developer, data scientist, or pretty much anyone except for a DBA, then this is probably a tool that will fit your needs much better than SQL Management Studio ever will - end of story.

If you are a DBA and you find yourself needing to work with SQL Agent, in depth-configurations, and wizards on a frequent basis, then (for now) Azure Data Studio probably won't fulfill your day to day needs. It does have increasing support for these areas, like the SQL Agent extension, which can show a novel view of current and previous job statistics:

<div>
<img style="display: block; margin: auto; border: 1px solid gray;" src="../img/azure-data-studio-sql-agent.PNG" title="SQL Agent Extension for Azure Data Studio" alt="SQL Agent Extension for Azure Data Studio">
<p style="text-align: center; font-style: italic;">The SQL Agent extension</p>
</div>

...but these features tend to still be half baked, however. At the time of writing, I was unable to get the "Delete Job" menu item to function correctly on a test instance. It seems the focus thus far has been on building out functionality that SSMS does not have, rather than trying to achieve parity between the two.

Microsoft does provide [this chart](https://cloudblogs.microsoft.com/sqlserver/2018/09/25/azure-data-studio-for-sql-server/#featurecomparison) as a helpful comparison of features between Azure Data Studio and SQL Server Management Studio.

## What's Next

Azure Data Studio will no doubt be getting a lot of love from Microsoft and the open source community over the next few years and is already slated to support a ton of new SQL 2019 features (see the [SQL 2019 preview extension](https://docs.microsoft.com/en-us/sql/azure-data-studio/sql-server-2019-extension?view=sqlallproducts-allversions)). Its features will probably also include things that Management Studio does not, and I expect it to take on many areas that it currently lacks in comparison to SSMS. There will be fewer and fewer reasons to open SSMS over time and if you're a wizard at PowerShell already, this might already be the final nail in Management Studio's coffin for you.
