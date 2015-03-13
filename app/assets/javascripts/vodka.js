function fillVodka(){
  $(this).addClass('hover');
  $(this).prevAll('.vodka').addClass('hover');
}

function unfillVodka(){
  $(this).removeClass('hover');
  $(this).prevAll('.vodka').removeClass('hover');
}

function walkingTime(){
  $('.directions').find('p').remove()
  var rating = $('.hover').length;
  console.log(rating)
  $('.vodka').css('height', '0')
  $('.vodka').css('width', '0')
  if (rating === 5){
    $('.directions').append('<p>An ambulance is on its way to find you</p>')
    soundManager.play('ambulance');
  }
  else if (rating === 1){
    $('.directions').append('<p>Why are you even on this app?</p>')
    soundManager.play('fail');
  }
  else {
    $('.directions').append('<p>That\'s gonna be a long walk, that\'s all i have to say..</p>');
    soundManager.play('ohno');
  }
  $('.directions').append('<button class="viewresults">Choose another place</button>')
}

function clearDirections(){
  $('.directions').find('button').remove()
  // $('.directions').find('p').remove()
}

$(document).ready(function(){
  $('.vodka').hover(fillVodka, unfillVodka)
  $('.vodka').click(walkingTime)
  $('.results').on('click', '.service', clearDirections)
});