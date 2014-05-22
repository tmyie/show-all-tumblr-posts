# Show all Tumblr posts on one page

Small jQuery plugin to display all your Tumblr posts on one page (instead of a maximum of 15 posts).
Currently not really an alternative to infinite scrolling plugins, as this loads all posts ever posted in one go, instead of bit by bit when scrolling.

Useful for some specific purposes, like displaying a lot of short text posts on one page.

## Install

Before you begin: this plugin will not work with all Tumblr themes. If you find it doesn't work with yours, let me know and provide a link to the download page of the theme you're using so I can have a look and improve the code of this plugin. 

Load both jQuery (atleast, if your Tumblr theme isn't using it yet) and ```showallposts.js ``` into your theme. You can upload that on Tumblr http://www.tumblr.com/themes/upload_static_file or just use this:

``` html

<script src="http://static.tumblr.com/bdgkd81/mLan5z1f0/showallposts.js"></script>
```

To initialize, add this piece of code within a ``` <script> ``` tag. 	

``` js

$(function(){
	$('#posts-container').showAllPosts();
});
```

Replace ``` #posts-container ``` with whatever the ID is of the container (div) *all* your posts are placed in. This container should be always be somewhere before ``` {block:Posts} ``` in the html.

