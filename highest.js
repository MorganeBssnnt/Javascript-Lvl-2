/*programme qui demande à l'utilisateur de saisir 3 nombres puis trouver le plus grand.
Résultat attendu dans la console :
[12 , 54 , 32 ] --> 54*/

const ps=require('prompt-sync')();

// Entrer premier nombre
const premierNombre = Number(ps("Entrez le premier nombre"));
console.log(premierNombre);

// Entrer le deuxième nombre
const deuxiemeNombre = Number(ps("Entrez le deuxieme nombre"));
console.log(deuxiemeNombre); 

// Entrer le troisième nombre
const troisiemeNombre = Number(ps("Entrez le troisieme nombre"));
console.log(troisiemeNombre);

// Vérifier qui est le plus grand
let highNumber = Math.max(premierNombre, deuxiemeNombre, troisiemeNombre);

// Afficher le résultat dans la console
console.log("Le plus grand nombre est : " + highNumber);