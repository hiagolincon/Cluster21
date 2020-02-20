$('.slideprev').slick({
  infinite:false,
  initialSlide: 3,
  slidesToShow: 3,
  centerMode: true,
  speed: 100,
  prevArrow: "<button type=\"button\" class=\"btn btn-red position-prev slick-prev\"><i class='fas fa-long-arrow-alt-left'></i></button>",
  nextArrow: "<button type=\"button\" class=\"btn btn-red position-next slick-next\"><i class='fas fa-long-arrow-alt-right'></i></button>",
  zindex: 100,
  setPosition: 'absolute'
});
