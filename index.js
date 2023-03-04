function updateClock() {
  const hourElement = document.getElementById("hour");
  const minuteElement = document.getElementById("minutes");
  const secondsElement = document.getElementById("secconds");
  const ampmElement = document.getElementById("ampm");

  // rest of the code here
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();
  let seconds = new Date().getSeconds();
  let ampm = "AM";

  if (hours > 12) {
    hours = hours - 12;
    ampm = "PM";
  }

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  hourElement.textContent = hours;
  minuteElement.textContent = minutes;
  secondsElement.textContent = seconds;
  ampmElement.textContent = ampm;
  setTimeout(() => {
    updateClock();
  }, 1000);
}

document.addEventListener("DOMContentLoaded", function () {
  updateClock();
});

module.exports = { updateClock };
