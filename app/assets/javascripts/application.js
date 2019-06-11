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
