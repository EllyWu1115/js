document.addEventListener("DOMContentLoaded", function () {
  const check = document.querySelectorAll(".check");
  const btn = document.querySelector("#selectAll");

  btn.addEventListener("click", function() {
    for (var i = 0; i < check.length; i++){
      if (check[i].checked == false)
        check[i].checked = true ;
      else{
        check[i].checked = false ;
      }
      // console.log("hello"); Debu用
    }
  });
});