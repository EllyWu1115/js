function hello(){
  var a=100

  function x(){
    a+=1 
    console.log(a)
  }
  return x
   const yy = hello ()
   yy()
}
//閉包 讓funciton 有記憶功能