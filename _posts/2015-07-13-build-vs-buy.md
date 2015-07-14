---
title: "The False Premises of Build vs Buy"
categories:
    - software
tags:
    - enterprise-architecture
    - cots
    - build-vs-buy
image: /assets/images/mouth-of-santa-elena-canyon.jpg
wiki: https://en.wikipedia.org/wiki/False_premise
---

{% tldr %}In this article, I write about build vs buy and what that really means in an enterprise setting. My goal is to inform decision makers about what they are getting into (from a technical perspective) when buying enterprise applications. You have to approach the "buy" decision as though it was a "build" with a different framework.{% endtldr %}

*Note:* this is still a work in progress. I'll be improving it over time.

Several times a year, I get involved in a "build vs. buy" conversation. The conversation starts with a business segment leader coming to the CIO and saying "We need a _C-MESA_\* system".  The CIO then asks his team: "Should we build it or buy it?" In many companies, it can be a source of friction between business leaders and architects/developers.

The short answer is often: "If you can buy it, buy it. Build it only if you have to." The *correct* answer is usually more nuanced and, as usual, the devil is in the details.

To keep this fun, I'm going to tell a story about a company named _AppSmithy_, its fictional CIO named _Bob_ and his IT department's senior architect named _Doug_.

\* C-MESA: Completely Meaningless Enterprise Solution Acronym

## Bob's perspective

One of AppSmithy's departments has come to Bob demanding a solution for _C-MESA_. Bob's thinks back to CIO school and remembers that you should always buy solutions. Not only that, but Bob knows _exactly_ what to buy. A vendor named _OrcaForceSoft_ has a _C-MESA_ product named _Executron_ which is perfect for AppSmithy! Bob knows this for one (or more) of the following reasons:

* _OrcaForceSoft_ solved the same problem at a previous company
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
* _OrcaForceSoft_ must have a really convincing and/or attractive sales-person armed with free steak lunch and country-club membership

## After the meeting

Both Bob and Doug are a little deflated from the talk. Bob dismisses Doug's concerns by telling himself that developers always want to build everything. Doug leaves thinking: "here we go again - prepare for another integration death-march".

Bob would like Doug to be able to see that the buy decision is clear:

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

Bob and Doug started off on the wrong foot. The first thing they could have done was to start asking questions of the business:

### 1. What does your business _really_ need?

* There is no such thing as an Agile build vs buy decision. You will need to perform a deep evaluation of requirements.
* Trying to pick a "best of breed" solution assuming that it will work for your specific needs is risky.
* Are your requirements something that are core to your business? Is the business process part of your "secret sauce" that makes your business unique?
    - If so, this could make you prefer an in-house implementation (unless you can find a product that allows you to maintain or improve this business process with minimal development/integration).
    - If not, you should lean to buying a solution - unless no suitable solution can be found.
* Beware of talking about implementations (build) or solutions (buy) before deeply understanding the problem is a mistake and can cause you to make the wrong decision.

### 2. What is the impact to your business?

* Is the new application going to be used to create a new business process? Duplicating an existing business process (presumably introducing efficiencies)? Replacing an existing Business Process?
    - Are there simpler short-cuts (glue-code) that could facilitate this improvement?
    - Are there existing systems in your enterprise that could fulfill the need?
    - Has the new business process been vetted with all concerned parties?
    - Unexpected change is disruptive. Is the potential disruption worth other value gained?
    - Are there additional processes that will be impacted by the process changes?
* Is the business ready to invest in the project by dedicating end-users and subject matter experts to consult with the development or implementation team? Taking on a project before the business is ready to fully engage with the process will make you build the wrong thing or even fail.

Once you know what the impact and your needs are, you are armed to determine if there is a product available that truly meets your needs.

## Evaluating enterprise applications

### 1. Beware of buying the wrong solution.

- Make sure to do a full survey of the market
- Just because you already have an _OrkaForceSoft_ install-base does not mean that _OrkaForceSoft: Executron_ is what YOU need
    + Competitors may have a solution that fits your needs better
    + {% pullquote %}Integration between a company's components are often not as seamless as you'd expect{% endpullquote %}

### 2. Get references for similar companies that have implemented this application.

* Prefer companies that aren't provided by the vendor (if you can find them)
* Get independent opinions you can trust
* When exploring solutions, include independent opinions, i.e.:
    - Not the contracting company that you would hire to implement the solution
    - Not the team in charge of your existing _OrcaForceSoft_ products
        + If you ask the man with the hammer, he will tell you that the problem is a nail

