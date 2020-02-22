
//SLIDE

$('.slider-single').slick({
  infinite:false,
    initialSlide: 3,
    slidesToShow: 3,
    centerMode: true,
    speed: 100,
    focusOnSelect: true,
    prevArrow: "<button type=\"button\" class=\"btn btn-red position-prev slick-prev\"><i class='fas fa-long-arrow-alt-left'></i></button>",
    nextArrow: "<button type=\"button\" class=\"btn btn-red position-next slick-next\"><i class='fas fa-long-arrow-alt-right'></i></button>",
    zindex: 100,
    setPosition: 'absolute'
  });
  
   $('.slider-nav')
     .on('init', function(event, slick) {
       $('.slider-nav .slick-slide.slick-current').addClass('is-active');
     })
     .slick({
       slidesToShow: 1,
       dots: false,
       focusOnSelect: false,
       infinite: false,
       arrows : false,
       responsive: [{
         breakpoint: 1024,
         settings: {
           slidesToShow: 5,
           slidesToScroll: 5,
         }
       }, {
         breakpoint: 640,
         settings: {
           slidesToShow: 4,
           slidesToScroll: 4,
        }
       }, {
         breakpoint: 420,
         settings: {
           slidesToShow: 3,
           slidesToScroll: 3,
      }
       }]
     });
  
   $('.slider-single').on('afterChange', function(event, slick, currentSlide) {
     $('.slider-nav').slick('slickGoTo', currentSlide);
     var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
     $('.slider-nav .slick-slide.is-active').removeClass('is-active');
     $(currrentNavSlideElem).addClass('is-active');
   });
  
   $('.slider-nav').on('click', '.slick-slide', function(event) {
     event.preventDefault();
     var goToSingleSlide = $(this).data('slick-index');
  
     $('.slider-single').slick('slickGoTo', goToSingleSlide);
   });

