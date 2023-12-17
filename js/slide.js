/** @format */

$(function () {
  //main_visual
  var swiper = new Swiper('.main_visual', {
    spaceBetween: 30,
    loop: true,
    effect: 'fade',
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
  //promotion
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
});
