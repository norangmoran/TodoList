const loginForm = document.querySelector("#login");
const workForm = document.querySelector("#work");

const CLASS_HIDE = "hide";

function login_submit(e){
  e.preventDefault();

  const loginId = loginForm.querySelector("input").value;
  login(loginId);
}

function login(id){
  localStorage.setItem("login_ID", id);

  loginForm.classList.add(CLASS_HIDE);
  workForm.classList.remove(CLASS_HIDE);
}

loginForm.addEventListener("submit", login_submit);

const localID = localStorage.getItem("login_ID");
if (localID !== null) { login(localID); }