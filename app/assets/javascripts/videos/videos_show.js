$(document).ready(function() {

  loadYouTubePlayer();
  //So user cannot edit the timestamp
  document.getElementById("video-timestamp-return").readOnly = true;

  $("#video-timestamp").on("click", function(event) {
    event.preventDefault();
    setTimeStamp();
  });

  $("body").on("dblclick", function(event) {
    event.preventDefault();
    setTimeStamp();
  });

  $("ul.note_list").on("click", "a", function(event) {
    event.preventDefault();
    var videoSeek = $(this).attr("href");
    player.seekTo(videoSeek, true);
  });

  $('#note-form').on("submit", function(event) {
    event.preventDefault();
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
    var $note = this
    deleteNote($note)
  });
});

