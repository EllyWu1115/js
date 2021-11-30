setTimeout(function(){
  console.log("Hello");
},3000);

//所有function call 執行時間 1
//所以執行上面的setTimeout 至少(最快)3秒後執行 1ms

// callback function =掛在function的function


IIFE = (Immediately Invoked Function Expression) 立即呼叫函式表示法
(function(x){
console.log(x);
})(123, 456);

//定義完馬上加() 代表立即呼叫它

var => 用function 才關的住
let,const => block 關的住

//曾看過 jQuery 官方原始碼


//ASI- Auto Semicolon Insertion  分號自動插入
console.log(123)   ->沒加分號 JS會自動加上去


//單獨可以執行 合併就無法印出錯誤 
//原因就是分號 沒加上去
console.log(123);
[1, 2, 3, 4, 5].forEach(function(item){console.log(item)
});

