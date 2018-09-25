$(document).ready(function() {
    
    /* For the sticky navigation */
    $('.js--content').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '135px;'
    });
    
    var $container = jQuery('#masonry-grid');
    
    $container.masonry({
      // options
      itemSelector: '.grid-item',
    }); 
});