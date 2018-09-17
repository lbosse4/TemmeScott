$(document).ready(function() {
    
    var $container = jQuery('#masonry-grid');
    
    $container.masonry({
      // options
      itemSelector: '.grid-item',
      columnWidth: 200
    });
});