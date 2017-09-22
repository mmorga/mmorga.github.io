TODOs:

# 2017 Site Refresh

## Goals

- Write some articles
- New CSS look and feel - based on framework free CSS
- Static search
- Project Gallery
- New Bio page

## Tasks

### [ ] Plan Site Map

- about/       (Bio & about Me)
- archive/     (Previous pages)
- categories/  (Articles by category, year, etc.)
- feed.xml     (Atom/RSS feed of articles)
- index        (Front Page)
- robots.txt   (Needed?)
- sitemap.xml  (TODO: generate this)

### [ Deal with obsolete directories/files

- assets/      (TODO move this elsewhere)
- generated/

* [ ] Plan Site Look and Feel
* [ ] Add static search to build
* [ ] Add a project Gallery
* [ ] Add a new bio page
* [ ] Looks like the archiving by date & tag was an octopress thing - remove it or recreate it
* [ ] New logo?
* [ ] Implement TAGS?
* [ ] Related Posts
** Page Layouts

## Default

```
---------------------------------------------------------------------------------------------------
Comanche Hill                                                                         {feed link}
Site Slogan        About Me  Projects  Article Archive  Categories        [______________] Search
---------------------------------------------------------------------------------------------------

<Content>

---------------------------------------------------------------------------------------------------
 Proudly published with Jekyll                                         Copyright Notice
---------------------------------------------------------------------------------------------------
```

### Article List

Used in the index page, year archive, category listing

### Article Snippet

```
---------------------------------------------------------------------------------------------------
_Article Title_
Article text snippet

publish date

---------------------------------------------------------------------------------------------------
```

### Article

```
---------------------------------------------------------------------------------------------------
_Article Title_
(photo) Author on Date

Article Text

(Pic) Author            Share icons
Published Date

Disqus Comments

---------------------------------------------------------------------------------------------------
```

### Page

```
---------------------------------------------------------------------------------------------------
_Page Title_
(photo) Author on Date

Article Text

(Pic) Author            Share icons
Published Date


---------------------------------------------------------------------------------------------------
```

### About

- Maybe get more creative on the layout for this page

```
---------------------------------------------------------------------------------------------------
_Page Title_
(photo) Author on Date

Article Text

---------------------------------------------------------------------------------------------------
```

### Project Gallery

- A grid of project tiles with links to project pages

```
---------------------------------------------------------------------------------------------------


---------------------------------------------------------------------------------------------------
```

# Plugins to add

* Full text search: https://github.com/PascalW/jekyll_indextank
* Sitemap.xml generator: https://github.com/kinnetica/jekyll-plugins
* Auto image: https://github.com/merlos/jekyll-auto-image
* https://github.com/samrayner/jekyll-asset-path-plugin
* https://github.com/tsmango/jekyll_flickr_set_tag
* https://github.com/rob-murray/jekyll-twitter-plugin
* https://github.com/scottwb/jekyll-tweet-tag
* youtube https://gist.github.com/joelverhagen/1805814
