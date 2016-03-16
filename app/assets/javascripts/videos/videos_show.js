$(document).ready(function() {

  loadYouTubePlayer();
  //So user cannot edit the timestamp
  preventUserEditOfTimestamp();

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
    submitNoteCreate(this)
  });

  $('body').on('submit', '.delete-note', function(event) {
    deleteNote(this)
  });
});

