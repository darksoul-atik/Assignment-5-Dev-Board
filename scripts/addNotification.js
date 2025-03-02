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

document.getElementById("cb2").addEventListener("click", function (event) {
  event.preventDefault();
  alert("hi");
});

document.getElementById("cb3").addEventListener("click", function (event) {
  event.preventDefault();
  alert("hi");
});

document.getElementById("cb4").addEventListener("click", function (event) {
  event.preventDefault();
  alert("hi");
});

document.getElementById("cb5").addEventListener("click", function (event) {
  event.preventDefault();
  alert("hi");
});

document.getElementById("cb6").addEventListener("click", function (event) {
  event.preventDefault();
  alert("hi");
});
