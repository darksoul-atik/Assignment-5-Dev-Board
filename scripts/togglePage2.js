document
  .getElementById("btmain")
  .addEventListener("click", function name(event) {
    window.location.href = "./index.html";
    // window.history.back();
    // alert("hi");
    event.stopPropagation();
  });
