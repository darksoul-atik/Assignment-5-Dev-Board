function getTime() {
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

  return `${hours}:${minutes}:${seconds} ${shift}`;
}

function temp() {
  console.log("hi");
}
