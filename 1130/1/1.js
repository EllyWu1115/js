document.addEventListener("DOMContentLoaded", () =>{
  const out_div = document.querySelector(".out");
  const in_div = document.querySelector(".in");

  out_div.addEventListener(
    "click",(e) => {
      e.stopPropagation();
    console.log("out clicked");
  },true
  );

  in_div.addEventListener("click",() => {
    console.log("in clicked");
  });

});