document.getElementById("clear").addEventListener("click", function (event) {
  event.preventDefault();

  const nc = document.getElementById("notification_container");

  nc.innerHTML = " ";
});
