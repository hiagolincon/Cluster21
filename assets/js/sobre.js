// $(function() {
//   $('.slick-carousel').slick({
//     centerMode: true,
//     centerPadding: '60px',
//     slidesToShow: 3,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           arrows: false,
//           centerMode: true,
//           centerPadding: '40px',
//           slidesToShow: 3
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           arrows: false,
//           centerMode: true,
//           centerPadding: '40px',
//           slidesToShow: 1
//         }
//       }
//     ]
//   });
  
//     $('.slick-item').on('click', function(e) {
//     e.preventDefault();
    
//     $("body").append(html);
    
//     return false;
//   });
  
// }); // (function)



//     $(document).ready(function(){
//      $('.slider').slick({
//   centerMode: true,
//   centerPadding: '60px',
//   slidesToShow: 3,
//   index: 2,
//   responsive: [
//     {
//       breakpoint: 768,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '40px',
//         slidesToShow: 3
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '40px',
//         slidesToShow: 1
//       }
//     }
//   ]
// });
//     });


$(".slider-area").slick({
  infinite:false,
  initialSlide: 3,
  slidesToShow: 5,
  slidesToSCroll: 5,
  centerMode: true,
  speed: 100,
  
})