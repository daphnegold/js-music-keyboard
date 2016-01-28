$(document).ready( function() {
  var notes = { "c": 67, "d": 68, "e": 69, "f": 70, "g": 71, "a": 65, "b": 66 };

  Object.keys(notes).forEach(function(note) {
    $("." + note).click(function () {
        var audio = $("#" + note + "Audio")[0];
        audio.load();
        audio.play();
    });

    $(document).keydown(function(e) {
      if (e.keyCode == notes[note]) {
        var audio = $("#" + note + "Audio")[0];
        audio.load();
        audio.play();
        $("." + note).addClass("hover");
      }
    });

    $(document).keyup(function(e) {
      if (e.keyCode == notes[note]) {
        $("." + note).removeClass("hover");
      }
    });
  });
});
