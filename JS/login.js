const logForm = document.getElementById("login_form");
const logFormInput = logForm.querySelector("input");

function logON(eve){
  eve.preventDefault();
  const message = document.getElementById("login_ms");
  message.innerText = `Have a nice day, ${logFormInput}`;

  localStorage.setItem("LOGIN", logFormInput);
}

logForm.addEventListener("submit", logON);