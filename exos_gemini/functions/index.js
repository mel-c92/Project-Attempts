// function welcome() {
//   alert("Bonjour à tous !");
// }
// welcome();

// FONCTIONS AVEC PARAMETRES \\
// function welcomeUser(name) {
//   alert("Bonjour " + name);
// }
// welcomeUser("Mel");

// FONCTIONS AVEC DECLARATIONS : CALCULER UNE SOMME \\
// function sum(nmb1, nmb2) {
//   let results = nmb1 + nmb2;
//   return results;
// }
// console.log(sum(2, 6));

// VALIDATION SIMPLE \\
// function isMajor(userAge) {
//   if (userAge < 18) {
//     console.log("Tu n'est pas majeur(e)");
//     return false;
//   } else {
//     return true;
//   }
// }
// isMajor(16);
//  en mode fonction fléchée :
// let isMajor = ()=>{}

// FONCTIONS AVEC PLUSIEURS PARAMETRES \\
// let calculateTtcPrice = (htPrice, quantity, tva) => {
//   let totalHtPrice = htPrice * quantity;
//   let totalTVA = tva * totalHtPrice;
//   let totalTtcPrice = totalHtPrice + totalTVA;
//   return totalTtcPrice;
// };
// console.log(calculateTtcPrice(49.99, 5, 0.196));

// PARAMETRES PAR DEFAUT \\
// const body = document.querySelector("body");
// function welcomeByNation(name, country = "France") {
//   body.innerHTML += `Bonjour ${name}, tu nous viens de ${country}`;
// }
// welcomeByNation("Melanie");

// RETOURNER UN TABLEAU \\
// let generateEvenNb = (limit) => {
//   let even = [];
//   for (i = 0; i < limit; i++) {
//     if (i % 2 === 0) {
//       even.push(i);
//     }
//   }
//   return even;
// };
// console.log(generateEvenNb(16));

// RETOURNER UN OBJET \\
// let body = document.querySelector("body");

// function createProfileUser(name, age, town) {
//   let profile = {};
//   profile.name = name;
//   profile.age = age;
//   profile.town = town;

//   body.innerHTML += `<span>Bienvenue ${name} ! Votre profil contient les informations suivantes : ${age}ans & de ${town}</span>`;
//   return profile;
// }
// console.log(createProfileUser("Melanie", 31, "Rosny"));

// EXERCICE COMPLET FONCTIONS, BOUCLES et CONDITIONS
//Je dois saisir les notes des étudiants, pour chaque note déterminer si elle envoie l'élève au rattrapage, en échec ou en réussite. Faire le calcul de cb d'étudiant a besoin d'aller en R, en E ou en R.  Et calculer la moyenne générale

// je veux rentrer chaque note dans un des tableaux
// function calculMoy(tab) {
//   if (tab.length === 0) {
//     return 0;
//   }
//   let sumTab = 0;
//   for (let i = 0; i < tab.length; i++) {
//     sumTab += tab[i];
//   }
//   let tabMoy = sumTab / tab.length;
//   return tabMoy;
// }

// let analyseNotes = () => {
//   let tabCompteurEchec = [];
//   let tabCompteurRatt = [];
//   let tabCompteurSucces = [];
//   let tabTotalNotes = [];

//   let compteurEchec = 0;
//   let compteurRatt = 0;
//   let compteurSucces = 0;

//   let totalNbCopies = parseInt(
//     prompt("Entrez le nombre de copies à analyser : ")
//   );

//   for (let i = 0; i < totalNbCopies; i++) {
//     let noteEtudiant = parseInt(prompt("Rentrez la note d'un étudiant (0-20)"));
//     tabTotalNotes.push(noteEtudiant);

//     if (noteEtudiant >= 0 && noteEtudiant <= 7) {
//       tabCompteurEchec.push(noteEtudiant);
//       compteurEchec++;
//     } else if (noteEtudiant > 7 && noteEtudiant <= 10) {
//       tabCompteurRatt.push(noteEtudiant);
//       compteurRatt++;
//     } else if (noteEtudiant > 10 && noteEtudiant <= 20) {
//       tabCompteurSucces.push(noteEtudiant);
//       compteurSucces++;
//     } else {
//       alert("Rentrez un nombre entre 0 et 20");
//     }
//   }
//   console.log(tabCompteurEchec);
//   console.log("Il y a " + compteurEchec + " d'élèves qui ont échoué le test");
//   console.log("Moyenne des élèves en échec : " + calculMoy(tabCompteurEchec));

