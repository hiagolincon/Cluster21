$('.slideprev').slick({
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


// $('.slideprev').on('beforeChange', function(event, slick, currentSlide, nextSlide){
//   var current = $('.slideprev .slick-slide')[currentSlide];
//   $('.modalVideo2 img').attr('src',$(current).data('video'));
  
// });



// $('.slideprev').on('afterChange', function(event, slick, currentSlide){
//     console.log(currentSlide);
        
// });


// function mostrar_abas(obj) {
    
//   document.getElementById('div_aba1').style.display="none";
//   document.getElementById('div_aba2').style.display="none";
//   document.getElementById('div_aba3').style.display="none";
//   document.getElementById('div_aba4').style.display="none";
//   document.getElementById('div_aba5').style.display="none";
//   document.getElementById('div_aba6').style.display="none";
  


// switch (obj.id) {
//   case 'mostra_aba1':
//   document.getElementById('div_aba1').style.display="block";
//   document.getElementById('li-1').classList.add('active');
//   document.getElementById('li-2').classList.remove('active');
//   document.getElementById('li-3').classList.remove('active');
//   document.getElementById('li-4').classList.remove('active');
//   document.getElementById('li-5').classList.remove('active');
//   document.getElementById('li-6').classList.remove('active');
  
  
//   break
//   case 'mostra_aba2':
//   document.getElementById('div_aba2').style.display="block";
//   document.getElementById('li-1').classList.remove('active');
//   document.getElementById('li-2').classList.add('active');
//   document.getElementById('li-3').classList.remove('active');
//   document.getElementById('li-4').classList.remove('active');
//   document.getElementById('li-5').classList.remove('active');
//   document.getElementById('li-6').classList.remove('active');
  

//   break
//   case 'mostra_aba3':
//   document.getElementById('div_aba3').style.display="block";
//   document.getElementById('li-1').classList.remove('active');
//   document.getElementById('li-2').classList.remove('active');
//   document.getElementById('li-3').classList.add('active');
//   document.getElementById('li-4').classList.remove('active');
//   document.getElementById('li-5').classList.remove('active');
//   document.getElementById('li-6').classList.remove('active');
  
//   break
//   case 'mostra_aba4':
//   document.getElementById('div_aba4').style.display="block";
//   document.getElementById('li-1').classList.remove('active');
//   document.getElementById('li-2').classList.remove('active');
//   document.getElementById('li-3').classList.remove('active');
//   document.getElementById('li-4').classList.add('active');
//   document.getElementById('li-5').classList.remove('active');
//   document.getElementById('li-6').classList.remove('active');
  
//   break
//   case 'mostra_aba5':
//   document.getElementById('div_aba5').style.display="block";
//   document.getElementById('li-1').classList.remove('active');
//   document.getElementById('li-2').classList.remove('active');
//   document.getElementById('li-3').classList.remove('active');
//   document.getElementById('li-4').classList.remove('active');
//   document.getElementById('li-5').classList.add('active');
//   document.getElementById('li-6').classList.remove('active');
  
//   break
//   case 'mostra_aba6':
//   document.getElementById('div_aba6').style.display="block";
//   document.getElementById('li-1').classList.remove('active');
//   document.getElementById('li-2').classList.remove('active');
//   document.getElementById('li-3').classList.remove('active');
//   document.getElementById('li-4').classList.remove('active');
//   document.getElementById('li-5').classList.remove('active');
//   document.getElementById('li-6').classList.add('active');
  
//   break
  
// }
// } 




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