// MES VARIABLES GENERALES
let body = document.querySelector("body");
let form = document.getElementById("form");
let enterTodo = document.getElementById("enter-todo");
let addBtn = document.getElementById("add");
let listLi = document.querySelector(".list > ul");

// MON EVENEMENT
// il ajoute à la liste chaque entrée de l'utilisateur
addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let todo = enterTodo.value;

  let newLi = document.createElement("li");
  newLi.innerText += `${todo}`;
  listLi.appendChild(newLi);

  enterTodo.value = "";
});

// STOCKAGE DES DONNEES DANS LE NAVIGATEUR
// usage de localstorage
