var x = document.querySelectorAll("li");
for(var i = 0;i<x.length;i++){
  x[i].onmouseover =function() {
    this.style.color = "red";
  }
  x[i].onmouseout = function() {
    this.style.color="";
  }
}