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

function deleteNote(note) {
	event.preventDefault();
	var url = $(note).attr('action');
	var $note = $(note);
	var request = $.ajax({
	  url: url,
	  method: 'delete'
	});

	request.done(function(response) {
	  $note.closest('li').remove();
	}); 
}

function preventUserEditOfTimestamp() {
	$timestampReturn = document.getElementById("video-timestamp-return")
	if ($timestampReturn) {
	$timestampReturn.readOnly = true;
	}
}

function submitNoteCreate(note) {
    event.preventDefault();
    var url = $(note).attr('action');
    var request = $.ajax({
      url: url,
      method: "post",
      data: $(note).serialize()
    });

    request.done(function(response) {
      $(".note_list").append(response);
      $("#note-form").trigger('reset');
    });
}