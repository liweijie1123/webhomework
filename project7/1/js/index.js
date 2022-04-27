const src="./img/";
const DDC = document;
var fg = 0;
let getEle = (e,all=false)=>{return (all)? DDC.querySelectorAll(`${e}`):DDC.querySelector(`${e}`)};
let addClEvt = (el,cb)=>{el.addEventListener('click',cb)};

getEle('li',true).forEach((item,i)=>{
  addClEvt(item,()=>{
    getEle('.img').style.display = 'block';
    getEle('img').src = './img/'+i+'.png';
  })
})
addClEvt(getEle('.img'),()=>{
  getEle('.img').style.display = 'none';
})