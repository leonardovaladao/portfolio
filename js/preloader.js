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
