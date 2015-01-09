---
layout: post
title: The False Sense of Security of Software Design Documentation
tags: []
status: publish
type: post
published: true
meta: {}
---
Recently at work, there has been a push to not only standardize on a software diagramming tool, but to enforce its use for all projects.  I'm naturally opposed to this "one size fits all" approach, but it also made me think about the ways teams use software documentation.  It took a few weeks of background brain processing and refreshing my XP experience (with the team I've been working with recently) to get my thoughts together.  

I have always observed a tension around documentation in my experience as a developer.  On one hand, everyone accepted that documentation was <em>obviously</em> necessary to a healthy project.  We clearly needed detailed requirements and design documents.  On the other hand, most people would grudgingly acknowledge that documentation:
<ul>
	<li>Requires a lot of time to produce</li>
	<li>Is no fun to work on</li>
	<li>Gets stale quickly as the project progressed</li>
	<li>Misses a lot of vital information</li>
	<li>Is confusing and easy to misinterpret</li>
</ul>


The split of opinion in our meeting broke down more or less like this:

An architect and people on his team were convinced of the necessity of formal documentation. The more experienced dynamic language developers, were much less convinced.  

We talked about what the documentation proponents expected to gain from the documentation and heard the following:
<ul>
	<li>Communication of the structure of the application</li>
	<li>Provide a means to evaluate the design in reviews</li>
	<li>The documents equate to a blueprint of the solution</li>
</ul>

I tend to favor simplicity, so my gut was telling me that any design that needed more than a few minutes at a white board was likely to be overkill (particularly for the kind of software we develop).  After some thought, I came to the conclusion that the problem was that the fans of documentation are after a worthy goal, but the current state of software engineering lets them down.

<strong>Why?</strong>

Simple.  A UML document isn't anything close to the information repository that an actual blueprint is.

Blueprints (I'm speaking of architectural blueprints here) provide information that can be used to validate the structural integrity of the proposed building.  UML diagrams do no such thing - the reason why is that building construction is composed of specific standard materials (components) which are assembled (composed) in standard known ways.  The net result is that an engineer can look at a blueprint and bill of materials and perform the math necessary to determine if the designed structure will withstand the expected stresses.  Software packages exist which can do this as well for many types of structures.  Likewise, electrical engineers can design a circuit and run it through a circuit simulator to validate that it works.  

In software, UML diagrams (or any other documentation) describe high level design patterns and standard frameworks that can be applied, but the devil, as they say, is in the details.  There are no standard components which hook up the internals in predictable or validatable ways.  No one can look at a UML diagram and make any valid predictions about the suitability of a design for any application.

<strong>Why?</strong>

Because software is a more widely applicable than construction and is an extremely immature engineering discipline.  We're still putting together our buildings using hammers whose heads  fall off and land on your foot when you swing them at a nail.  To write a circuit simulator for a software application requires that you write the code for the software.  The code for the software is ultimately the only design that matters.  The best validation that we can currently achieve is to write tests against running code.

Therefore, the inability to prove the suitability of a software design document is one of the reasons why software architects who don't write code are a bad idea.  A lot of software engineers either intuitively get this or have picked it up after dealing with an "architect" or two.  XP guys get it - the lead software engineer still writes code.  

A final analogy:  a music composer can sit down with a sheet of paper and a pencil and write down a piece of music that can be played by a group of musicians with no further input from the composer.  Software can't be designed this way.  Human beings aren't capable of comprehending enough depth and lack the tools to communicate the design for a piece of software.

<strong>So where do we stand?</strong>

Software is hard to do right.  There isn't an easy answer and no silver bullets seem ready to present themselves.  The best we can do at present is emphasize simplicity, maximize communication (face to face at a whiteboard beats any document I've seen), and use discipline and techniques like pairing, reviews, and testing (and many others) to protect us from ourselves.  It's the best we can do right now.
