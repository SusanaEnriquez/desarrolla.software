//By Luca Moser
//https://codepen.io/XemsDoom/pen/uzoaD

var currentCallback;

window.alert = function (msg, callback) {
  $('.message').html(msg);
  $('.customAlertContainer').css('display', 'flex');
  $('.customAlert').css('animation', 'fadeIn 0.3s linear');
  $('.customAlert').css('display', 'inline-block');
  setTimeout(function () {
    $('.customAlert').css('animation', 'none');
  }, 300);
  currentCallback = callback;
}

$(function () {
  $('.confirmButton').click(function () {
    $('.customAlert').css('animation', 'fadeOut 0.3s linear');
    setTimeout(function () {
      $('.customAlertContainer').css('display', 'none');
      $('.customAlert').css('animation', 'none');
      $('.customAlert').css('display', 'none');
    }, 300);
    if(currentCallback) {
      currentCallback();
    }
  });
});