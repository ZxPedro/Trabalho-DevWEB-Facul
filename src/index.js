$(window).scroll(function() {
  if ($(document).scrollTop() > 100) {
    $('header').addClass('smaller');
  } else {
    $('header').removeClass('smaller');
  }
});