const logForm = document.getElementById("login_form");
const logFormInput = logForm.querySelector("input");
const logMess = document.getElementById("login_ms");



function logSubmit(eve){
  eve.preventDefault();
  logON(logFormInput.value);
}

function logON(logID){
  logMess.innerText = `Have a nice day, ${logID}`;

  localStorage.setItem("LOGIN", logID);
}

logForm.addEventListener("submit", logON);

const localID = localStorage.getItem("LOGIN");
if (localID !== null) {logON(localID);}