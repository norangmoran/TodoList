const clock = document.querySelector("#clock");
const d_day = document.querySelector("#d_day");

function Clock(event) {
  const now = new Date();
  const getHour = String(now.getHours()).padStart(2,"0");
  const getMinute = String(now.getMinutes()).padStart(2,"0");
  const getSec = String(now.getSeconds()).padStart(2, "0");

  clock.innerText = `${getHour} : ${getMinute} : ${getSec}`;

  const christmas = new Date("2022-12-25 00:00:00");
  const timeLimit = (christmas - now) / 1000;

  const d_date = Math.floor(timeLimit / (60 * 60 * 24));
  const d_hour = String(Math.floor((timeLimit / (60 * 60)) % 24)).padStart(2, "0");
  const d_minute = String(Math.floor((timeLimit / 60) % 60)).padStart(2, "0");
  const d_sec = String(Math.floor(timeLimit % 60)).padStart(2, "0");

  d_day.innerText = `${d_date}일 ${d_hour}시간 ${d_minute}분 ${d_sec}초`;
}

Clock();
setInterval(Clock, 100);
