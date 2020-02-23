
$(document).ready(function () {

    wow = new WOW( {
        animateClass: 'animated',
        offset:       100
    });
    wow.init();

    $(function(){
        $('.chart').easyPieChart({
            size:80,
            barColor: '#CF3736',
            scaleColor: false,
            lineWidth: 4,
            lineCap: 'circle',
        })
    });

    $('.slide-depoimento').slick({
        prevArrow: "<button type=\"button\" class=\"btn btn-red slick-prev\"><i class='fas fa-long-arrow-alt-left'></i></button>",
        nextArrow: "<button type=\"button\" class=\"btn btn-red slick-next\"><i class='fas fa-long-arrow-alt-right'></i></button>"
    });
   
    $('.p-freq').slick({
        slidesToShow: 6,
        slidesToScroll: 6,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true
                    
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ],
        prevArrow: "<button type=\"button\" class=\"btn btn-red slick-prev\"><i class='fas fa-long-arrow-alt-left'></i></button>",
        nextArrow: "<button type=\"button\" class=\"btn btn-red slick-next\"><i class='fas fa-long-arrow-alt-right'></i></button>"
    });
    $(".customTab a").click(function() {
        var parent = $(this).parents('.customTab').children('li').children('a[data-tag="'+$(this).data('tag')+'"]');
        $(".customTab a").removeClass("activelink");
        $('.selected-tab').hide();
        var i = parent.parents('li').children('.selected-tab');
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

    $('.read-more').click(function() {
        var parent = $(this).parents('.card');
        var container = parent.children('.read-container');
        container.css({
            overflow: 'auto'
        });
    });
    $(".customTab a").click(function() {
        var parent = $(this).parents('.customTab').children('li').children('a[data-tag="'+$(this).data('tag')+'"]');
        $(".customTab a").removeClass("activelink");
        $('.selected-tab').hide();
        var i = parent.parents('li').children('.selected-tab');
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

    $($($('.customTab .clickme .activelink').parents('.clickme')).children('.selected-tab')).show();

    $('.slide-depoimento').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        var current = $('.slide-depoimento .slick-slide')[currentSlide];
        $('.modalVideo2 iframe').attr('src',$(current).data('video'));
        $('#video img').attr('src',$(current).data('image'));
    });
});