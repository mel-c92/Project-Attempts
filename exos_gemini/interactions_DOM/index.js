const btn = document.getElementById("myBtn");
const submitBtn = document.querySelector("input[type=submit]");

// function toggleBtnStyle(action) {
//   if (action === "add") {
//     btn.classList.add("btnStyle");
//   } else if (action === "remove") {
//     btn.classList.remove("btnStyle");
//   }
// }

// btn.addEventListener("mouseenter", () => {
//   toggleBtnStyle("add");
// });
// btn.addEventListener("mouseout", () => {
//   toggleBtnStyle("remove");
// });

btn.onmouseenter = () => btn.classList.add("btnStyle");
btn.onmouseleave = () => btn.classList.remove("btnStyle");
submitBtn.onmouseenter = () => submitBtn.classList.add("btnStyle");
submitBtn.onmouseleave = () => submitBtn.classList.remove("btnStyle");

// ****** EXERCICE 1 : modifier un texte ****** //
const h1 = document.querySelector("h1");
// h1.innerHTML += " JS avec le DOM";
h1.textContent = "Interactions avec le DOM via JS";

//  ****** MODIFIER LE STYLE D'UN ELEMENT ****** //
const h2 = document.querySelector("h2");
// h2.style.fontFamily = "Arial";
// // h2.style.fontWeight = "300";
h2.classList.add("h2OtherStyle");

// ******INTERAGIR AVEC UN BOUTON (évènement click) ****** //
btn.addEventListener("click", () => {
  btn.innerText = "Le bouton a été cliqué !";
  btn.style.color = "green";
});

//  ****** AJOUTER DES ELEMENTS AU DOM ****** //
const div1 = document.querySelector("body > div");

btn.addEventListener("click", () => {
  const p = document.createElement("p");
  p.textContent = "Un nouveau paragraphe apparaît !";
  div1.appendChild(p);
});

// VALIDER UN FORMULAIRE SIMPLE
const form = document.getElementById("subscription");
const name = document.getElementById("name");
const email = document.getElementById("email");
const smallName = document.getElementById("user-name");
const smallEmail = document.getElementById("user-email");
const spanSubmit = document.getElementById("submit-message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (name.value === "") {
    smallName.innerText = "Le nom de l'utilisateur ne peut pas être vide";
    smallName.classList.add("display-small");
  } else if (email.value === "") {
    smallEmail.innerText = "Vous devez renseigner votre mail";
    smallEmail.classList.add("display-small");
  }
  spanSubmit.innerText = "Le formulaire a été envoyé, merci !";

  name.value = "";
  email.value = "";
});

//  FILTRER UNE LISTE //
const input = document.getElementById("filter");
const taskList = document.getElementById("tasks-list");
const allLis = taskList.querySelectorAll("li");

input.addEventListener("input", (e) => {
  let valeurRecherchee = e.target.value;
  valeurRecherchee = valeurRecherchee.toLowerCase();

  allLis.forEach((li) => {
    const textLi = li.textContent.toLowerCase();
    if (textLi.includes(valeurRecherchee)) {
      li.style.display = "list-item";
    } else {
      li.style.display = "none";
    }
  });
});

//  EXO 3: CHANGER D'IMAGE AU SURVOL
const img = document.querySelector(".image");

img.onmouseenter = () => img.classList.add("image-2");
img.onmouseleave = () => img.classList.remove("image-2");
