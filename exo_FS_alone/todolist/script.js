// MES VARIABLES GENERALES
let body = document.querySelector("body");
let form = document.getElementById("form");
let enterTodo = document.getElementById("enter-todo");
let addBtn = document.getElementById("add");
let listLi = document.querySelector(".list > ul");

// MON EVENEMENT
addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let todo = enterTodo.value;
  console.log(todo); //récupérer la valeur de l'input

  
});
