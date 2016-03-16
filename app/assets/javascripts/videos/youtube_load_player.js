function loadYouTubePlayer() {
  // Not sure what this does. Part of API. Sets up a request.
  if (typeof(YT) == 'undefined' || typeof(YT.Player) == 'undefined') {
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    window.onYouTubePlayerAPIReady = function() {
      onYouTubePlayer();
    };
  }
}

var player;

function onYouTubePlayer() {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: youTubeLink(),
    playerVars: {
      controls: 1,
      showinfo: 0,
      rel: 0,
      showsearch: 0,
      iv_load_policy: 3
    },
    events: {
      'onStateChange': onPlayerStateChange,
      'onError': catchError
    }
  });
}

var done = false;

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    done = true;
  } else if (event.data == YT.PlayerState.ENDED) {
    location.reload();
  }
}

function onPlayerReady(event) {}

function catchError(event) {
  if (event.data == 100) console.log("De video bestaat niet meer");
}

function stopVideo() {
  player.stopVideo();
}