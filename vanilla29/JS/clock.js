const randomNum = String(Math.floor(Math.random() * 13)).padStart(2, "0");

function Clock(event) {
  const clock = document.getElementById("clock");
  const hour = clock.querySelector("span:first-child");
  const minute = clock.querySelector("span:last-child");
  const timeNow = new Date();

  const getHour = String(timeNow.getHours()).padStart(2,"0");
  const getMinute = String(timeNow.getMinutes()).padStart(2,"0");
  hour.innerText = getHour;
  minute.innerText = getMinute;

  // const clockBlink = document.createElement("span:nth-child(2)");
  // clockBlink.classList.toggle("blink");
}

Clock();
setInterval(Clock, 100);
