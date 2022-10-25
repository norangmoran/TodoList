const logForm = document.getElementById("login_form");
const logMess = document.getElementById("login_ms");



function logSubmit(eve){
  eve.preventDefault();
  const logFormInput = logForm.querySelector("input");

  logON(logFormInput.value);
}

function logON(logID){
  const logFormInput = logForm.querySelector("input");
  const logOutButton = document.querySelector("nav");

  logFormInput.classList.add("hidden");
  logOutButton.classList.remove("blink");
  logMess.innerText = `Have a nice day, ${logID}`;
  localStorage.setItem("LOGIN", logID);
}

function logOut(){
  logOutButton.classList.add("blink");
  logFormInput.classList.remove("hidden");
  localStorage.removeItem("LOGIN");

  logMess.innerText = `오늘 작업하시는 분은 누구신가요?`;
}

logForm.addEventListener("submit", logSubmit);
logOutButton.addEventListener("click", logOut);

const localID = localStorage.getItem("LOGIN");
if (localID !== null) {logON(localID);}