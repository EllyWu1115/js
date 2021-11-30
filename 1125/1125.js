// document.addEventListener("DOMContentLoaded", function () {
//   const abc = document.querySelector('#user_form');
  
//   abc.addEventListener("submit", function (stopoh) {

//       const bcd = document.querySelector('#user_id').value;
//       if (bcd == "") {
//       stopoh.preventDefault();
//       abc.innerText = "你沒輸入東西啦～";
//   }    else {
//       }
//   });
// });


//題目是 如果沒寫username, 不能走

// DOMContentLoaded就是類似RUNTIME的效果

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#user_form");
  const user_id = document.querySelector("#user_id");
  form.addEventListener("submit" , function(e){
    if (user_id.textContent === ""){
      console.log("不能走");
      e.preventDefault();
      // 這個函式具有阻擋的效果
    }
  });
});





