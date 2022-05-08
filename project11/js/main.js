function myFunction(x) {
  if (x.matches) { // 媒体查询
      document.querySelector(".m-trg").addEventListener('click',()=>{
        document.querySelector(".m-nav").classList.add('mobile')
      })
  }
}

var x = window.matchMedia("(max-width: 980px)")
myFunction(x) // 执行时调用的监听函数
x.addListener(myFunction) // 状态改变时添加监听器