$(document).ready(function () {
    var parent = $('.customTab .clickme a.activelink');
    var i = parent.parents('.clickme').children('div').children('.selected-tab');
    i.show();

    wow = new WOW({
        animateClass: 'animated',
        offset: 100
    });
    wow.init();

    function slickify() {
        $('.customTab').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            mobileFirst: true,
            infinite: false,
            arrows: false,
            centerMode: true,
            // prevArrow: "<button type=\"button\" class=\"btn btn-red prev mx-auto\"><i class='fas fa-long-arrow-alt-left'></i></button>",
            // nextArrow: "<button type=\"button\" class=\"btn btn-red next mx-auto\"><i class='fas fa-long-arrow-alt-right'></i></button>",
            responsive: [{
                breakpoint: 900,
                settings: 'unslick'
            }]
        });
        $('.customTab').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            var current = $('.customTab .clickme')[nextSlide];
            // $(".customTab a").removeClass("activelink");
            var tabLink = $(current).children('a');
            $(tabLink).trigger('click');

        });
    }

    slickify();
    $(window).resize(function () {
        var $windowWidth = $(window).width();
        if ($windowWidth < 900) {
            slickify();
        }
    });

    $(function () {
        $('.chart').easyPieChart({
            size: 80,
            barColor: '#CF3736',
            scaleColor: false,
            lineWidth: 4,
            lineCap: 'circle',
        })
    });

    $('.slide-depoimento').slick({
        prevArrow: $('#depoimentos_container .prev'),
        nextArrow: $('#depoimentos_container .next')
    });

    $('.p-freq').slick({
        slidesToShow: 3,
        initialSlide: 1,
        slidesToScroll: 3,
        infinite: true,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ],
        prevArrow: $('.container-faq .prev'),
        nextArrow: $('.container-faq .next')
    });
    $(".customTab a").click(function () {
        var parent = $(this).parents('.customTab').children('li').children('a[data-tag="' + $(this).data('tag') + '"]');
        $(".customTab a").removeClass("activelink");
        $('.selected-tab').hide();
        var i = parent.parents('.clickme').children('.selected-tab');
        i.show();

        $(this).addClass("activelink");
        var tagid = $(this).data("tag");
        $(".list")
            .removeClass("active")
            .addClass("hide");
        $("#" + tagid)
            .addClass("active")
            .removeClass("hide");
    });

    $('.read-more').click(function () {
        var parent = $(this).parents('.card');
        var container = parent.children('.read-container');

        container.css({
            overflow: 'auto'
        });
        parent.children('.gradient').remove();
    });


    $(".customTab .clickme").click(function (e) {
        var parent = $(this).children('a');
        $(".customTab a").removeClass("activelink");
        $('.selected-tab').hide();
        var i = parent.parents('.clickme').children('div').children('.selected-tab');
        i.show();
        $(parent).addClass("activelink");
        var tagid = $(parent).data("tag");

        $(".list")
            .removeClass("active")
            .addClass("hide");
        $("#" + tagid)
            .addClass("active")
            .removeClass("hide");
    });

    $($($('.customTab .clickme .activelink').parents('.clickme')).children('.selected-tab')).show();

    $('.slide-depoimento').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        var current = $('.slide-depoimento .slick-slide')[currentSlide];
        $('.modalVideo2 iframe').attr('src', $(current).data('video'));
        $('#video img').attr('src', $(current).data('image'));
    });
});