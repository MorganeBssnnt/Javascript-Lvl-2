/*Écrivez un programme qui demande à un utilisateur un nombre puis qui génère un escalier d'étoiles.
Résultat attendu dans le terminal pour le chiffre 5 :
*​
**​
***​
****​
***** */

const ps=require('prompt-sync')();

// Entrer un nombre
const nombre = Number(ps("Entrez un nombre"));

// Escalier d'étoiles
for (let i = 1; i <= nombre; i++) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
        stars += "*";
    }
    console.log(stars);
}
