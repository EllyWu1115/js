function hello (){
  function x(){
    console.log("I am x");
  }

  return x;
}

hello()();


//hello 先執行1~6行(外面) 得到x這個函數 
//得到一個函數 另一個()是指執行它