---
layout: post
title: "The False Premises of Build vs Buy"
date: 2015-06-29 15:48:18 -0600
comments: true
categories:
    - software
tags:
    - enterprise-architecture
    - cots
    - build-vs-buy
image: /assets/images/mouth-of-santa-elena-canyon.jpg
---
Several times a year, I get involved in a "build vs. buy" conversation. We need a _C-MESA_\* system - should we build it or buy it? It's a source of friction between many Enterprise leaders and IT architects and developers.

The short answer is often: "If you can buy it, buy it. Build it only if you have to." The *correct* answer is usually more nuanced and, as usual, the devil is in the details.

To keep this fun, I'm going to tell a story about a company named _AppSmithy_, its fictional CIO named _Bob_ and his IT department's senior architect named _Doug_.

TODO: Insert pix of Bob & Doug

\* C-MESA: Completely Meaningless Enterprise Solution Acronym

## Bob's perspective

One of AppSmithy's departments has come to Bob demanding a solution for _C-MESA_. Bob's thinks back to CIO school and remembers that you should always buy solutions. Not only that, but Bob knows _exactly_ what to buy. A vendor named _OrcaForceSoft_ has a _C-MESA_ product named _Executron_ which is perfect for AppSmithy! Bob knows this for one (or more) of the following reasons:

TODO: Logo for _OrcaForceSoft_

* _OrcaForceSoft_ solved the same problem at a previous company
* _OrcaForceSoft_ has a really convincing and/or attractive sales-person
* said sales-person arrived armed with free steak lunch and free country-club membership
* we don't have the people and development skill to build _C-MESA_
* no one was ever being fired for buying _OrcaForceSoft_

It's only 10:00 am and the problem is already solved ... except that he's going to have to get Doug to integrate _Executron_ with the rest of _AppSmithy_'s architecture. And that means talking to Doug about it.

## Doug's perspective

Doug's title at _AppSmithy_ is "Architect", but he still thinks of himself as a developer at heart. Doug has been at _AppSmithy_ through a few different leadership changes. Doug thinks that Bob seems to be a pretty good guy, but he's been burned in the past by CIO decisions.

Doug meets with Bob and hears about the need for _C-MESA_ and _Executron_. He has an immediate negative reaction for a few reasons:

* _OrcaForceSoft_ is really terrible to develop on, he doesn't want to work on it
* _OrcaForceSoft_ uses a drug-dealer pricing scheme that will bleed us dry long after the leader has moved on from the company
* how do we know _Executron_ is the best solution for _C-MESA_
* we could build a better _C-MESA_ in less time than _OrcaForceSoft_

## After the meeting

Both Bob and Doug are a little deflated from the talk. Bob dismisses Doug's concerns by telling himself that developers always want to build everything. Doug leaves thinking: "here we go again - prepare for another integration death-march".

Bob would like Doug to be able to see that the buy decision is clear:

TODO: turn this into a 4 panel comic

Build                             | Buy
----------------------------------|-------------------------------------
Find an available dev team        | Select commercial software
Reschedule planned work           | Hire expert contractors to install
Deal with slipping schedule       | Accept performance bonus
Accept less than hoped for results|
Bugs, bugs, bugs                  |
Maintain forever                  |

Doug would like Bob to see that:

Build                             | Buy
----------------------------------|-------------------------------------
Keep domain knowledge in-house    | Rent commercial software - there is no buy
Build software that works with our business process | Hire expensive contractors who will build the functionality we need that is missing
                                  | Integration is difficult due to inferior APIs

## The moral of the story

Depending on the real-life product and need, both Bob and Doug could be correct. So the question is: how do you know what the right decision is?

## Initial questions to ask yourself

1. Are you adding a new business process or improving an existing one?
2. Know what you really require:
    1. What business processes(es) must be kept?
    1. What business processes(es) may/could/should change?
3. Is there a product out there that truly meets your needs?

If after understanding the first two questions, the answer to #3 is yes, then there is a strong chance that buying is the right answer.

If the answer to #3 is no, then you face a more challenging set of questions. First some ugly truth.

## The ugly truth about enterprise software

The ugly truth is that Enterprise Software isn't bought, installed and used. Enterprise Software is bought and installed, then modified, extended, folded, spindled and mutilated by expensive contractors. This leads to unexpected costs, maintenance, and wailing and gnashing of teeth.

### Most enterprise software isn't off-the-shelf

