---
title: "Some thoughts on Node.js"
categories:
    - software
tags:
    - programming-languages
    - programming
    - node.js
image: /assets/images/golden-gate-splash.jpg
---
Over the last month or so, I've been working with [Node.js](https://nodejs.org/en/) to build a tool chain, [Generator RAML API](https://github.com/rackerlabs/generator-ramlapi) for myself and my team as we work on building [RAML](http://raml.org/) API docs.

Given that the final HTML documentation tool that we use was based on [raml2html](https://github.com/kevinrenskers/raml2html) with was a Node.js tool and that our schemas are usually JSON, I thought it would be good to keep the tool chain in Node.js to make it easier to install and use.

The plan was to use a Node-based build tool to chain together several existing Node libraries to validate the RAML, validate the JSON schema referenced in the RAML and then build the HTML docs from the contract.

Initially, I used [Grunt](http://gruntjs.com/) to build the tool chain. I built a few Grunt plugins for some of the libraries that I was using. The tooling worked some of the time, but when it failed, the nature of Grunt's approach to configuration instead of code made it difficult for me to determine where the problems were.

I switched to [Gulp](http://gulpjs.com/) because I liked the fact that Gulp was code-based instead of configuration object based. I was also was interesting to play with the Gulp stream concept. That had no real value for this in generator-ramlapi*, but I can see it really being valuable in prepping a web site for deploy.

\* it does speed things up by a few seconds by preventing the same RAML files being loaded over and over.

---

I learned a lot (and I'm still learning). JavaScript in my opinion is [getting better](http://www.ecma-international.org/publications/standards/Ecma-262.htm), but the following things make it hard to really embrace:

* Quality of [npm](https://www.npmjs.com/) packages. My experience is anecdotal, but compared to my experiences in other languages, the quality of shared packages is not very good.
* The [asynchronous NodeJs model](https://nodejs.org/en/about/) is inherently hard for developers to use correctly.
    * It pushes a problem that the language should solve onto the developer's shoulders. The same asynchronous coding pattern in other languages like [Python](http://twistedmatrix.com/) have the same problem.
    * Promises vs callbacks. The [async](https://www.npmjs.com/package/async) npm package does provide some nice patterns that make it better but doesn't solve the problem. An easy mistake that I made more than once is passing a callback function to an asynchronous function when it returned a [promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) (or vice versa). The result is a silent failure where your callback is never called.
* Error handling defaults (exceptions, error returns, error events) are bad and hard to implement correctly.
    * Bad:
        * because errors tended to get silently swallowed
        * unless you've written all of the code yourself, you need to use a patchwork version of all styles
    * Hard to implement correctly because due to the dynamic nature of Node.js, it's easy to handle an error of the wrong sort and miss errors.

That being said, there are a few things that I like a lot in JavaScript.

* The prototype system is really powerful and makes some things easier to do than they are in Python or Ruby.
* There's the capability in the language to build Object Oriented software in a way that isn't actually Class Oriented software.
* Performance is really good for such a dynamic language.

For now though, Node.js isn't likely to become one of the top tools in my toolbox.
