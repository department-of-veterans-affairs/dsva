(function() {
  $(window).scroll(function() {
    var oVal;
    oVal = $(window).scrollTop() / 240;
    return $(".blur").css("opacity", oVal);
  });

}).call(this);
