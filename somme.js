/*Programme qui demande à l'utilisateur de saisir un nombre "N".​Calculer la somme de tous les nombres entre 1 et N.
Résultat attendu dans le terminal pour le chiffre 5 :
1+2+3+4+5 = 15*/

const ps=require('prompt-sync')();

// Entrer un nombre
const nombreN = Number(ps("Entrez un nombre"));

/*​Calculer la somme de tous les nombres entre 1 et N.*/
let somme = 0;
for (let i = 1; i <= nombreN; i++) {
   somme += i;
}

// Afficher le résultat
console.log("La somme des nombres de 1 à " + nombreN + " est : " + somme);