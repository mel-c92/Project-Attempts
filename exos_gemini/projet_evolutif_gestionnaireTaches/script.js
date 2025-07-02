// MES VARIABLES
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const errorMsg = document.getElementById("errorMessage");

// MES FONCTIONS
function addItem(item) {
  const listItem = document.createElement("li"); // stocke un nv li dans une variable
  listItem.textContent = item; // l'item est récupéré est on le stocke dans la variable listItem (qui devient un li)
  taskList.appendChild(listItem); //on veut qu'il s'affiche sur le DOM, on l'ajoute à l'ul parente
}

// MES EVENEMENTS
addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim(); //enlève les espaces inutiles
  if (taskText !== "") {
    errorMsg.textContent = ""; // supprime le msg d'erreur s'il y en avait
    addItem(taskText); //joue la fonction d'ajouter une liste
    taskInput.value = ""; //réinitialise le champ
  } else {
    errorMsg.textContent = "Vous devez saisir une tâche";
  }
});
