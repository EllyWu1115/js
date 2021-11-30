// function displayHero(name, age){
//   console.log(`hi, I'm ${name}and I'm ${age} years old`)
// };

// const hero = {
//   name: 123,
//   age: 456,
//   gender: 789
// };

//let {name, age, gender} = hero
//另一個寫法




//寫法一
// let n = hero.name
// let a = hero.age
// displayHero(n, a);

// //寫法二
// let {name ,age } =hero
// displayHero(name, age);




//變數參數解構
// function displayHero({name, age}){
//   console.log(`hi, I'm ${name}and I'm ${age} years old`)
// };
// const hero = {
//   name: 123,
//   age: 456,
//   gender: 789
// };
// displayHero(hero);


//陣列解構 ---->沒有成功 是不是打錯?
// function calcScore(){
//   return[1, 2, 3]
// };
// let [a, b, c] = calcScore
// console.log(a)
// console.log(b)
// console.log(c)

// -->印出 a
//        b
//        c


// for (var i = 0; i < 3; i++){
//   setTimeout(()=> console.log(i), 1000);
// }

// ==>同時印出
//3
//3
//3



for (let i = 0; i < 3; i++){
  setTimeout(()=> console.log(i), 1000);
}

//印出
//0
//
//





