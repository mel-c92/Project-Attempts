// BOUCLE WHILE : EXERCICES
// CALCULER UNE SOMME \\
// let i = 1;
// let sum = 0;

// while (i <= 10) {
//   sum = sum + i;
//   i++;
// }
// console.log(sum);

// COMPTE A REBOURS \\
// let depart = prompt("Entrez un nombre de départ");
// let arrivee = prompt("Entrez un nombre d'arrivée");

// la boucle doit continuer tant que le départ est supérieur ou égal à l'arrivée
// while (depart >= arrivee) {
//   console.log(depart);
//   depart--;
// }
// console.log("Compte à rebours terminé !");

//  FAIRE DEVINER UN NOMBRE \\
// let nbSecret = 4;
// let tentativeUser = 0;

// while (tentativeUser !== nbSecret) {
//   tentativeUser = prompt("Rentrez un chiffre entre 1 et 10");
//   tentativeUser = parseInt(tentativeUser);
//   if (tentativeUser > nbSecret) {
//     alert("C'est moins !");
//   } else if (tentativeUser < nbSecret) {
//     alert("C'est plus !");
//   }
// }
// alert("Bien joué ! Tu as trouvé le nombre secret");

//   VALIDATION D'UN MOT DE PASSE \\
// let secretPwd = "Melan7129";
// let pwdUserTent = "";

// while (pwdUserTent !== secretPwd) {
//   pwdUserTent = prompt("Entrez votre mot de passe");
//   if (pwdUserTent !== secretPwd) {
//     alert("Le mot de passe est erroné");
//   }
// }
// alert("Vous vous dirigeons sur votre page de profil");

// BOUCLES FOR : EXERCICES
// COMPTER DE 1 à 10
// for (boucle = 1; boucle <= 10; boucle++) {
//   console.log(boucle);
// }

// COMPTE A REBOURS AVEC FOR
// for (i = 10; i >= 1; i--) {
//   console.log(i);
// }
// console.log("Décollage amorcé");

// EXO PLUS COMPLEXE : PARCOURIR UN TABLEAU
// const list = ["Oeufs", "Tomates", "Carpaccio", "Lait d'amande", "Basilic"];
// for (i = 0; i < list.length; i++) {
//   console.log(list[i]);
// }
