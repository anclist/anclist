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
 var firstNavbar = $("#fisrt-navbar");

 $(function() {
   $("body").click(function(e) {
     if (e.target.id == "fisrt-navbar" || $(e.target).parents("#fisrt-navbar").length) {
       firstNavbar.addClass("show-side-bar");
     } else {
       firstNavbar.removeClass("show-side-bar");
     }
   });
 })
 // End of Show or hide social media navbar


// Scrollify setup and navigation

$(function () {
  $.scrollify({
      section : ".section",
      sectionName : "section-name",
      interstitialSection : ".footer",
      easing: "easeOutExpo",
      scrollSpeed: 1100,
      offset : 0,
      scrollbars: true,
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


  $("#logo-link, #home-link, #back-to-top").click(function(e){
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
