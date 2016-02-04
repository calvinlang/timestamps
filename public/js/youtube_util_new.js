
function youtubeParser(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
};

var userLink = youtubeParser($(".youtube-link").val());

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

$(document).ready(function() {
  $("form").on("submit", function(event) {
    event.preventDefault();

    var player = new YT.Player('player', {
      height: '390',
      width: '640',
      videoId: userLink,
  iv_load_policy: 3,
  showinfo:0,
  //videoId: 'Fj73JF_bhjc',
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });

    function onPlayerReady(event) {

    }

    function onPlayerStateChange(event) {
      console.log(player.getCurrentTime())
      // console.log(player.getDuration():Number);
    }
  });
});

