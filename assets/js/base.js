/*
 *   Cengiz Akcan
 *   webdetv.net
 *   4.2.2016 18:47
 **/

$(function(){


    $(window).scroll(function () {
        var sc = $(window).scrollTop()
        if (sc > 55) {
            $(".oneheader").addClass("oneheadertop")
            $(".logst").addClass("oneheadertoplogo")
        } else {
            $(".oneheader").removeClass("oneheadertop")
            $(".logst").removeClass("oneheadertoplogo")

        }
    });



    /*
    *
    *
    * Htl And Yorum in div scrool effect
    *
    * */
    $('.yorums').niceScroll();
    $('html').niceScroll();


    /*
    *
    * Scrool Speed Effect
    *
    * */
    jQuery.scrollSpeed(100, 800);


    /*
    *
    * Search Toggle
    *
    * */
    $(".searchtogle").click(function(){

        $(".searchinputbase").toggleClass("opensearch");

    });

    /*
    *
    * Categori Toggle
    *
    * */
    $(".categoritoggle").click(function(){

        $(".threeheader").slideToggle("fast");

    });



    /*
    *
    * Owl Slider Categori
    *
    * */

    var category_slider     = $("#owlslidercategori");
    var home_slider         = $("#sldieric");

    category_slider.owlCarousel({

        navigation : false,
        items : 8,

    });

    home_slider.owlCarousel({

        navigation : false,
        singleItem:true,
        items : 1,
        slideSpeed : 900

    });


    /*
     *
     * category_slider Slide Left
     *
     * */
    $(".slideleftbutton").click(function(){

        category_slider.trigger('owl.prev');

    });

    /*
     *
     * category_slider Slide Left
     *
     * */
    $(".sliderightbutton").click(function(){

        category_slider.trigger('owl.next');

    });

    /*
     *
     * home_slider Slide Left
     *
     * */
    $(".homesliderleft").click(function(){

        home_slider.trigger('owl.prev');

    });

    /*
     *
     * home_slider Slide Left
     *
     * */
    $(".homesliderright").click(function(){

        home_slider.trigger('owl.next');

    });


});