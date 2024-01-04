/** @format */

$(function () {
  //main_visual
  // var swiper = new Swiper('.main_visual', {
  //   spaceBetween: 30,
  //   loop: true,
  //   effect: 'fade',
  //   autoplay: {
  //     delay: 2000,
  //     disableOnInteraction: false,
  //   },
  // });
  let i = 0;
  function slide(){
    if(i >= 3){
      i = 0;
    } else {
      i++;
    };
    $(".main_visual .swiper-slide").fadeOut(4000);
    $(".main_visual .swiper-slide").eq(i).fadeIn(4000);
  };
  setInterval(slide, 10000)

  //promotion
   let Width = 800;
  let screenWidth = $(window).width();
  if (screenWidth < Width) {
    var swiper = new Swiper(".event_slide", {
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      },
    });
    var swiper = new Swiper(".sns_img", {
      effect: "cards",
      grabCursor: true,
      loop: true,
    });
  } else {
  var swiper = new Swiper('.event_slide', {
    slidesPerView: 2,
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
};//else
});
