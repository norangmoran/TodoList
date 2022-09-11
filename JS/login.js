const logForm = document.getElementById("login_form");
const logMess = document.getElementById("login_ms");



function logSubmit(eve){
  eve.preventDefault();
  const logFormInput = logForm.querySelector("input");

  logON(logFormInput.value);
}

function logON(logID){
  logMess.innerText = `Have a nice day, ${logID}`;

  localStorage.setItem("LOGIN", logID);
}

logForm.addEventListener("submit", logSubmit);

const localID = localStorage.getItem("LOGIN");
if (localID !== null) {logON(localID);}