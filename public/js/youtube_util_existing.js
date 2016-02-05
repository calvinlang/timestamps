
function youtubeParser(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
};

$( document ).ready(function() {

  document.getElementById("video-timestamp-return").readOnly = true;
    loadPlayer();
    $("#video-timestamp").on("click", function(event){
      event.preventDefault();
      var timeInSeconds = Math.floor(player.getCurrentTime());
      var minutes = Math.floor(timeInSeconds / 60)
      var seconds = timeInSeconds - minutes * 60;
      var prettySeconds = function(){
        if(seconds < 10){
        return '0' + seconds;
      }
      else{
        return seconds;
      }
    }
      $("#video-timestamp-return").val(minutes + ":" + prettySeconds());
    })

    $("ul.note_list").on("click", "a", function(event) {  
      event.preventDefault();
      var videoSeek = $(this).attr("href")
      player.seekTo(videoSeek, true)
    })

    $('#note-form').on("submit", function(event){
      event.preventDefault();
      var url = $(this).attr('action');
      var request = $.ajax({url:url,
                           method: "post",
                           data: $(this).serialize()});

      request.done(function(response){
        $(".note_list").append(response);
        $("#note-form").trigger('reset');
      });



    });
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
  };
};

var player;
function onYouTubePlayer() {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
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
  console.log("running?")

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
