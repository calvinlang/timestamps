$(document).ready(function() {
  document.getElementById("video-timestamp-return").readOnly = true;
  loadYouTubePlayer();

  $("#video-timestamp").on("click", function(event) {
    event.preventDefault();
    setTimeStamp();
  });

  $("body").on("dblclick", function(event) {
    event.preventDefault();
    var timeInSeconds = Math.floor(player.getCurrentTime());
    var minutes = Math.floor(timeInSeconds / 60);
    var seconds = timeInSeconds - minutes * 60;
    var prettySeconds = function() {
      if (seconds < 10) {
        return '0' + seconds;
      } else {
        return seconds;
      }
    };
    $("#video-timestamp-return").val(minutes + ":" + prettySeconds());
  });

  $("ul.note_list").on("click", "a", function(event) {
    event.preventDefault();
    var videoSeek = $(this).attr("href");
    player.seekTo(videoSeek, true);
  });

  $('#note-form').on("submit", function(event) {
    event.preventDefault();
    // var isTimestamped = $("video-timestamp-return").text();
    // if ( isTimestamped === "" ) {
    //   $("#video-timestamp").click(); }
    // }
    var url = $(this).attr('action');
    var request = $.ajax({
      url: url,
      method: "post",
      data: $(this).serialize()
    });

    request.done(function(response) {
      $(".note_list").append(response);
      $("#note-form").trigger('reset');
    });
  });
  $('body').on('submit', '.delete-note', function(event) {
    event.preventDefault();
    var url = $(this).attr('action');
    console.log(url);
    var $note = $(this);
    var request = $.ajax({
      url: url,
      method: 'delete'
    });

    request.done(function(response) {
      $note.closest('li').remove();
    });
  });
});

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