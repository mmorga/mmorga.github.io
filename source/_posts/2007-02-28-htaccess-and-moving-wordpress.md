---
layout: post
title: .htaccess and moving Wordpress
tags: []
status: publish
type: post
published: true
meta: {}
---
Initially, I installed Wordpress to the /blog directory of my website.  After using it a while I decided that I really wanted nothing else at the top level of my website and moved my blog to the top level following the <a href="http://codex.wordpress.org/Giving_WordPress_Its_Own_Directory">directions here</a>.  Things worked just fine after the move except that anyone going to the old blog location http://www.markmorga.com/blog would get the Wordpress header and footer with a 404 error message and no blog.

I played with the .htaccess a bit myself with no luck.  What I wanted to do was to have any reference to /blog to be redirected to / but any /blog/... references still go to their destinations.  Eventually, I threw the problem over to <a href="http://anton.lr2.com/">Anton</a> to have a look at. He poked at it long enough to get angry at Apache and ultimately came up with the following solution:

<code>
&lt;IfModule mod_rewrite.c&gt;
        RewriteEngine On
        RewriteBase /
&nbsp;
        RewriteCond %{REQUEST_URI} !^/blog/(.+)
        RewriteRule blog/ / [R=301,L]
        RewriteRule blog/feed/ /feed/ [R=301,L]
&lt;/IfModule&gt;
</code>

Here the first two lines turn on the rewrite engine for the base directory /.  The RewriteCond line indicates that these rules won't apply to URIs that match to /blog/* (where the * is one or more characters), The first RewriteRule rewrites the /blog URI to / and the second RewriteRule redirects the old feed URI to the new /feed location.

Thanks, Anton!
