---
layout: post
title: What's Missing in ArchiMate?
category: architecture
tags: archimate modeling
---
My team and I have been using ArchiMate for the last year or so for our enterprise architecture modeling work.

During that time I have also been building a tool that operates on the ArchiMate model to allow querying of the relationship graph in order to get to information in the model not shown in diagrams.

In the course of writing the ArchiMate tooling and working with the modeling language in my everyday work has made me think about the content and intent of ArchiMate. I've found a number things missing that make using the model more of a challenge than I think it should be. For example, there's no means to indicate within a model that a particular subset of the model is one of several optional future states. In other words, every thing you add to a particular model says that all of the model parts are reality. Speaking with ArchiMate modeling experts, the desired course of action is to compose these options in a *Plateau*. I find this a challenge from a usability standpoint largely because the tooling that we use (the awesome [Archi](https://archimatetool.com)) doesn't have a means to facilitate this easily (or to ensure that all modeling additions happen in the context of a *Plateau*).

## What is Missing

* Depiction of one or more optional future states
* Depiction of change over time
* Visibility

{% plantuml %}
sprite $bProcess jar:archimate/business-process
sprite $aService jar:archimate/application-service
sprite $aComponent jar:archimate/application-component

rectangle "Handle claim"  as HC <<$bProcess>> #yellow 
rectangle "Capture Information"  as CI <<$bProcess>> #yellow
rectangle "Notify\nAdditional Stakeholders" as NAS <<$bProcess>> #yellow
rectangle "Validate" as V <<$bProcess>> #yellow
rectangle "Investigate" as I <<$bProcess>> #yellow
rectangle "Pay" as P <<$bProcess>> #yellow

HC *-down- CI
HC *-down- NAS
HC *-down- V
HC *-down- I
HC *-down- P

CI -right->> NAS
NAS -right->> V
V -right->> I
I -right->> P



rectangle "Scanning" as scanning <<$aService>> #A9DCDF
rectangle "Customer admnistration" as customerAdministration <<$aService>> #A9DCDF
rectangle "Claims admnistration" as claimsAdministration <<$aService>> #A9DCDF
rectangle Printing  <<$aService>> #A9DCDF
rectangle Payment  <<$aService>> #A9DCDF

scanning -up-> CI
customerAdministration  -up-> CI
claimsAdministration -up-> NAS
claimsAdministration -up-> V
claimsAdministration -up-> I
Printing -up-> V
Printing -up-> P
Payment -up-> P

rectangle "Document\nManagement\nSystem" as DMS <<$aComponent>> #A9DCDF
rectangle "General\nCRM\nSystem" as CRM <<$aComponent>> #A9DCDF
rectangle "Home & Away\nPolicy\nAdministration" as HAPA <<$aComponent>> #A9DCDF
rectangle "Home & Away\nFinancial\nAdministration" as HFPA <<$aComponent>> #A9DCDF

DMS .up.|> scanning
DMS .up.|> Printing
CRM .up.|> customerAdministration
HAPA .up.|> claimsAdministration
HFPA .up.|> Payment

legend left
Example from the "Archisurance case study" (OpenGroup).
See 
==
<$bProcess> :business process
==
<$aSrv> : application service
==
<$aComp> : appplication component
endlegend
{% endplantuml %}

## Why is this a problem?

* Querying a model
* Understanding the (projected) change of the enterprise over time
* Understanding enterprise domains (services private to an internal domain vs. enterprise-wide services)

## Current recommended solutions

* Plateau

## Boiling it down

* Modularity is what is truly missing


