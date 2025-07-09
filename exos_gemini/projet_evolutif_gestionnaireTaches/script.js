// MES VARIABLES
const input = document.getElementById("taskInput");
const btn = document.getElementById("addTaskBtn");
// const taskList = document.getElementById("taskList");
const ul = document.querySelector("ul");

// const errorMsg = document.getElementById("errorMessage");

// MES FONCTIONS
// afficher la tâche de l'user dans une li
function afficheLi(item) {
  const li = document.createElement("li");
  // const liContent = document.createTextNode(`${input.value}`);
  const liContent = document.createTextNode(`la tâche est ${item}`);
  li.appendChild(liContent);
  ul.appendChild(li);
}

// MES EVENEMENTS
btn.addEventListener("click", () => {
  const tacheUser = input.value;
  console.log(tacheUser);
  afficheLi(tacheUser);
  input.value = "";
});
