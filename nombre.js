const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function SaisieNombres() {
    rl.question(" saisir trois nombres, puis affichez le plus grand d'entre eux.: ", (Nombres) => {
    if (x > y || x > z) {
        result=x;
        console.log(`le plus grand valeur sélectionné c'est: ${result}`);

    } else {
        console.log("le valuer sont egaux il aucun valeurs qui ils ont superieur");
    }
    const Nombres = (x, y, z) => {
        console.log(x, y, z); // Utilisez les paramètres x, y et z dans votre fonction
    };
    
    // Pour utiliser la fonction, appelez-la avec des arguments :
    Nombres(1, 2, 3); // Remplacez ces valeurs par celles que vous souhaitez utiliser
    
