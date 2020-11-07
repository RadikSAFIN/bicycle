//SLIDERS
if($('.twitter__inner').length>0) {
    $('.twitter__inner').slick({
        //autoPlay: true,
        //infinite: false,
        dots: true,
        arrows: false,
        accessibility: false,
        sliderToShow: 1,
        autoplaySpeed: 3000,
        adaptiveHeight: true,
        nextArrow:'<button type="button" class="slick-next"></button>',
        prevArrow:'<button type="button" class="slick-prev"></button>',
        responsive: [{
            breakpoint: 768,
            settings: {}
        }]
    });
}
