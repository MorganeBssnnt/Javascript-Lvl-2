/*Adaptez l'exercice 5 pour que la pyramide soit dans le bon sens (^).
Résultat attendu dans le terminal pour le chiffre 5 :
    *
   ***​
  *****​
 *******​
********* */

const ps=require('prompt-sync')();

// Entrer un nombre
const nombre = Number(ps("Entrez un nombre"));

// Pyramide d'étoiles
for (let i = 1; i <= nombre; i++) {
    let stars = "";
    for (let space = 1; space <= nombre - i; space++) {
        stars += " ";
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
        stars += "*";
    }
    console.log(stars);
}