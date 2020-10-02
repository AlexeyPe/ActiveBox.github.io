$(function() {

    let header = $("#header");
    let intro = $("#intro");
    let introH;
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav");
    let navToggle = $("#navToggle");

    /* ===FIXED HEADER=== */
    $(window).on("scroll load resize", function() {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        if( scrollPos > introH - 70) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }

        console.log(scrollPos);
    });

    /* ===SMOOTH SCROLL=== */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        nav.removeClass("show");

        $("html, body").animate({
            scrollTop: elementOffset - 70
        }, 700);

        console.log(elementOffset);
    });

    /* ===SMOOTH SCROLL=== */
    navToggle.on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");
    });

    /* ===SMOOTH SCROLL=== (https://kenwheeler.github.io/slick/)*/
    let slider = $("#clientsSlider");


    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });

});
