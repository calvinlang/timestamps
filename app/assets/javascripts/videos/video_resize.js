// $(function() {
//   var $video = $("iframe")
//   var $parentWindow = $(".container2");
//   console.log("running?")

//   // Figure out and save aspect ratio for each video
//   $video.each(function() {
//     $(this)
//       .data('aspectRatio', this.height / this.width)
//       .removeAttr('height')
//       .removeAttr('width');
//   });

//   $(window).resize(function() {
//     var newWidth = $parentWindow.width();
//     $video.each(function() {
//       var $el = $(this);
//       $el
//         .width(newWidth)
//         .height(newWidth * $el.data('aspectRatio'));
//     });
//   }).resize();
// });