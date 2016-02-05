function youtubeParser(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
};

$(document).ready(function() {
	$("#user-video-link").on("keyup", function(event) {  
		videoId = youtubeParser(this.value)
		apiKey = "AIzaSyCUTS1HjPuLwBHvs9KqDlGV0eiiXvM9-Y4"
		$.ajax({
	      url: "https://www.googleapis.com/youtube/v3/videos?id=" + videoId + "&key="+ apiKey + "&fields=items(snippet(title))&part=snippet", 
	      dataType: "jsonp",
	      success: function(response){
	               $("#user-video-title").val(response.items[0].snippet.title);           
	      },
	      // error: function(jqXHR, textStatus, errorThrown) {
	      //     alert (textStatus, + ' | ' + errorThrown);
	      // }
		});
	})
});
