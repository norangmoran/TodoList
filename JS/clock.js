

function Clock(event) {
  const clock = document.getElementById("clock");
  const hour = clock.querySelector("span:first-child");
  const minute = clock.querySelector("span:last-child");
  const timeNow = new Date();

  const getHour = timeNow.getHours();
  const getMinute = timeNow.getMinutes();
  hour.innerText = getHour;
  minute.innerText = getMinute;

  const clockBlink = document.createElement("span:nth-child(2)");
  clockBlink.classList.toggle("blink");
}

Clock();
setInterval(Clock, 100);
