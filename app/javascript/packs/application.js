/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

import Rails from 'rails-ujs';
import Turbolinks from 'turbolinks';
import 'bootstrap/dist/js/bootstrap';
import 'jquery-scrollify';
// import '../src/home.js';

Rails.start();
Turbolinks.start();

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
