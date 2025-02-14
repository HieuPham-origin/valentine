$(document).ready(function () {
    // Khi rê chuột vào thiệp, lá thư sẽ mở lên
    $('.valentines').mouseenter(function () {
      $('.card').stop().animate({
        top: '-90px'
      }, 'slow');
    }).mouseleave(function () {
      // Khi rời chuột khỏi thiệp, lá thư đóng lại
      $('.card').stop().animate({
        top: '5px'
      }, 'slow');
    });
  });
  