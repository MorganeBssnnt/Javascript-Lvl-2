/*Écrivez un programme pour un professeur flemmard.​ Vous disposez d'une liste de notes comprises entre 0 et 20​. Écrivez un commentaire pour chacune de ces copies d'élève.

0-4 --> "Catastrophique, il faut tout revoir"​
5-10 --> "Insuffisant"​
11-14 --> "Peut mieux faire"​
15-17 --> "Bien"​
18-20 --> "Excellent, bon travail"*/

const ps=require('prompt-sync')();

// Entrer la note
const note = Number(ps("Entrez la note"));

// Commentaire en fonction de la note
if (note >= 0 && note <= 4) {
      console.log("Catastrophique, il faut tout revoir");
} else if (note >= 5 && note <= 10) {
        console.log("Insuffisant");
} else if (note >= 11 && note <= 14) {
        console.log("Peut mieux faire");
} else if (note >= 15 && note <= 17) {
        console.log("Bien");
} else {
        console.log("Excellent, bon travail");
}