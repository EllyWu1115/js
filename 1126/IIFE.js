for(var i = 0; i < 3;i++ ){
  (function(a){
    setTimeout(function(){
      console.log(a)
    },100)
  })(i)
}

//IIFE 的解題方式