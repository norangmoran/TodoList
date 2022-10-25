function getBackground(){
  const randomNum = String(Math.floor(Math.random() * 13)).padStart(2,"0");
  const body = document.body;

  body.style.background = `url("./data/${randomNum}.jpg") no-repeat center center/ cover`;
}

getBackground();
