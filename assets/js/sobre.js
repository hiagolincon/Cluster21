$('.slideprev').slick({
  infinite:false,
  initialSlide: 3,
  slidesToShow: 3,
  centerMode: true,
  speed: 100,
  prevArrow: "<button type=\"button\" class=\"btn btn-red position-prev slick-prev\"><i class='fas fa-long-arrow-alt-left'></i></button>",
  nextArrow: "<button onclick=\"nextBtn()\" type=\"button\" class=\"btn btn-red position-next slick-next\"><i class='fas fa-long-arrow-alt-right'></i></button>",
  zindex: 100,
  setPosition: 'absolute'
});

// var li_1 = document.getElementById('li-1');
// var li_2 = document.getElementById('li-2');
// var li_3 = document.getElementById('li-3');
// var li_4 = document.getElementById('li-4');
// var li_5 = document.getElementById('li-5');
// var li_6 = document.getElementById('li-6');
// var div_1 = document.getElementById('div-1');
// var div_2 = document.getElementById('div-2');
// var div_3 = document.getElementById('div-3');
// var div_4 = document.getElementById('div-4');
// var div_5 = document.getElementById('div-5');
// var div_6 = document.getElementById('div-6');

// import css from '../scss/pages/_sobre.scss';



// prevBtn = () => {

// }

// nextBtn = () => {
//   const centerMode = slick.centerMode;
//   const { ...data } = document.querySelectorAll('slideprev');

//   if( centerMode === data) return;
//   else{
//     return centerMode + 1;
//   }
// }

// nextBtn();