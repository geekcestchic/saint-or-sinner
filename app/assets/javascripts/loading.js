
// then when the #content div has loaded
function loaded() {
console.log('loaded')
$("#loading").fadeIn('fast');
$("#loading").delay(2700).fadeOut(500);
$("#loading").append('<h1>Locating you... </h1><h1>Wait what you doin in that neighborhood?</h1>');
};

$(document).ready(function(){
  $('#locate-me').on('click',loaded)
});