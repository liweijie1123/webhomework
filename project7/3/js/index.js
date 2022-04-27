const src="./img/";
const DDC = document;
var fg = 0;
let getEle      = (e,all=false) =>{return (all)? DDC.querySelectorAll(`${e}`):DDC.querySelector(`${e}`)}
let addClEvt    = (el,cb)=> {el.addEventListener('click',cb)}
let addClass    = (el,cls)=> { el.classList.add(cls) }
let removeClass = (el,cls)=> {el.classList.remove(cls)}


getEle('.select',true).forEach((item,i)=>{
  addClEvt(item,()=>{
    removeClass(getEle('.selected'),'selected');
    addClass(item,'selected');
    getEle('img').src = './img/'+i+'.png';
  })
})
