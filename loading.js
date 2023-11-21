console.log('your loading javascript has been loaded...')

$(document).ready(function () {
    var div_box = "<div id='load-screen'><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class='cssload-tetrominos'><div class='cssload-tetromino cssload-box1'></div><div class='cssload-tetromino cssload-box2'></div><div class='cssload-tetromino cssload-box3'></div><div class='cssload-tetromino cssload-box4'></div></div></div>";
    $("body").prepend(div_box);
    $("#load-screen")
      .delay(800)
      .fadeOut(500, function () {
        $(this).remove();
      });
    console.log('loading image has been done...');
  });

