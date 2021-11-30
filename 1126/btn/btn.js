document.addEventListener("DOMContentLoaded", function () {
  const addNew = document.querySelectorAll("#addNew");
  const btn = document.querySelector(".select")
  btn.addEventListener("click", function () {
      cost el = document.createElement('div');
      el.innerText ="hi";
      el.className ="hi";
      const container = document.querySelector("#container")
      container.appendChild(el)
  })
})