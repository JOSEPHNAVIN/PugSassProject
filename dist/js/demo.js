"use strict";

console.log("Hello guys!");
console.log('Demo!');
$(window).scroll(function (e) {
  parallax();
});

function parallax() {
  var scrolled = $(window).scrollTop();
  $('.jumbotron').css('top', scrolled * 0.0150 + 'rem'); //PARALLAX INSIDE
  //$('.jumbotron > .jumbotron-content').css('top',-(scrolled*-0.040)+'rem');
  //$('.jumbotron > .jumbotron-content').css('opacity',1-(scrolled*.00275));
}

; //menu transition js

$(document).ready(function () {
  $(".toggle-accordion").on("click", function () {
    var accordionId = $(this).attr("accordion-id"),
        numPanelOpen = $(accordionId + ' .collapse.in').length;
    $(this).toggleClass("active");

    if (numPanelOpen == 0) {
      openAllPanels(accordionId);
    } else {
      closeAllPanels(accordionId);
    }
  });

  openAllPanels = function openAllPanels(aId) {
    console.log("setAllPanelOpen");
    $(aId + ' .panel-collapse:not(".in")').collapse('show');
  };

  closeAllPanels = function closeAllPanels(aId) {
    console.log("setAllPanelclose");
    $(aId + ' .panel-collapse.in').collapse('hide');
  };
});