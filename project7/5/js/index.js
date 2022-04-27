// let total = function(){
//   var all = $(".table").length;
//   for(var i=0;i<all;i++){
//     $(".table:eq("+i+") .num").text(i+1);
//   }
// }
// $(".cnt").on('click',".table", function () {
//   $(this).remove();
//   total();
// });
// $(".add").on('click', function () {
//     $(".cnt").append("<div class=\"table\"><li class=\"num\">3</li><li></li><li class=\"delete\">delete</li></div>")
//     total();
// });
const src="./img/";
const DDC = document;

let getEle      = (e,all=false) =>{return (all)? DDC.querySelectorAll(`${e}`):DDC.querySelector(`${e}`)}
let addClEvt    = (el,cb)=> {el.addEventListener('click',cb)}
let addClass    = (el,cls)=> { el.classList.add(cls) }
let removeClass = (el,cls)=> {el.classList.remove(cls)}
let sort        = ()=>{getEle('.num',true).forEach((item,i)=>{item.innerHTML=i+1})}
var cnt = getEle(".cnt");
var add = getEle(".add");
var table = getEle(".table",true);
var length = table.length-1;
var fg = 0;
table.forEach((item,i)=>{
addClEvt(item,()=>{
    item.remove()
    table =getEle(".table",true)
    length = table.length-1;
    sort();
  })
})
addClEvt(add,()=>{
  table[length].insertAdjacentHTML('afterend', '<div class=\"table\"><li class=\"num\">3</li><li></li><li class=\"delete\">delete</li></div>');
  table =getEle(".table",true);
  sort();
  table.forEach((item,i)=>{
  addClEvt(item,()=>{
    item.remove()
    table =getEle(".table",true)
    length = table.length-1;
    sort();
  })
  })
})
