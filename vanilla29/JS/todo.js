const TDform = document.getElementById("todo_form");
const TDformInput = TDform.querySelector("input");
const TDlist = document.getElementById("todo_list");

let TDarr = [];
const TDARR_KET = "TDarr";

function TDsave(){
  localStorage.setItem(TDARR_KET, JSON.stringify(TDarr));
}

function TDadd(TDtext){
  const li = document.createElement("li");
  li.id = TDtext.id;

  const span = document.createElement("span");
  li.appendChild(span);
  span.innerText = TDtext.text;
  const button = document.createElement("button");
  li.appendChild(button);
  button.innerText = "❌";

  TDlist.appendChild(li);
  button.addEventListener("click", TDdel);
}

function TDdel(eve){
  const liDel = eve.target.parentElement;
  TDarr = TDarr.filter((TD) => TD.id !== parseInt(liDel.id));
  liDel.remove();
  TDsave();
}

function TDsubmit(eve){
  eve.preventDefault();
  const newTDtext = {
    text: TDformInput.value,
    id: Date.now(),
  }
  // const TDtext = TDformInput.value;
  TDformInput.value = "";

  TDarr.push(newTDtext);
  TDadd(newTDtext);
  TDsave();
}


const localTD = localStorage.getItem(TDARR_KET);
if (localTD) {
  const parsedLocal = JSON.parse(localTD);
  parsedLocal.forEach(TDadd);
  TDarr = parsedLocal;
}

TDform.addEventListener("submit", TDsubmit);