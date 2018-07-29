---
layout: post
title:  sp_sizeoptimiser
comments: true
date: 2018-07-29
author: John McCall
tags: [sql server express, sp_sizeoptimiser]
---

# A space freeing utility

SizeOptimiser is a T-SQL script that performs schema, architecture, and feature use analysis to suggest areas where an existing database can reduce its size footprint. It is based on a combination of best practices, industry experience, and common design errors.

Whiles some checks apply only to the features and limitations of a SQL Server Express instance, others can help increase the speed and maintainability of any SQL Server database.

The script is totally free an open sourced. Updates, source code, and compatibility is available at: [lowlydba.com/ExpressSQL/](http://lowlydba.com/ExpressSQL)
