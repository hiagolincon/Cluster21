wow = new WOW(
    {
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
    }
)
wow.init();
$(document).ready(function () {

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
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
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
        var i = parent.parents('li').index();
        if (i == 0) {
            $('.selected-tab').css({
                marginLeft: '12.5%'
            });
        } else if (i == 1){
            $('.selected-tab').css({
                marginLeft: '41%'
            });
        } else {
            $('.selected-tab').css({
                marginLeft: '71%'
            });
        }

        $(".customTab a").removeClass("activelink");
        $(this).addClass("activelink");
        var tagid = $(this).data("tag");
        $(".list")
            .removeClass("active")
            .addClass("hide");
        $("#" + tagid)
            .addClass("active")
            .removeClass("hide");
    });
});