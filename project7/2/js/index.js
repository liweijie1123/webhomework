  $('.cnt').on('click','.select:eq(0)', function () {
    $('.selected').removeClass('selected');
    $('.select:eq(0)').toggleClass("selected");
    $('img').attr('src','./img/0.png');
  });
    $('.cnt').on('click','.select:eq(1)', function () {
    $('.selected').removeClass('selected');
    $('.select:eq(1)').toggleClass("selected");
        $('img').attr('src','./img/1.png');
  });
  $('.cnt').on('click','.select:eq(2)', function () {
    $('.selected').removeClass('selected');
    $('.select:eq(2)').toggleClass("selected");
    $('img').attr('src','./img/2.png');
  });
