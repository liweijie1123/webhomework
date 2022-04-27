let total = function(){
  var all = $(".table").length;
  for(var i=0;i<all;i++){
    $(".table:eq("+i+") .num").text(i+1);
  }
}
$(".cnt").on('click',".table", function () {
  $(this).remove();
  total();
});
$(".add").on('click', function () {
    $(".cnt").append("<div class=\"table\"><li class=\"num\">3</li><li></li><li class=\"delete\">delete</li></div>")
    total();
});

