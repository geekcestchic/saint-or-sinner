
// then when the #content div has loaded
function loaded() {
console.log('loaded')
$("#loading").fadeIn('fast');
$("#loading").delay(2800).fadeOut(500);
$("#loading").append('<h1>Locating you...</h1><h1>...Gurl what you doin in that neighborhood?</h1>');
};

$(document).ready(function(){
  $('#locate-me').on('click',loaded)
  //beer animation
  $('.pour') //Pour Me Another Drink, Bartender!
    .delay(2000)
    .animate({
      height: '360px'
      }, 1500)
    .delay(1600)
    .slideUp(500);
  
  $('#liquid') // I Said Fill 'Er Up!
    .delay(3400)
    .animate({
      height: '170px'
    }, 2500);
  
  $('.beer-foam') // Keep that Foam Rollin' Toward the Top! Yahooo!
    .delay(3400)
    .animate({
      bottom: '200px'
      }, 2500);
});