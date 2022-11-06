const todoForm = document.querySelector("#todo");
const list = document.querySelector("#list");
const check = list.querySelector("input");
const succ = document.querySelector("#succ");

let TDarr = [];
let succCNT = 0;
const KEY_TDARR = "TDarr";
const KEY_SUCCCNT = "succCNT";

const localsuccCNT = localStorage.getItem(KEY_SUCCCNT);

if (localsuccCNT) {
  succCNT = localsuccCNT;
  succ.innerHTML = succCNT;
}

function TDsave(){
  localStorage.setItem(KEY_TDARR, JSON.stringify(TDarr));
  localStorage.setItem(KEY_SUCCCNT, succCNT);
  succ.innerHTML = succCNT;
}

function TDadd(TD){
  const li = document.createElement("li");
  li.id = TD.regdate;

  const chek = document.createElement("input");
  chek.setAttribute("type", "checkbox");
  li.appendChild(chek);
  chek.addEventListener("change", TDsucc);

  const span = document.createElement("span");
  li.appendChild(span);
  span.innerText = TD.text;

  const button = document.createElement("button");
  li.appendChild(button);
  button.innerText = "❌";

  list.appendChild(li);
  button.addEventListener("click", TDdel);
}

function TDdel(e){
  const liDel = e.target.parentElement;
  TDarr = TDarr.filter((TD) => TD.regdate !== parseInt(liDel.id));
  liDel.remove();
  TDsave();
}

function TDsucc(e){
  succCNT++;

  TDdel(e);
}

function TDsubmit(e){
  e.preventDefault();

  const todo = todoForm.querySelector("input").value;
  console.log(todo);

  const newTDtext = {
    text: todo,
    regdate: Date.now(),
  };

  todoForm.querySelector("input").value = "";

  TDarr.push(newTDtext);
  TDadd(newTDtext);
  TDsave();
}

const localTD = localStorage.getItem(KEY_TDARR);
if(localTD){
  const parsedLocal = JSON.parse(localTD);
  parsedLocal.forEach(TDadd);
  TDarr = parsedLocal;
}

todoForm.addEventListener("submit", TDsubmit);
check.addEventListener("click", TDsucc);

TDsave();