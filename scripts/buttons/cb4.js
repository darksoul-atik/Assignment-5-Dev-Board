document.getElementById("cb4").addEventListener("click", function (event) {
  event.preventDefault();

  //get the time section
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let shift;

  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (hours >= 12) {
    shift = "pm";
    hours = ((date.getHours() - 1) % 12) + 1;
  } else {
    shift = "am";
  }

  const timeList = hours + ":" + minutes + ":" + seconds + " " + shift;

  //send notification section
  const title = document.getElementById("t4").innerText;
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

  const newP = document.createElement("p");
  const text = "You have completed the task " + title + " at " + timeList;
  newP.innerText = text;
  newP.classList.add(
    "text-center",
    "mb-4",
    "bg-custom",
    "p-2",
    "rounded-lg",
    "text-sm"
  );
  notificationContainer.appendChild(newP);

  //button disable section
  const button = document.getElementById("cb4");
  alert("Board Updated Successfully");
  button.disabled = true;

  //task update section
  const taskNumber = document.getElementById("taskNumber").innerText;

  const taskNumberRemain = parseInt(taskNumber);
  let remain = taskNumberRemain - 1;
  console.log(remain, taskNumberRemain);

  document.getElementById("taskNumber").innerText = parseInt(remain);

  const taskDone = document.getElementById("taskDone").innerText;
  const done = parseInt(taskDone) + 1;
  document.getElementById("taskDone").innerText = done;
  if (remain === 0) {
    alert("Congratulations you have completed all the tasks.");
  }
  event.stopPropagation();
});
