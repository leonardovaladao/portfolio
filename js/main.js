/***** Preloader *****/
$(document).ready(function() {
  preloaderFadeOutTime = 1000;
  pageLoadingTime = 4000;
  function hidePreloader() {
    setTimeout(function(){
      var preloader = $('.spinner-wrapper');
      preloader.fadeOut(preloaderFadeOutTime);
    }, pageLoadingTime);
  }
  hidePreloader();
});

/***** Toggle Mobile Menu *****/

var toggleMobileLink = document.getElementsByClassName("header-toggle")[0];
var headerMainLeft = document.getElementsByClassName("header-main")[0];

function moveMobileMenu() {

  if (headerMainLeft.style.left === "-230px") {
    headerMainLeft.style.left = "0px";
  } else {
    headerMainLeft.style.left = "-230px";
  }
}

toggleMobileLink.addEventListener("click", moveMobileMenu);
