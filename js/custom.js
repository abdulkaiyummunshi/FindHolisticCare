(function ($) {
    "use strict";
    var windowOn = $(window);
    $(document).ready(function () {
        windowOn.on('load', function () {
        });
        
        //>> Mobile Menu Js Start <<//
        $('#mobile-menu').meanmenu({
            meanMenuContainer: '.mobile-menu',
            meanScreenWidth: "1199",
            meanExpand: ['<i class="far fa-plus"></i>'],
        });

        //>> Sidebar Toggle Js Start <<//
        $(".offcanvas__close,.offcanvas__overlay").on("click", function () {
            $(".offcanvas__info").removeClass("info-open");
            $(".offcanvas__overlay").removeClass("overlay-open");
        });
        $(".sidebar__toggle").on("click", function () {
            $(".offcanvas__info").addClass("info-open");
            $(".offcanvas__overlay").addClass("overlay-open");
        });

        //>> Body Overlay Js Start <<//
        $(".body-overlay").on("click", function () {
            $(".offcanvas__area").removeClass("offcanvas-opened");
            $(".df-search-area").removeClass("opened");;
            $(".body-overlay").removeClass("opened");
        });


        //>> Sticky Menu <<//
        windowOn.on('scroll', function () {
            var scroll = windowOn.scrollTop();
            if (scroll < 300) {
                $("#tk_header_sticky").removeClass("tk_sticky_top");
            } else {
                $("#tk_header_sticky").addClass("tk_sticky_top");
            }
        });


        //>> offcanvas bar <<//
        $(".tp-offcanvas-toogle").on('click', function () {
            $(".tp-offcanvas").addClass("tp-offcanvas-open");
            $(".tp-offcanvas-overlay").addClass("tp-offcanvas-overlay-open");
        });
        $(".tp-offcanvas-close-toggle,.tp-offcanvas-overlay").on('click', function () {
            $(".tp-offcanvas").removeClass("tp-offcanvas-open");
            $(".tp-offcanvas-overlay").removeClass("tp-offcanvas-overlay-open");
        });

      
        gsap.registerPlugin(ScrollSmoother, ScrollTrigger, SplitText);

        ScrollSmoother.create({
            wrapper: "#smooth-wrapper",
            content: "#smooth-content",
            smooth: 1.3,
            effects: true,
            smoothTouch: 0.1,
        });
    
        $('select').niceSelect();
        
    });

})(jQuery);