//   console.log(tabCompteurRatt);
//   console.log(
//     "Il y a " + compteurRatt + " d'élèves qui doivent rattraper l'examen"
//   );
//   console.log(
//     "Moyenne des élèves en rattrapage : " + calculMoy(tabCompteurRatt)
//   );

//   console.log(tabCompteurSucces);
//   console.log("Il y a " + compteurSucces + " d'élèves qui ont réussi le test");
//   console.log(
//     "Moyenne des élèves en réussite : " + calculMoy(tabCompteurSucces)
//   );

//   console.log(
//     "Moyenne générale de toutes les copies : " + calculMoy(tabTotalNotes)
//   );
// };
// analyseNotes();

// CODE CORRIGÉ \\
function calculMoy(tab) {
  if (tab.length === 0) {
    return 0; // Retourne 0 si le tableau est vide pour éviter la division par zéro
  }
  let sumTab = 0;
  for (let i = 0; i < tab.length; i++) {
    sumTab += tab[i];
  }
  let tabMoy = sumTab / tab.length;
  return tabMoy.toFixed(2); // Ajout de .toFixed(2) pour limiter à 2 décimales pour la clarté
}

let analyseNotes = () => {
  let tabCompteurEchec = [];
  let tabCompteurRatt = [];
  let tabCompteurSucces = [];
  let tabTotalNotes = []; // Ce tableau contiendra uniquement les notes valides

  let compteurEchec = 0;
  let compteurRatt = 0;
  let compteurSucces = 0;

  let totalNbCopiesStr = prompt("Entrez le nombre de copies à analyser :");
  let totalNbCopies = parseInt(totalNbCopiesStr);

  // Validation du nombre de copies
  if (isNaN(totalNbCopies) || totalNbCopies <= 0) {
    alert("Veuillez entrer un nombre positif valide pour le nombre de copies.");
    return; // Sortir de la fonction si l'entrée est invalide
  }

  for (let i = 0; i < totalNbCopies; i++) {
    let noteEtudiantStr = prompt(
      `Rentrez la note de l'étudiant n°${i + 1} (0-20)`
    );
    let noteEtudiant = parseInt(noteEtudiantStr);

    // Validation de la note de l'étudiant
    if (isNaN(noteEtudiant) || noteEtudiant < 0 || noteEtudiant > 20) {
      alert("Note invalide. Veuillez rentrer un nombre entre 0 et 20.");
      i--; // Décrémente 'i' pour redemander la note à cet étudiant
      continue; // Passe à l'itération suivante de la boucle
    }

    tabTotalNotes.push(noteEtudiant); // Ajout de la note valide

    if (noteEtudiant >= 0 && noteEtudiant <= 7) {
      tabCompteurEchec.push(noteEtudiant);
      compteurEchec++;
    } else if (noteEtudiant > 7 && noteEtudiant <= 10) {
      // Condition pour 8, 9, 10
      tabCompteurRatt.push(noteEtudiant);
      compteurRatt++;
    } else if (noteEtudiant > 10 && noteEtudiant <= 20) {
      tabCompteurSucces.push(noteEtudiant);
      compteurSucces++;
    }
    // Pas de 'else' ici, car les notes invalides sont gérées plus haut.
  }

  console.log("--- Résultats de l'analyse des notes ---");

  console.log("Notes des élèves en Échec :", tabCompteurEchec);
  console.log(`Il y a ${compteurEchec} élève(s) qui ont échoué le test.`);
  console.log(`Moyenne des élèves en échec : ${calculMoy(tabCompteurEchec)}`);

  console.log("Notes des élèves en Rattrapage :", tabCompteurRatt);
  console.log(
    `Il y a ${compteurRatt} élève(s) qui doivent rattraper l'examen.`
  );
  console.log(
    `Moyenne des élèves en rattrapage : ${calculMoy(tabCompteurRatt)}`
  );

  console.log("Notes des élèves en Réussite :", tabCompteurSucces);
  console.log(`Il y a ${compteurSucces} élève(s) qui ont réussi le test.`);
  console.log(
    `Moyenne des élèves en réussite : ${calculMoy(tabCompteurSucces)}`
  );

  // Calcul et affichage de la moyenne générale
  console.log("--- Moyenne Générale ---");
  console.log(
    `Moyenne générale de toutes les notes valides : ${calculMoy(tabTotalNotes)}`
  );
};

analyseNotes();
