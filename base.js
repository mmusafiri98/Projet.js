// L'alerte est commentée pour éviter une interruption inattendue du code.
// alert("salut JS");

/* Commentaire
sur
plusieurs
lignes */

let maSuperVariable = "hello"; // Les déclarations de variables doivent se terminer par un point-virgule, pas par un deux-points.
console.log(maSuperVariable);

var unTeste = "voici un texte"; // Utilisez un point-virgule pour terminer la déclaration de variable.
console.log(unTeste);

// Utilisez "const" pour déclarer une constante, et non "constance".
const prenom = "justicie";
console.log(prenom);
let unChiffre = 29;
console.log(unChiffre);
let Chiffre = 24;
console.log(Chiffre);
let chaine = "je suis une chaîne de caractères ";
console.log(chaine);

let nouvelleChaine = "chaîne Précédente : " + chaine + ". Voilà ceci est le contenu.";

let autreConcatenation = `chaîne Précédente : ${chaine}, voilà ceci est le contenu.`;

console.log(nouvelleChaine);
console.log(autreConcatenation);

// Types de données
let string = "je suis une chaîne de caractères";
let number = 24;
console.log(number);
let bool = false; // "false" devrait être en minuscules
console.log(bool);

// Tableau
let array = ["je", "suis", 47, true]; // Utilisation de crochets pour créer un tableau
console.log(array);

let objet = {
    prenom: "audrey", // Utilisation de deux-points (:) pour définir les propriétés de l'objet
    age: 33,
    ville: "bordeaux"
};
console.log(objet);

// Les opérateurs
console.log(4 + 5);
console.log(5 - 5); // Utilisation du signe "-" pour la soustraction
console.log(4 / 2);
console.log(4 * 5);
console.log(4 ** 5);

// Les opérateurs d'affectation
let total = 0;
total = total + 1;
total **= 2; // Utilisation du signe "**" pour la puissance
total *= 5;
total -= 4;
total *= 2;

console.log(total);

// Structure de contrôle
let x = 2; // Utilisation d'un seul signe "=" pour l'affectation
let y = 2;
if (x > y) {
    console.log("YES, x est plus grand que y");
} else if (y > x) {
    console.log("y est plus grand !");
} else {
    console.log("ILS SONT ÉGAUX");
}

if (x) {
    console.log("x existe !");
}

if (x === y) { // Utilisation de "===" pour la comparaison d'égalité
    console.log("ils sont égaux");
} else {
    console.log("pas égaux !");
}

// !! ou
// && et
// && !! il faut que toutes les conditions soient réunies
if (x < y || x > 1) {
    console.log("UI");
}
if (x < y && x > 1) {
    console.log("UI");
}

// Les fonctions
function faireQuelqueChose() { // Ajout de parenthèses pour la déclaration de fonction
    console.log("je fais un truc ");
    console.log(5 + 6);
    alert("Calcule terminé !");
}
const addition = (a, b) => {
    console.log(a + b);
};

addition(4, 3);
addition(432, 57848); // Ajout d'une virgule pour séparer les arguments

function add2() {
    let num = 4;
    console.log(num + 2);
}

// La variable "num" est locale à la fonction "add2", donc elle ne peut pas être utilisée ici.
// console.log(num);
