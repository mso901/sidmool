/** @format */

$(function () {
  //main_visual
  // var swiper = new Swiper(".fade", {
  //   spaceBetween: 30,
  //   loop: true,
  //   effect: "fade",
  //   autoplay: {
  //     delay: 2000,
  //     disableOnInteraction: false,
  //   },
  // });

  // let i = 0;
  // function slide() {
  //   if (i >= 3) {
  //     i = 0;
  //   } else {
  //     i++;
  //   }
  //   $(".fade .swiper-slide").fadeOut(4000);
  //   $(".fade .swiper-slide").eq(i).fadeIn(3000);
  // }
  // setInterval(slide, 10000);

  //promotion
  let Width = 800;

  function applySwiper() {
    let screenWidth = $(window).width();
    if (screenWidth < Width) {
      var swiperEventSlide = new Swiper(".event_slide", {
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
        },
      });
      var swiperSnsImg = new Swiper(".sns_img", {
        effect: "cards",
        grabCursor: true,
        loop: true,
      });
      $(".recommend_list").slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
      });
    } else {
      var swiperEventSlide = new Swiper(".event_slide", {
        slidesPerView: 2,
        spaceBetween: 0,
        centeredSlides: true,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    } //else
  } //function

  applySwiper();

  $(window).resize(function () {
    applySwiper();
  }); //slide
});
