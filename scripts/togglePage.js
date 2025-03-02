// togglePageByIDandHref("discover", "./blog.html");
// togglePageByIDandHref("btmain", "./index.html");

document
  .getElementById("discover")
  .addEventListener("click", function name(event) {
    event.preventDefault();
    window.location.href = "./blog.html";
    event.stopPropagation();
  });

document
  .getElementById("btmain")
  .addEventListener("click", function name(event) {
    // window.location.href = "index.html";
    window.history.back();
    event.stopPropagation();
  });
