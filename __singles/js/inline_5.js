function twoImgHolder() {
  $(".double-image").height($(".double-image").width() / 2);
}

$(document).ready(function() {

  $(".content a").each(function() {
    if ($(this).has("img").length) {
      var imgClass = $(this).children('img').attr('class');
      $(this).addClass('swipebox').attr('data-id', imgClass.replace(/\D/g, '')).attr('data-postname', 'Победа в SBID International Design Awards 2012!!!');
    }
  });

  var iter = 1;
  $('.double-image img').each(function() {
    $(this).addClass('image' + iter);
    if ($(this).width() > $(this).height()) {
      $(this).addClass('landscape');
    }
    iter++;
  });

  twoImgHolder();

});

$(window).resize(function() {
  twoImgHolder();
});
