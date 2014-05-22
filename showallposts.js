(function ($) {
	
$.fn.showAllPosts = function() {
	var $container = $(this);
	var $containerID = '#' + $container.attr('id');
	// Current URL
	var $currurl = window.location.protocol + '//' + document.location.hostname + document.location.pathname ;
	// Valid url
	var $validurl = window.location.protocol + '//' + document.location.hostname + '/';
	// If we get on a pagination page, for example 'http://laurensmartin.tumblr.com/page/4', redirect
	if ($currurl.match('/page/')) {
		window.location = $validurl;
	}
  	// Let the pagination begin
  	else if ($currurl == $validurl) {					
		// As we're at the root, page with the rest of our posts will be 2
		var $next = 2;
		function loadBatch() {
			var $pagepath = 'page/';
			var $toLoad = $pagepath + $next;
			$.ajax({
   				url: $toLoad,
   				type: 'GET',
  				success: function(data){
					var $hasPosts = $(data).find('.posts-checker').length;
					if ($hasPosts) {
						var $batch = $(data).find($containerID).html();
						
       					$($batch).appendTo($containerID);
						$next++;
						loadBatch();
					} else {
						return false;
					}
   				}
			});
		}	
		loadBatch();
	}
	return this;
};
	
}(jQuery));