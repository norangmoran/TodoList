function getBackground() {
  const randomNum = String(Math.floor(Math.random() * 16)).padStart(2, "0");

  document.body.style.background = `url("./img/${randomNum}.jpg") no-repeat center center/ cover`;
}

getBackground();
