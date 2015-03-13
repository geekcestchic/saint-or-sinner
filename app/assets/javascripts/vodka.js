function fillVodka(){
  $(this).addClass('hover');
  $(this).prevAll('.vodka').addClass('hover');
}

function unfillVodka(){
  $(this).removeClass('hover');
  $(this).prevAll('.vodka').removeClass('hover');
}

function walkingTime(){
  var rating = $('.hover').length;
  console.log(rating)
  $('.vodka').css('height', '0')
  $('.vodka').css('width', '0')
  $('.directions').append('<p>That\'s gonna be a long walk, that\'s all i have to say..</p>')
}

$(document).ready(function(){
  $('.vodka').hover(fillVodka, unfillVodka)
  $('.vodka').click(walkingTime)
});