When you buy a product like Microsoft Exchange, you will have a certain amount of work involved in configuring it for your Enterprise. Setting up rules, defining domains, adding your employees to the directory (or integrating with an existing directory, etc. However, it's largely a discrete project - plan-able and relatively predictable.

When you buy something like a billing suite or a sales tool, it's a *completely* different story. Here are some of the reasons why:

* The software may not align with your current way of doing business
    - Can your business process change to match the process inherent in the new software?
    - Is the business process you are replacing part of the "secret sauce" that makes your business successful?
    - Are you willing to make the changes to the software to make it match your current business process?
    - People don't like to change. Is the potential disruption worth other value gained?
    - Are there extra processes that you'll need to account for with the new software?
* The customizations you make to the software may make upgrades and bug fixes difficult to virtually impossible
    - Can customizations be subjected to good coding discipline (e.g., version control, automated testing, etc.)?
* Your business processes probably do not exist wholly within the scope of the new software and other systems will need integration

### Unplanned additional costs

You may have planned for the license costs, but you will also need to cover the costs for:

* A team of DevOps and developers with experience in this tool. Typically these people are contractors and as specialists can be expensive.
    - This team won't go away once the software is deployed.
    - Custom work will continually be demanded by your users.
    - The software will require maintenance releases and DevOps monitoring.
* Licensing fees will need to be negotiated periodically. Are you buying your software for the enterprise equivalent of the corner drug dealer?
    - Is it "free" for the first year?
    - After that?

### Customization

If your requirements are between building a system or buying (and customizing) a commercial solution, you are really deciding between: building with your developers and tool-set and building in a framework that requires external developers and yearly license fees.

This isn't to say that you should build everything. But you should definitely go into the decision with open eyes about the real costs and benefits with each approach.

## Making an informed build vs buy decision

1. Spend more time with the target users determining what problem you need to solve.
2. Are your requirements something that are core to your business? Is the business process part of your "secret sauce"?
    - If so, this should make you lean towards an in-house implementation unless you can find a product that allows you to maintain or improve this business process.
    - If not, you should lean to buying a solution - unless no suitable solution can be found.

## Evaluating an enterprise application

1. How open is the documentation? This should be public
2. Get references for similar companies that have implemented this application. Prefer companies that aren't provided by the vendor
3. What percentage of the software do you intend to use?
    - Does it make sense to purchase an expensive product and use only 10% of its functionality?
    - What if you have to implement/customize another 80% of the functionality?
4. Examine the APIs that permit customization
    - Do these APIs permit the kinds of customizations that you'll need to make?
    - Will you have to rely on one-off changes in the code that will be difficult to support in the future?
    - Can your extensions/customizations be subjected to good code practices (e.g., Version Control, Automated Testing)?
5. Examine the upgrade process
    - What is the release schedule frequency?
    - How are customizations re-applied after a new release?
    - How much down-time is required?
6. Examine the community and culture around customization of the tool.
    - Is the community open, welcoming and lively?
    - Will finding answers to questions be easy?
7. How difficult (or possible) is integration with other applications?
    - How well does it fit into your company standards for integration (i.e., SOA, REST)
    - Are the APIs well documented?

## Anti-patterns

These are the things that are easy to trip over. Watch out for these behaviors and correct course.

### General

* Talking about implementations or solutions before deeply understanding the problem you need to solve
* Looking for solutions before deeply understanding the problem to be solved
* Taking on a project before the business is ready to fully engage with the process
* Inadequate engagement with the business - this results in building the wrong solution

### Buying

* If you ask the man with the hammer, he will tell you that the problem is a nail. When exploring solutions, include independent opinions, i.e.:
    - not the contracting company that you would hire to implement the solution
    - not the team in charge of your existing _OrcaForceSoft_ products
* Buying a solution that requires process changes that haven't been agreed to by the users
* Buying a solution that requires extensive changes to meet requirements (often this can be more expensive than building what is needed)
* Buying the wrong solution. Make sure to do a full survey of the market
* Valuing a potential product for breadth of features instead of support for features you actually will be using

### Building

* Building with the wrong technology. It's a common fault to use the technology stack of an available development team instead of using the stack that best addresses the problem
* Building with the wrong team. A development team that works well in one domain may struggle in another
* Over-building the solution (gold-plating). You have the opportunity to build something that is just good enough - don't waste it


## TODO:

1. Boil it down
1. rough reqs, buy, detail reqs, impl
1. buy for feature count instead of used features
1. turn the whole thing into a story
1. Put in a TL;DR flowchart of the process

