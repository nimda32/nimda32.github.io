// http://codepen.io/upslon/pen/mEJyb


$(document).ready(function() {
  $(window).bind('scroll', function() {
    var navHeight = $(window).height() - 100;
    if ($(window).scrollTop() > navHeight) {
      $('nav').addClass('fixed');
    } else {
      $('nav').removeClass('fixed');
    }
  });

  var elements = document.querySelectorAll(".footer-nav a");
  var footer = document.getElementById("foot");
  var corpitcho = document.getElementsByTagName("body")[0];
  var lastTimeout = 0;

  Array.prototype.forEach.call(elements, function(el, i) {
    el.addEventListener("mouseover", function(e) {
      clearTimeout(lastTimeout);

      var color = event.currentTarget.getAttribute('data-color');
      event.currentTarget.classList.add("footer-nav-hover");
      footer.setAttribute("class", "footer-hover");
      corpitcho.setAttribute("style", "background-color:" + color + ";border-top:" + color);
    });
    el.addEventListener("mouseout", function(e) {
      var target = event.currentTarget.classList.remove("footer-nav-hover");
      lastTimeout = setTimeout(function() {
        footer.setAttribute("class", "");
        corpitcho.setAttribute("style", "");
      }, 100);
    });
  });
});
