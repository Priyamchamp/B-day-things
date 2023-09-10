// ready function to load js after the html successfully loads

$(document).ready(function () {                   
  var count = 0;

  // Moving cards after click 
  $(".tarot-card").click(function () {
    var card = $(this);
    if (count < 7) {                            // count less than the no of cards
      $(this).removeClass("top").addClass("bottom");

      count++;
    }
    if (count == 7) {                           // count less than the no of cards
      $("div").removeClass("bottom");

      count = 0;
    }
    shuffle(card);
  });
});

// Card effect
function shuffle(card) {
  TweenLite.fromTo(
    card,
    0.6,
    {
      x: 200,
      y: 0,
      ease: Expo.easeOut
    },
    {
      x: 0,
      y: 0,
      ease: Expo.easeIn
    }
  );
}

// Automatic audio after first click
document.addEventListener('DOMContentLoaded', function() {
  var audio = document.getElementById('myAudio');
  var isAudioStarted = false;

  function startAudio() {
    if (!isAudioStarted) {
      isAudioStarted = true;

      // Check if the audio context is created by user interaction
      if (window.AudioContext || window.webkitAudioContext) {
        var context = new (window.AudioContext || window.webkitAudioContext)();
        var source = context.createMediaElementSource(audio);
        source.connect(context.destination);
        audio.play();
      } else {
        // Fallback for browsers that don't support the Web Audio API
        audio.play();
      }
    }
  }

  // Start audio on any user interaction (click, tap, etc.)
  document.body.addEventListener('click', startAudio);
});