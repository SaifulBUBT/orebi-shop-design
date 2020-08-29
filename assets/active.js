$(document).ready(function () {

  $('.shop-slides').owlCarousel({ items: 4, nav: true, margin: 30, dots: false, autoplay: false, autoplayHoverPause: true, loop: true, navText: ["<i class='fas fa-long-arrow-alt-left'></i>", "<i class='fas fa-long-arrow-alt-right'></i>"], responsive: { 0: { items: 1 }, 650: { items: 2 }, 1000: { items: 4 } } });

  //category menu
  $('.btn').click(function () {
    $(this).toggleClass("click");
    $('.sidebar').toggleClass("show");
  });

  $('.feat-btn').click(function () {

    $(this).children("span.first").toggleClass("rotate");
    $(this).siblings("ul.feat-show").toggleClass("show");
  });

  $('nav ul li').click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });

});