document.addEventListener("DOMContentLoaded", function(){
  const btn = document.querySelector("#addNew");
  btn. addEventListener("click", function(){
    const el = document.createElement("div");
    el.innerText = "hi";
    el.className ="hi";
    const container = document.querySelector("#container")
    container.appendChild(el);
  });
});

