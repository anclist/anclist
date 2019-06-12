// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require jquery3
//= require popper
//= require bootstrap-sprockets
//= require_tree .

// Set the height of the first jumbotron at the diferrence of the window size minus the navbars height

$(function() {
  var $firstNavHeight = $('#fisrt-navbar').outerHeight(true);
  var $secondNavHeight = $('#second-navbar').outerHeight(true);
  var $mainJumbotron = $('#home-jumbotron');
  var $windowHeight = $(window).height();


    $(document).ready(function() {
      modHeight = $windowHeight - ($firstNavHeight + $secondNavHeight);
      $mainJumbotron.outerHeight(modHeight)
  });
});

// End of Set the height of the first jumbotron at the diferrence of the window size minus the navbars height

// scroll functions navbar disapear when scrolling
$(window).scroll(function(e) {

    // add/remove class to navbar when scrolling to hide/show
    var scroll = $(window).scrollTop();
    if (scroll >= 160) {
        $('.first-navbar').addClass("navbar-hide");
    } else {
        $('.first-navbar').removeClass("navbar-hide");
    }

});

// End of scroll functions navbar disapear when scrolling


// scroll functions navbar disapear when scrolling
$(window).scroll(function(e) {

    // add/remove class to navbar when scrolling to hide/show
    var scroll = $(window).scrollTop();
    if (scroll >= 150) {
        $('.second-navbar').addClass("navbar-fade");
    } else {
        $('.second-navbar').removeClass("navbar-fade");
    }

});

// End of scroll functions navbar disapear when scrolling

// Tech stack cards slide up as user scrolls
(function($) {
  $.fn.visible = function(partial) {

      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;

    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
  };

})(jQuery);

$(window).scroll(function(event) {

  $(".card").each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in");
    }
  });

});

var win = $(window);
var allMods = $(".card");

// Already visible modules
allMods.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible");
  }
});

win.scroll(function(event) {

  allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in");
    }
  });

});
// End of Tech stack cards slide up as user scrolls
