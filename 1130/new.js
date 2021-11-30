function randomHex() {
  return Math.floor(Math.random() * 16777215).toString(16);
}

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");
  const addItem = document.querySelector("#addItem");

  container.addEventListener("click", (e) => {
    if (e.target && e.target.nodeName == "BUTTON") {
      e.target.parentNode.remove();
    }
  });

  addItem.addEventListener("click", () => {
    const color = randomHex();
    const el = document.createElement("div");
    el.className = "item";
    el.innerHTML = `#${color}`;
    el.style.backgroundColor = `#${color}`;
    const closeBtn = document.createElement("button");
    closeBtn.innerText = "X";
    el.append(closeBtn);

    container.insertAdjacentElement("afterbegin", el);
  });
});

//老師的版本