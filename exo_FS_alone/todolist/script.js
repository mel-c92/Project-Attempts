// MES VARIABLES GENERALES
let enterTodo = document.getElementById("enter-todo");
let addBtn = document.getElementById("add");
let listLi = document.querySelector(".list > ul");

// MES FONCTIONS
// possible de mettre mes fonctions JSON.stringify() & JSON.parse() ici.

// A L'OUVERTURE DU NAVIGATEUR
// permet la récupération des précédentes tâches à effectuer, non supprimées

// MES EVENEMENTS
// le bouton permettant d'ajouter une tâche dans la liste des tâches
addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let todo = enterTodo.value.trim();

  if (todo === "") {
    alert("Veuillez entrer une tâche");
    return;
  }
  listLi.classList.add("style");

  // Création d'une nouvelle 'li'
  let newLi = document.createElement("li");
  newLi.innerText += `${todo}`;
  listLi.appendChild(newLi);

  newLi.addEventListener("click", () => {
    if (newLi.classList.contains("todo-done")) {
      newLi.remove();
    } else {
      newLi.classList.add("todo-done");
    }
  });
  enterTodo.value = "";
});
