a = "hello,wprld";
console.log(a);

// 不算變數宣告

// js 通常變數宣告會加上 var

var a = "hello,world";
console.log(a);

// undefined 在JS是一個值  如同 nil在Ruby內是一個值
// console.log(undefined);    undefined vs not defined 不一樣

//JS用兩階段來執行   
//建立期 1A / 1B    (JS第一階段先掃出程式碼)
//執行期 2
//變數提升(Variable Hoisto)--->重點11/23影片 11:30左右


console.log(a);
let a = 1 
//會出現這個訊號ReferenceError: Cannot access 'a' before initializationat Object.<anonymous>
//ES6推出let寫法(有TDZ的特性) 還是有變數提升 他有把整段流程走完  
//建立期 1A  TDZ被貼上貼紙 就會出現ReferenceERROR     沒有1B  
//執行期 2  TDZ碰到值 貼紙就會解除

const a = 1;
a = 2;
console.log(a);

//TypeError: Assignment to constant variable.at Object.
//大部分的程式語言常數不能改  JS常數不能改

console.log(PI);
const PI =3.14;
//TypeError: Assignment to constant variable.at Object.



const a = [1, 2, 3]; //不能 re-assign
a[0] = "a" ;
onsole.log(a);

//印出[ 'a', 2, 3 ]

//JS所有變數都有回傳值


