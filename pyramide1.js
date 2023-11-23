/*Adaptez l'exercice 4 pour faire descendre l'escalier dans l'autre sens afin de former une pyramide.
Résultat attendu dans le terminal pour le chiffre 5 :
*               ​
**​
***​
****​
*****
*****​
****​
***​
**​
* */

const ps=require('prompt-sync')();

// Entrer un nombre
const nombre = Number(ps("Entrez un nombre"));

// Montée d'étoiles
for (let i = 1; i <= nombre; i++) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
        stars += "*";
    }
    console.log(stars);
}
// Descente d'étoiles
for (let i = nombre - 1; i >= 1; i--) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
      stars += "*";
    }
    console.log(stars);
}