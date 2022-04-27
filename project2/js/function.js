 const URL_TB = 'https://www.taobao.com'
 const DDC = document

 let addClass = (el,cls)=> { el.classList.add(cls) }
 let addClEvt = (el,cb)=>{el.addEventListener('click',cb)}
 let getDate  = ()=>{return new Date()}
 let getEle   = (e,all=false)=>{return (all)? DDC.querySelectorAll(`${e}`):DDC.querySelector(`${e}`)}
 let addNode  = (pa,el,txt)=>{
 	let pn = DDC.createElement(el)
 	pn.appendChild(DDC.createTextNode(txt))
 	pa.appendChild(pn)
 }


 getEle('li',true).forEach((item,i)=>{
 	addClEvt(item,()=>{alert(i+1)})
 	switch(i) {
 		case 0: addClEvt(item,()=>{item.style.color = 'red'}); break;
 		case 1: addClEvt(item,()=>{document.querySelector("h1").innerHTML=getDate();});break;
 		case 2: addClEvt(item,()=>{addClass(item,'fn-active')});break;
 		case 3: addClEvt(item,()=>{getEle('li:nth-child(8)').remove()});break;
 		case 4: addClEvt(item,()=>{});break;
 		case 5: addClEvt(item,()=>{});break;
 		case 6: addClEvt(item,()=>{});break;
 	}
 })
// var x = document.querySelectorAll(".m-item");
// x[0].addEventListener('click',(e)=>{
// 	 x[0].style.color = 'red';
// }) ;

// x[1].addEventListener('click',()=>{

// });

// x[2].addEventListener('click',()=>{
// 	x[2].classList.add("fn-active");
// });

// x[3].addEventListener('click',()=>{
// 	 var paren = document.querySelector("ul");
// 	 paren.removeChild(x[7]);
// }) ;

// x[4].addEventListener('click',()=>{
// 	 window.open("https://www.taobao.com");
// });

// x[5].addEventListener('click',()=>{
// 	 var paren = document.querySelector("ul");
// 	 var l = document.createElement("li");
// 	 var node = document.createTextNode("p9");
// 	 l.appendChild(node);
// 	 paren.appendChild(l);
// 	 l.addEventListener('click',()=>{
// 		alert(l.innerHTML);
// 	 });
// });
// x[6].addEventListener('click',()=>{
// 	var w = screen.availWidth+'px';
//    document.getElementById("one").style.width=w;
// });


function checkTime(i) {
	 if(i<10) {
		  i="0"+i;
	 }
	 return i;
}

// for(let i = 0;i<x.length;i++){
// 	var y = x[i];
// 	y.addEventListener('click',()=>{
// 	let res  = x[i].innerHTML;
// 	 alert(res);
// 	});
// }
// var x = document.querySelectorAll('li');
// var arr  = [
// 	{name:'liming',age:'19'},
// 	{name:'liasdng',age:'14'},
// 	{name:'limasdg',age:'1a'},
// 	{name:'limiaaang',age:'1asd'},
// 	{name:'limingdd',age:'1asd'},
// 	{name:'limingff',age:'1sad'},
// 	{name:'limingf',age:'1as'},
// ];


// arr.forEach((ele,index)=>{
// 	x[index].addEventListener('click',()=>{
// 		x[index].innerHTML=ele.name
// 	})
// })
