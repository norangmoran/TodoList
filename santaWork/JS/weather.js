const localInfo = document.querySelector("#local_weather");

const API_WEATHER = "da2cf8c57dcf65aeedffa51411d6ae55";

function onGeoOK(position){
  const lat = position.coords.latitude;
  const log = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_WEATHER}&units=metric`;
  console.log(url);
  fetch(url).then(Response => Response.json()).then(data => {
    // console.log(data.name, data.weather[0].main);
    const icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    localInfo.innerHTML = `${data.weather[0].main}<img src="${icon}">   ${data.sys.country} ${data.main.temp}&#8451;`;
  });
}
function onGeoErr(){
  alert("위치를 찾을 수 없습니다. 위치정보를 허용해주세요.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoErr);