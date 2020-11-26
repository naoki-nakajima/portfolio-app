$(function() {
  var offset = $('.header').offset();

  $(window).scroll(function() {
    if ($(window).scrollTop() > offset.top) {
      $('.header').addClass('h_fixed');
    }
    else {
      $('.header').removeClass('h_fixed');
    }
  });
});
