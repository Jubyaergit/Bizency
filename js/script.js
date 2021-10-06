$(".slider").slick({
  arrows: true,
  dots: false,
  slidesToShow: 2,
  speed: 500,
  nextArrow: '<i class="fas fa-angle-right next"></i>',
  prevArrow: '<i class="fas fa-angle-left prev"></i>',
});

$(".slide").slick({
  arrows: false,
  dots: false,
  slidesToShow: 3,
  speed: 500,
});

// $(".click").click(function(){
//   $(".menu").fadeToggle();
  
// });


$(".portfolio-slide").slick({
  arrows: true,
  dots: false,
  slidesToShow: 3,
  speed: 500,
  nextArrow: '<i class="fas fa-angle-right next1"></i>',
  prevArrow: '<i class="fas fa-angle-left prev1"></i>',
});

$(".click").click(function(){
  $(".menu").fadeToggle();
});
