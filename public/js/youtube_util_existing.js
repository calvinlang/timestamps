
function youtubeParser(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
};
console.log("not ready")

$( document ).ready(function() {
    console.log( "ready!" );
    loadPlayer();
});

function youTubeLink(){
  return youtubeParser($(".youtube-link").text());
}


function loadPlayer() {
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
    height: '490',
    width: '880',
    videoId: youTubeLink(),
    playerVars: { controls:1, showinfo: 0, rel: 0, showsearch: 0, iv_load_policy: 3 },
    events: {
      'onStateChange': onPlayerStateChange,
      'onError': catchError
    }
  });
}

  var done = false;
  function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
      // setTimeout(stopVideo, 6000);
      done = true;
    }
    else if(event.data == YT.PlayerState.ENDED)
    {
      location.reload();
    }
  }

  function onPlayerReady(event) {

    //if(typeof(SONG.getArtistId()) == undefined)
    //{
    //  console.log("undefineeeed");
    //}
    //event.target.playVideo();
  }
  function catchError(event)
  {
    if(event.data == 100) console.log("De video bestaat niet meer");
  }

  function stopVideo() {
    player.stopVideo();
  }
