const DDC = document
let addClEvt = (el,cb)=>{el.addEventListener('click',cb)}
let getEle   = (e,all=false)=>{return (all)? DDC.querySelectorAll(`${e}`):DDC.querySelector(`${e}`)}
var i = 1;
var length= getEle('.mm').length;
var a = new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1)
function myFunction(x) {
  if (x.matches) { // 媒体查询
      document.querySelector(".m-trg").addEventListener('click',()=>{
        if(i==1){
        document.querySelector(".m-nav").classList.add('mobile');
          getEle('.m-trg').querySelectorAll('span')[2].style.display='none'
          getEle('.m-trg').querySelectorAll('span')[1].style.transform = "rotate(45deg)";
          getEle('.m-trg').querySelectorAll('span')[0].style.transform = "rotate(-45deg)";
          getEle('.m-trg').querySelectorAll('span')[0].style.margin ="-6px 0"; 


        i=i-1;
        }
        else
        {
          document.querySelector(".m-nav").classList.remove('mobile');
          getEle('.m-trg').querySelectorAll('span')[2].style.display='block'
          getEle('.m-trg').querySelectorAll('span')[1].style.transform = "rotate(0deg)";
          getEle('.m-trg').querySelectorAll('span')[0].style.transform = "rotate(0deg)";
          getEle('.m-trg').querySelectorAll('span')[0].style.margin ="0"; 
          i = i+1;
        }
      })
    getEle('.mm',true).forEach((item,i)=>{
      addClEvt(item,()=>{
        if(a[i]==1){
        getEle('.mob',true)[i].style.display='flex';
        a[i]=a[i]-1;
        }
        else
        {
          getEle('.mob',true)[i].style.display='none';
          a[i]=a[i]+1;
        }
        
      })
    })
  }
}

var x = window.matchMedia("(max-width: 980px)")
myFunction(x) // 执行时调用的监听函数
x.addListener(myFunction) // 状态改变时添加监听器