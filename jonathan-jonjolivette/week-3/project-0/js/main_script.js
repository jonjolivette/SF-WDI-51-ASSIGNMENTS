/* ----------------------------------------------------------------------------------------
~ Author        : Jonathan Jolivette | General Assembly | Adobe Digital Academy
~ Title         : Project 0 | Personal Portfolio Website | General Assembly S.E.I. -51 Course
~ Created       : Feb. 8 2019
~ Last Modified : Feb 10 2019
-------------------------------------------------------------------------------------- */

(function ($) {
    'use strict';

    $(document).ready(function () {

        /*  -------------------------------------------------------------------------  *
         *                   01. change Menu background on scroll down                 *
         *  -------------------------------------------------------------------------  */
          $(window).on('scroll', function () {
              var menu_area = $('.menu-area');
              if ($(window).scrollTop() > 200) {
                  menu_area.addClass('sticky-menu');
              } else {
                  menu_area.removeClass('sticky-menu');
              }
          });


        /*  -------------------------------------------------------------------------  *
         *                   02. Navigation js                                         *
         *  -------------------------------------------------------------------------  */
          $(document).on('click', '.navbar-collapse.in', function (e) {
              if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
                  $(this).collapse('hide');
              }
          });

          $('body').scrollspy({
              target: '.navbar-collapse',
              offset: 195
          });

        /*  -------------------------------------------------------------------------  *
         *                  03. Testimonial js                                         *
         *  -------------------------------------------------------------------------  */
          $(".testimonial-list").owlCarousel({
              items: 2,
              autoPlay: true,
              navigation: true,
              itemsDesktop: [1199, 2],
              itemsDesktopSmall: [980, 1],
              itemsTablet: [768, 1],
              itemsTabletSmall: false,
              itemsMobile: [479, 1],
              pagination: false,
              autoHeight: true,
              navigationText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
          });

    }); //Conclusion document.ready

    // Open the Modal
function openModal() {
  document.getElementById('myModal').style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

})(jQuery);
