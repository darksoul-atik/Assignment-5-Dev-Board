document.getElementById("cb1").addEventListener("click", function (event) {
  event.preventDefault();

  //get the time section
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let shift;

  if (minutes.length < 2) {
    minutes = "0" + minutes;
  }
  if (hours >= 12) {
    shift = "pm";
    hours = ((date.getHours() - 1) % 12) + 1;
  } else {
    shift = "am";
  }

  const timeList = hours + ":" + minutes + ":" + seconds + " " + shift;

  //send notifaction section
  const title = document.getElementById("t1").innerText;
  const notificationContainer = document.getElementById(
    "notification_container"
  );

  notificationContainer.classList.add(
    "flex",
    "flex-col",
    "items-center",
    "justify-center",
    "p-2"
  );

  notificationContainer.innerHTML = `
    <p class="text-center mb-4 bg-custom p-2 rounded-lg text-sm">You have completed the task ${title} at ${timeList}</p>
  `;

  //button disable section
  const button = document.getElementById("cb1");
  alert("Board Updated Successfully");
  button.disabled = true;

  //task update section
  const taskNumber = document.getElementById("taskNumber").innerText;
  const remain = taskNumber - 1;
  document.getElementById("taskNumber").innerText = remain;

  const taskDone = document.getElementById("taskDone").innerText;
  const done = taskDone + 1;
  document.getElementById("taskNumber").innerText = done;

  if (taskNumber === 0) {
    alert("Congratulations you have completed all the task.");
  }
});