### 3. What percentage of the software do you intend to use?

- Does it make sense to purchase an expensive product and use only 10% of its functionality?
- What if you have to implement/customize another 80% of the functionality?
- Buying a solution that requires extensive changes to meet requirements can be more expensive than building what you need instead
- It's a mistake to place a higher value on breadth of features instead of support for features you actually will be using

### 4. Evaluate the development cycle of the application

- Most vendors are willing to do a *Proof of Concept* installation if you define the success criteria up-front
- Even if your developers aren't doing the development on the product, it will be a good indicator of how difficult your installation and maintenance will be
- How open is the documentation?
    + Documentation should be publicly available
- Examine the APIs that permit customization
    + Do these APIs permit the kinds of customizations that you'll need to make?
    + Will you have to rely on one-off changes in the code that will be difficult to support in the future?
    + Can your extensions/customizations be subjected to good code practices (e.g., Version Control, Automated Testing)?
- How difficult (or possible) is integration with other applications?
    + How well does it fit into your company standards for integration (i.e., SOA, REST)
- Examine the community and culture around customization of the tool.
    + Is the community open, welcoming and lively?
    + Will finding answers to questions be easy?
        * Is there an on-line forum where questions are answered quickly?
        * Are there independent communities of developers who respond to questions in places like [Stack Overflow](http://stackoverflow.com/)?
- Examine the upgrade process
    + What is the release schedule frequency?
    + How are your local customizations re-applied after a new release?
        + In a poorly structured product, the customizations you make to the software may make upgrades and bug fixes difficult to virtually impossible
    + How much down-time is required for upgrades?
        * Does it work for your future needs for up-time?

### 5. Does the software support the work-flow that your end-users expect?

- Enterprise software is usually opinionated on how things should be done and implementing significantly different business process can be time-consuming.
- Can your business process change to match the process inherent in the new software? Will the change be accepted?
- Are you willing to make the changes to the software to make it match your current business process?
- Beware of buying a solution that requires process changes that haven't been agreed to by the users

### 6. Real enterprise software costs

- Yearly license & support fees
    - What happens when you scale your deployment?
    - Licensing fees will need to be negotiated periodically.
    - Are you buying your software from the enterprise equivalent of the corner drug dealer?
        - Is it "free" for the first year?
        - After that?
- A team of DevOps and developers with experience in this tool.
    + Typically these will be specialist contractors and can be expensive.
    + This team won't usually go away once the software is deployed.
    + Custom work will continually be demanded by your users.
    + The software will require maintenance releases and DevOps monitoring.

### Building gotchas

Building the software yourself comes with its own set of difficulties (well beyond the scope of this already lengthy piece). Here are a few items to watch for.

* *Building with the wrong technology.* It's a common fault to use the technology stack of an available development team instead of using the stack that best addresses the problem.
* *Building with the wrong team.* A development team that works well in one domain may struggle in another.
* *Over-building the solution (gold-plating).* You have the opportunity to build something that is just good enough -- don't waste it.
* *You need good engagement* with the end-users in order to quickly and successfully build software.
* *Building software is expensive.* Consider both apparent costs and opportunity costs.
* *Secret Sauce:* if you aren't adding to your "secret sauce" you probably shouldn't be building it.
* *New Technology Learning Curve:* be sure to allow for the time it will take for developers to learn a new language/framework/tool-set.

## The ugly truth about enterprise software: it's not COTS

The ugly truth is that Enterprise Software isn't bought, installed and used. Enterprise Software is bought and installed, then modified, extended, folded, spindled and mutilated by expensive contractors. This leads to unexpected costs, maintenance, and wailing and gnashing of teeth.

When you buy a product like Microsoft Exchange, you will have a certain amount of work involved in configuring it for your Enterprise. Setting up rules, defining domains, adding your employees to the directory (or integrating with an existing directory), etc. However, it's largely a discrete project -- plan-able and relatively predictable.

When you buy something like a billing suite or a sales tool, it's a *completely* different story.

If your requirements are between building a system or buying (and customizing) a commercial solution, you are really deciding between: building with your developers and tool-set and building in a framework that requires external developers and yearly license fees.

This isn't to say that you should build everything. But you should definitely go into the decision with open eyes about the real costs and benefits with each approach.
