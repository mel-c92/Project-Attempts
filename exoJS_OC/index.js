// DECLARER DES VARIABLES
let library = 500;

library += 50;
library -= 10;
library += 5;

let textAffiche = "Notre bibliothèque contient " + library + " livres";
// console.log(textAffiche);

// DECLARER DES OBJETS
let myPerso = {
  nom: "Mel",
  age: 32,
  admin: true,
  ville: "Paris",
  langagePrefere: "JS",
};
// ajouter une propriété
myPerso.surnom = "Lloux";

const surnomMyPerso = myPerso.surnom;
// console.log(surnomMyPerso);

// Exos:
let ticket = {
  nomFilm: "Titanic",
  prixEntree: 10,
  numeroSalle: 15,
};
let myName = "Melan";

let texteBorne = `Bonjour ${myName}, votre film ${ticket.nomFilm} est en salle ${ticket.numeroSalle}. Bon visionnage !`;
// console.log(texteBorne);

// DECLARER UN TABLEAU
const maCollectionFilms = ["Titanic", "Avengers", "Pirates des Caraïbes"];
// ou stocker des variables dans les tableaux

// compter le nombre d'élément dans mon tab:
// console.log(maCollectionFilms.length);

const filmDrole = "La revanche d'une blonde";
// ajouter des éléments
maCollectionFilms.push(filmDrole);
// supprimer le dernier élément:
maCollectionFilms.pop();

////////////////////
// Copie par valeur
////////////////////
let variableSimple1 = 25;
let variableSimple2 = variableSimple1;
variableSimple2 = 30;

// Le console.log va afficher 25, le fait d’avoir changé la valeur de variableSimple2 ne change rien pour variableSimple1
// console.log("variableSimple1", variableSimple1);
// console.log("variableSimple2", variableSimple2);

///////////////////////
// Copie par référence
///////////////////////
let variableComplexe1 = ["pomme", "cerise"];
let variableComplexe2 = variableComplexe1;
let variableComplexe3 = [...variableComplexe1];

variableComplexe2.push("poire");

// Le console.log va afficher pomme cerise ET poire. On a modifié la seconde variable, mais le contenu de la première a été changé aussi, parce que c’est le même contenu.
// console.log("variableComplexe1", variableComplexe1);
// console.log("variableComplexe2", variableComplexe2);
// console.log("variableComplexe3", variableComplexe3);

// Exos
let table = ["This is a mans world", "Party in the USA", "Fever", "Jet lag"];
let totalSongs = table.length;
let friendsSongs = ["You got a friend in me", "Toxic"];

table.push(...friendsSongs); //fusionner les tableaux existants en ajoutant les éléments du tableau friends dans table
// console.log(table);
table.pop();
// console.log(table);

// INTERACTIONS AVEC LE WEB: CONDITIONS
let motApp = "bonjour";
// let motUser = prompt("Entrez le mot: " + motApp);

// IF / ELSE
// if (motUser === motApp) {
//   console.log("Bravo vous avez bien écrit le mot");
// } else {
//   console.log("Dommage, recommencez!");
// }

// SWITCH / CASE / DEFAULT
// switch (motUser) {
//   case motApp:
//     console.log("Bravo");
//     break;
//   default:
//     console.log("Vous avez fait une erreur de frappe");
//     break;
// }
