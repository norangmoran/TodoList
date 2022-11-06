const localInfo = document.querySelector("#local_weather");

const WEATHER_API = "da2cf8c57dcf65aeedffa51411d6ae55";

function onGeoOK(position){
  const lat = position.coords.latitude;
  const log = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${WEATHER_API}&units=metric`;
  fetch(url);
}
function onGeoErr(){
  alert("위치를 찾을 수 없습니다. 위치정보를 허용해주세요.");
}

localInfo.geolocation.getCurrentPosition(onGeoOK, onGeoErr);