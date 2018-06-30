AOS.init({
  duration: 1000,
  easing: 'ease-in',
});

$(document).ready(function() {
  $('#menu-toggle').click(function() {
    $('#menu').addClass('opened');
    return false;
  });
  $('body').click(function() {
    $('#menu').removeClass('opened');
  })
});

