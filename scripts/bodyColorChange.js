document
  .getElementById("btnColorChange")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const body = document.getElementById("body");
    let randomColor = Math.random().toString(16);
    randomColor = randomColor.slice(2, 8);

    if (randomColor.length < 6) {
      while (randomColor.length !== 6) {
        randomColor = randomColor + "0";
      }
    }
    randomColor = "#" + randomColor;

    body.classList.remove("bg-slate-100");
    body.style.backgroundColor = randomColor;
  });
