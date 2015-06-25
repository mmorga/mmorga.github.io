---
layout: post
title: "The Enterprise Buy vs Build Fallacy"
date: 2015-01-09 15:48:18 -0600
comments: true
categories:
    - enterprise architecture
tags:
    - enterprise architecture
    - cots
    - build vs buy
---
Several times a year, I get involved in the dreaded "build vs. buy" topic.

Enterprise leadership is usually on the *Buy* side of the argument, with the reasoning:

> Given a need, you should buy software to satisfy it rather than build it.
> -- Some Hypothetical Enterprise Leader

Enterprise leaders are typically skeptical of developer feedback pushing back against a *Buy* decision. Pointy-haired bosses being what they are, they tend to believe the developers _always_ want to build software and for some developers, this might be the case.

At face value, the decision looks something like this:

Build                             | Buy
--------------------------------- | ------------------------------------
Find an available dev team        | Select Commercial Software
Reschedule planned work           | Hire expert contractors to install
Deal with slipping schedule       | Accept performance bonus for wise leadership
Accept less than hoped for results|
Bugs, bugs, bugs                  |
Maintain forever                  |

## The Ugly Truth

> What I've observed is that the leadership is ignoring an ugly truth about purchased Enterprise Software: _Enterprise Software_ isn't bought, installed and used. Enterprise Software is bought and installed, then modified, extended, folded, spindled and mutilated by expensive contractors. This leads to unexpected costs, maintenance, wailing and gnashing of teeth.

### Most Enterprise Software Isn't Off-the-Shelf

When you buy a product like Microsoft Exchange, you will have a certain amount of work involved in configuring it for your Enterprise. Setting up rules, defining domains, adding your employees to the directory (or integrating with an existing directory, etc. However, it's largely a discrete project - plannable and relatively predictable.

When you buy something like a billing suite or a sales tool, it's a *completely* different story. Here are some of the reasons why:

* The software may not align with your current way of doing business
    - Can your business process change to match the process inherent in the new software?
    - Is the business process you are replacing part of the "secret sauce" that makes your business successful?
    - Are you willing to make the changes to the software to make it match your current business process?
    - People don't like to change. Is the potential disruption worth other value gained?
    - Are there extra processes that you'll need to account for with the new software?
* The customizations you make to the software may make upgrades and bug fixes difficult to virtually impossible
    - Can customizations be subjected to good coding discipline (version control, automated testing, etc.)?
* Your business processes probably do not exist wholely within the scope of the new software and other systems will need integration

### Unplanned Additional Costs

You may have planned for the license costs, but you will also need to cover the costs for:

* A team of dev-ops and developers with experience in this tool. Typically these people are contractors and are almost inevitably more expensive than your current employees.
    - This team won't go away once the software is deployed.
    - Custom work will continually be demanded by your users.
    - The software will require mainenance releases and dev-ops monitoring.
* Licensing fees will need to be negotiated periodically. Are you buying your software for the Enterprise equivalent of the corner drug dealer?
    - Is it "free" for the first year?
    - After that?

## The Horrific Truth

> If your requirements are between building a system or buying (and customizing) an Enterprise Application. You are really deciding between: Building and Building in a Framework that requires more expensive developers and yearly license fees. This isn't to say that you should build everything. But you should definitely go into the decision with open eyes about the real costs and benefits with each approach.

### Making an Informed Buy vs Build Decision

1. Spend more time with the target users determining what problem you need to solve.
2. Are your requirements something that are core to your business? Is the business process part of your "secret sauce"?
    - If so, this should make you lean towards an in-house implementation unless you can find a product that allows you to maintain or improve this business process.
    - If not, you should lean to buying a solution - unless no suitable solution can be found.

### Evaluating an Enterprise Application

1. How open is the documentation? This should be public.
2. Get references for similar companies that have implemented this application. Prefer companies that aren't provided by the vendor.
3. What percentage of the software do you intend to use?
    - Does it make sense to purchace an expensive product and use only 10% of its functionality?
    - What if you have to implement/customize another 80% of the functionality?
4. Examine the APIs that permit customization.
    - Do these APIs permit the kinds of customizations that you'll need to make?
    - Will you have to rely on on-off changes in the code that will be difficult to support in the future?
    - Can your extensions/customizations be subjected to good code practices? (Version Control, Automated Testing)
5. Examine the upgrade process
    - What is the release schedule frequency?
    - How are customizations re-applied after a new release?
    - How much down-time is required?
6. Examine the community and culture around customization of the tool.
    - Is the community open, welcoming and lively?
    - Will finding answers to questions be easy?
7. How difficult (or possible) is integration with other applications?
    - How well does it fit into your company standards for integration (SOA, etc.)
    - Are the APIs well documented.

### Antipatterns

* Talking about implementations or solutions before deeply understanding the problem you need to solve.
* If you ask the man with the hammer, he will tell you that the problem is a nail. When exploring solutions, include independent opinions: i.e., not the contracting company that you would hire to implement the solution - not the team in charge of system X that is tangentally related to a prospective solution.

### What Makes a Buy Solution Fail

Buying a solution fails when:

* It requires business process changes that the business is unable or unwilling to make
* It requires significant changes to meet business requirements
* You pay more for the software plus the implementation of integration and customization than you would for either an alternate software purchase or a fully in-house piece of software.

### What Makes a Build Solution Fail

Building a custom piece of software can fail when:

* the necessary development skills are not available
* 
