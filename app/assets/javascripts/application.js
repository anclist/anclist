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

// Navbar fades color when scrolling

$(document).ready(function() {

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

 // Jquey smooth scrolling

 // Select all links with hashes
 $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
   // On-page links
   if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
    location.hostname == this.hostname
   ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
     // Only prevent default if animation is actually gonna happen
     event.preventDefault();
     $('html, body').animate({
      scrollTop: target.offset().top
     }, 1000, function() {
      // Callback after animation
      // Must change focus!
      var $target = $(target);
      $target.focus();
      if ($target.is(":focus")) { // Checking if the target was focused
       return false;
      } else {
       $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
       $target.focus(); // Set focus again
      };
     });
    }
   }
  });
 // End of Jquey smooth scrolling

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

 // Hide navbar if clicked outside of it
 $(document).click(function (e)
                    {
  var container = firstNavbar; // YOUR CONTAINER SELECTOR

  if (!container.is(e.target) // if the target of the click isn't the container...
      && container.has(e.target).length === 0) // ... nor a descendant of the container
  {
    firstNavbar.removeClass("show-side-bar");
  }
});

 // End of Hide navbar if clicked outside of it
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

});
