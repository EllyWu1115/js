//[一等公民] 函數被當作頭等公民
// 函數可以做為參數 也可以被當作引數
//高階函數能成立 函數也要是一等公民 才能成立


//js 裡 1/0 
//infnity(無限大)





//if 方法可以讓這段正確執行

function hello(a){
  if (typeof a == "function"){
  a();
  }
}
 
function fish (){
  console.log ("I am fish");
}
hello(fish);