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
//= require jquery-scrollify
//= require popper
//= require bootstrap-sprockets
//= require_tree .


$(document).ready(function() {

  // Navbar fades color when scrolling
 $(window).scroll(function(e) {
  // add/remove class to navbar when scrolling to hide/show
  var scroll = $(window).scrollTop();
  if (scroll >= 2) {
   $('#second-navbar').addClass("navbar-fade");
  } else {
   $('#second-navbar').removeClass("navbar-fade");
  }
 });
 // End of Navbar fades color when scrolling



 // Show or hide social media navbar
 var socialToggle = $("#social-toggle");
 var firstNavbar = $("#fisrt-navbar");
 var closeSocial = $("#close-social-icons");


 socialToggle.click(function(e) {
  e.preventDefault();
  firstNavbar.toggleClass("show-side-bar");
 });
 closeSocial.click(function(e) {
  e.preventDefault();
  firstNavbar.toggleClass("show-side-bar");
 });
 // End of Show or hide social media navbar

// Toggle social animation every 5 seconds
 setInterval(function(){
   // toggle the class every five second
   $('#social-toggle').toggleClass('animated swing bigger-social');
   setTimeout(function(){
     // toggle back after 1 second
     $('#social-toggle').toggleClass('animated swing bigger-social');
   },2000);
},5000);
// End of Toggle social animation every 5 seconds

// Scrollify setup and navigation

$(function () {
  $.scrollify({
      section : ".section",
      sectionName : "section-name",
      interstitialSection : ".footer",
      easing: "easeOutExpo",
      scrollSpeed: 1100,
      offset : 0,
      scrollbars: false,
      standardScrollElements: "",
      setHeights: true,
      overflowScroll: true,
      updateHash: true,
      touchScroll:true,
      before:function() {},
      after:function() {},
      afterResize:function() {},
      afterRender:function() {}
    });
});

  $("#home-link").click(function(e){
     e.preventDefault()
     $.scrollify.move(0);
  });

  $("#tech-link").click(function(e){
     e.preventDefault()
     $.scrollify.move(1);
  });

  $("#projects-link").click(function(e){
     e.preventDefault()
     $.scrollify.move(2);
  });

  $("#about-link").click(function(e){
     e.preventDefault()
     $.scrollify.move(3);
  });
  // End of Scrollify setup and navigation

});
