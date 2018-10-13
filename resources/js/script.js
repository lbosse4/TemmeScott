$(document).ready(function() {
    
    /* Mobile navigation */
    /*
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        
        if (icon.hasClass('fa-bars')) {
            icon.addClass('fa-times');
            icon.removeClass('fa-bars');
        } else {
            icon.addClass('fa-bars');
            icon.removeClass('fa-times');
        }        
    });*/
    
    /*
    
    <button onclick="document.getElementById('picture-modal').style.display='block'; 
     document.getElementById('modal-image').src='resources/img/temme-vertical-6-min.jpg'; 
     document.getElementById('modal-figure').classList.remove('horizontal-photo');  
     document.getElementById('modal-figure').classList.add('vertical-photo');
     document.getElementById('modal-caption').innerHTML='photo by Sean Poole';">
                                             
                                            */
    
    /* For click on photos grid */
    $('.js--horizontal-photo').click(function(){
        var imgsrc=$(this).attr('src'); 
        $('#picture-modal').css("display","block");
        $('#modal-image').attr("src", imgsrc);
        $('#modal-figure').removeClass('vertical-photo');
        $('#modal-figure').addClass('horizontal-photo');
        
        setArtistText(this);
    });
    
    $('.js--vertical-photo').click(function(){
        var imgsrc=$(this).attr('src'); 
        $('#picture-modal').css("display","block");
        $('#modal-image').attr("src", imgsrc);
        $('#modal-figure').removeClass('horizontal-photo');
        $('#modal-figure').addClass('vertical-photo');
        
        setArtistText(this);
    });
    
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
});

function setArtistText(thi){
    if ($(thi).hasClass('js--artist-poole')){
            $('#modal-caption').text("photo by Sean Poole");
        } else if ($(thi).hasClass('js--artist-fiske')){
            $('#modal-caption').text("photo by Lily Fiske");
        } else if ($(thi).hasClass('js--artist-chang')){
            $('#modal-caption').text("photo by Emil Chang");
        }
}

