const loginForm = document.querySelector("#login");
const workbench = document.querySelector("#work");

const CLASS_HIDE = "hide";

function login_submit(e){
  e.preventDefault();

  const loginId = loginForm.querySelector("input").value;
  login(loginId);
}

function login(id){
  localStorage.setItem("login_ID", id);

  loginForm.classList.add(CLASS_HIDE);
  workbench.classList.remove(CLASS_HIDE);

  workbench.querySelector("h3").innerHTML = `도와주셔서 감사합니다, ${id}님!<br/>무엇을 하실건가요?`;
}

loginForm.addEventListener("submit", login_submit);

const localID = localStorage.getItem("login_ID");
if (localID !== null) { login(localID); }