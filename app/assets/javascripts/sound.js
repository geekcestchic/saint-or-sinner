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
      url:'/assets/hiccupdrunk.mp3', 
    }); 
    soundManager.createSound({
      id: 'blower', 
      url:'/assets/blower.wav', 
    }); 
    soundManager.createSound({
      id: 'ambulance', 
      url:'/assets/ambulance.wav', 
    }); 
    soundManager.createSound({
      id: 'fail', 
      url:'/assets/fail.mp3', 
    }); 
    soundManager.createSound({
      id: 'ohno', 
      url:'/assets/oh-no.wav', 
    }); 
    soundManager.createSound({
      id: 'fart', 
      url:'/assets/fart.mp3', 
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
    soundManager.play('fart');
  });

})