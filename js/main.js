$(function(){
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("header").addClass("on")
    } else {
      $("header").removeClass("on");
    }
  });
});