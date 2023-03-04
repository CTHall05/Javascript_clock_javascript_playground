// Javascript for the project:

const hourElement = document.getElementById("hour");

const minuteElement = document.getElementById("minutes");

const seccondsElement = document.getElementById("secconds");

const ampmElement = document.getElementById("ampm");

function updateClock() {
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();
  let secconds = new Date().getSeconds();
  let ampm = "AM";

  if (hours > 12) {
    hours = hours - 12;
    ampm = "PM"
  }

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  secconds = secconds < 10 ? "0" + secconds : secconds;

  hourElement.textContent = hours;
  minuteElement.textContent = minutes;
  seccondsElement.textContent = secconds;
  ampmElement, (textContent = ampm);
  setTimeout(() => {
    updateClock();
  }, 1000);
}

updateClock();