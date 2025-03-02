// togglePageByIDandHref("discover", "./blog.html");
// togglePageByIDandHref("btmain", "./index.html");

document
  .getElementById("discover")
  .addEventListener("click", function name(event) {
    event.preventDefault();
    window.location.href = "./blog.html";
    event.stopPropagation();
  });
