function fillVodka(){
  $(this).addClass('hover');
  $(this).prevAll().addClass('hover');
}

function unfillVodka(){
  $(this).removeClass('hover');
  $(this).prevAll().removeClass('hover');
}

function walkingTime(){
  var rating = $('.hover').length-1;
  
}

$(document).ready(function(){
  $('.vodka').hover(fillVodka, unfillVodka)
  $('.vodka').click(walkingTime)
});