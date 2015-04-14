//will look at this if have time

$(document).ready(function(){
  // console.log('sound.js')

  soundManager.setup({
    url: '/assets/swf/',
    flashVersion: 9,
    preferFlash: false, // prefer 100% HTML5 mode, where both supported
    onready: function() {
      // console.log('SM2 ready!');
    },
    ontimeout: function() {
      // console.log('SM2 init failed!');
    },
    defaultOptions: {
      // set global default volume for all sound objects
      volume: 50
    }
  });

  soundManager.onload = function() {    
    // console.log('loaded sound');
    soundManager.createSound({
      id: 'hiccup', 
      url:'https://s3-eu-west-1.amazonaws.com/saint-or-sinner/audiofiles/hiccupdrunk.mp3', 
    }); 
    soundManager.createSound({
      id: 'blower', 
      url:'https://s3-eu-west-1.amazonaws.com/saint-or-sinner/audiofiles/blower.wav', 
    }); 
    soundManager.createSound({
      id: 'ambulance', 
      url:'https://s3-eu-west-1.amazonaws.com/saint-or-sinner/audiofiles/ambulance.wav', 
    }); 
    soundManager.createSound({
      id: 'fail', 
      url:'https://s3-eu-west-1.amazonaws.com/saint-or-sinner/audiofiles/fail.mp3', 
    }); 
    soundManager.createSound({
      id: 'ohno', 
      url:'https://s3-eu-west-1.amazonaws.com/saint-or-sinner/audiofiles/oh-no.wav', 
    }); 
    soundManager.createSound({
      id: 'spiritus', 
      url:'https://s3-eu-west-1.amazonaws.com/choral-app/sound-one.wav', 
    }); 
  } 


  $('#locate-me').click(function(){
    // console.log('play sound');
    soundManager.play('hiccup');
  });
  $('.sinner').click(function(){
    // console.log('play sound');
    soundManager.play('blower');
  });
  $('.saint').click(function(){
    // console.log('play sound');
    soundManager.play('spiritus');
  });

})