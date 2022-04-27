$(init)
function init(){
  for(var i=0;i<10;i++){
  $('.cnt').on('click','li:eq('+i+')', function () {
    $(".img").show(500);
  });
  }  
  $('.img').on('click', function () {
    $(".img").hide(500);
  }); 
}