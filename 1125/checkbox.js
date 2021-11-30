btn.addEventListener("click", () => {
  check.forEach((x) => {
    if (x.value.length >= 4) {
      x.checked = 1;
    }
  });
});