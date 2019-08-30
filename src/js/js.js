$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 700) {
      $('.navbar')
        .css({
          'display': 'flex',
          'background' : 'white'
        });
    } else {
      $('.navbar')
        .css({
          'display': 'none',
        });
    }
  });

 