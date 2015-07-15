---
layout: post
title: XP Team Work Notes (Part 2)
tags: []
status: publish
type: post
published: true
meta: {}
---
A week and a half has passed since my last post.  I've gathered up a few notes on new things that I've noticed:

* Periodically you run into a work issue where rather than coding, you are tracking down a configuration issue.  For example, you might need to figure out why you can't make a connection to a database.  These problems are tedious at the best of times, but they are especially tedious for the half of the pair not at the keyboard.  That being said, there still is some value gained by the second pair of eyes.
*  What happens when a pair goes down the rabbit hole?  Sometimes a pair begins work on a task which is useful for a refactoring or code sharing reason, but isn't strictly a user story or spike.  It becomes important to "time box" the activity if problems present themselves ("Ok, we'll work on this until lunch and if we don't have a solution by then, we'll shelve this until later.").
*  Don't be afraid to modify your framework.  One refactoring that we did this week was a change to `ActiveRecord::Base` that permitted each of the models in our various apps to inherit our model activity logging module without adding Includes to each model class.  Due to Ruby's ability to augment existing classes, this was a bit easier than it might have been in other languages, but there still was a bit of debugging and testing necessary to make it work reliably with all of our projects.  This could be the subject of a future posting.
*   Build in repeatability.  We currently have four applications that our team is in various states of building.  Since we seem to add new projects so often, we spent some time over the last couple of weeks building a baseline application in subversion that contains all of our common application plugins and defaults.  This makes starting a new project easier since we commonly use a number of different additions to Rails.
*  Look for pain points and eliminate them.  One of our applications had grown to a size that the build/test process had lengthened to twelve minutes.  This was causing delays in our check-in process, so we scheduled a spike this iteration to improve the testing speed.  Think about the places in your day-to-day work that waste some of your time - long running tests?  Searching your project files?  Next think about what can be done to eliminate those wasted seconds and minutes.  You do things over and over and small improvements in time add up over the course of days, weeks, and months.
*  A reason to have a customer close:  sometimes the team ends up ahead of schedule and needs new stories to work on.  Often in the iteration planning meeting, additional stories are determined for this potential, but if there aren't additional stories prepped, having the customer available is essential.
*  Another reason to have a customer close: the customer keeps thinking about the problem.  For example, we had received a description of how the real-world objects we were modeling were related from our SME.  We understood his description fairly well and made a stab at implementing the models as he described them.  One morning, our SME thought further about the relationships of the models and arrived with an updated description which of course necessitated changes on our end.  As a result, we had a little rework, but a much better data model emerged because of our daily interaction with the customer.
*  Finally, seek an expert when necessary.  We are beginning to use the [Ext JS](http://extjs.com/) UI framework to build new user interfaces.  We've chosen to use Ext 2.0 which is only in alpha, so the documentation and examples are still minimal.  We requested that a sibling team's expert in Ext and Javascript come spend some time with us to share some general usage principles and to discuss testing philosophies when creating richer web user interfaces.