document.getElementById("clear").addEventListener("click", function (event) {
  event.preventDefault();

  const nc = document.getElementById("notification_container");

  nc.innerHTML = " ";

  //its working in the local host.Dont know why its not working in Github Live Link. Due to time shortage I have to submit it
});
