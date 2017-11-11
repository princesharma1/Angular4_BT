$(document).ready(function(){
  $('.hamburger').click(function(){
        $(this).toggleClass('change');
        $('.bt-dropdown_nav_container').toggleClass('displayToggle');
  })

  
  var swiper =  new Swiper('.bt_nav_section .swiper-container', {
    slidesPerView: 'auto',     
        spaceBetween: 20
        //loop: true
    });
 


})


setTimeout(aaa,4000);       

function aaa(){
      var swiper = new Swiper('.businesstoday_video .swiper-container', {
        pagination: '.businesstoday_video .swiper-pagination',
        effect: 'cube',
        grabCursor: true,
        cube: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94
        }

  });

  var swiper =  new Swiper('.businesstoday_photo .swiper-container', {
        pagination: '.businesstoday_photo .swiper-pagination',
        effect: 'cube',
        grabCursor: true,
        cube: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94
        }
});


}


//  var swiper = new Swiper('.businesstoday_photo .swiper-container', {
//         pagination: '.businesstoday_photo .swiper-pagination',
//         effect: 'cube',
//         grabCursor: true,
//         cube: {
//             shadow: true,
//             slideShadows: true,
//             shadowOffset: 20,
//             shadowScale: 0.94
//         }
// });
//  var swiper = new Swiper('.businesstoday_video .swiper-container', {
//         pagination: '.businesstoday_video .swiper-pagination',
//         effect: 'cube',
//         grabCursor: true,
//         cube: {
//             shadow: true,
//             slideShadows: true,
//             shadowOffset: 20,
//             shadowScale: 0.94
//         }
// });

//   var swiper = new Swiper('.bt_nav_section .swiper-container', {
//     slidesPerView: 'auto',     
//         spaceBetween: 20
//         //loop: true
//     });
  
