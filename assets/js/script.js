$(document).ready(function () {
    let header = $("#header"),
        introH = $("#intro"),
        section = $("#section")
    scrollOffset = $(window).scrollTop();

    /* Fixed Header */
    $(window).on("scroll load resize", function () {
        introH = $("#intro").innerHeight();
        scrollOffset = $(this).scrollTop();
        
        checkScroll(scrollOffset, introH);
    });

    function checkScroll(scrollOffset, introH) {
        if (scrollOffset >= introH) {
            header.addClass("fixed");
           
        } else {
            header.removeClass("fixed");
            
        }
    }

    checkScroll(scrollOffset);

    /* Menu nav-toggle */
    $("#nav_toggle").on("click", function (event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });

    /* Smooth Scroll */
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        var blockId = $(this).data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    });

    /* Wow js animate */
    const animTitle = document.querySelectorAll(".animTitle");

    if (animTitle.length > 0) {
        window.addEventListener('scroll', animOnScroll);
        function animOnScroll () {
            for (let i = 0; i < animTitle.length; i++) {
                const animItem = animTitle[i];
                const animItemHeight = animItem.offsetHeight;
                const animItemOffset = offset(animItem).left;
                const animStart = 4;

                let animItemPoint = window.innerHeight - animItemHeight / animStart;
                if (animItemHeight > window.innerHeight) {
                    animItemPoint = window.innerHeight - window.innerHeight / animStart;
                }

                if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                    animItem.classList.add('active');
                } else {
                    animItem.classList.remove('active');
                }
            }
        }
        function offset (el) {
            const rect = el.getBoundingClientRect(),
                scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return {
                top: rect.top + scrollTop,
                left: rect.left + scrollLeft
            }
            
        }
        animOnScroll();
    }

    $(".info__slick").slick({
        inifnite: true,
        dots: true,
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        speed: 1500,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        autoplaySpeed: 1200,

        responsive: [
            {
                breakpoint: 768, settings: {
                    infinite: true,
                    dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    
                }
            }
        ],

    });

    $(".page").slick({
        arrows: true,
        dots: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        pauseOnHover: false,
        pauseOnFocus: false,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2200,
    });

    $('.reviews__items').slick({
        dots: true,
        slidesToScroll: 3,
        slidesToShow: 3,
        pauseOnHover: false,
        pauseOnFocus: false,
        speed: 1800,
        autoplay: true,
        autoplaySpeed: 1800,

        responsive: [
            {
                breakpoint: 991, settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 768, settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

});
