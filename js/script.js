$(document).ready(function() {

    $('.icon-menu').click(function(event) {
        $(this).toggleClass('active');
        $('.menu__body').toggleClass('active');
    });

function ibg(){

$.each($('.ibg'), function(index, val) {
if($(this).find('img').length>0){
$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
}
});
}

ibg();
    
        /* Smooth scroll */

    $("[data-scroll]").on("click", function(Event) {
        Event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        $('.menu__body').removeClass("active");
        $('.icon-menu').removeClass("active");
        
        $("html, body").animate({
            scrollTop: elementOffset -69
        }, 700);
    });
    
        
        /* Fixed Header */
    
    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav");
    let navToggle = $("#navToggle");
    
    checkScroll(scrollPos, introH);
    
    $(window).on("scroll resize", function() {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, introH);
    });

    function checkScroll(scrollPos, introH) {
        if( scrollPos > introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    };

});

