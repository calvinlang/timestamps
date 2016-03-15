function youtubeParser(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
};

function youTubeLink() {
  return youtubeParser($(".youtube-link").text());
}

function setTimeStamp() {
	var timeInSeconds = Math.floor(player.getCurrentTime());
	var minutes = Math.floor(timeInSeconds / 60);
	var seconds = timeInSeconds - minutes * 60;

	// This is to add the number 0 for anything less than 10
	var prettySeconds = function() {
	  if (seconds < 10) {
	    return '0' + seconds;
	  } else {
	    return seconds;
	  }
	};

	$("#video-timestamp-return").val(minutes + ":" + prettySeconds());
}