const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function SaisieReponse() {
    rl.question("Quelle est la capitale de la France (1 pour Montpellier, 2 pour Strasbourg, 3 pour Paris) : ", (input) => {
        // Convertit la réponse en nombre
        const response = parseInt(input);

        // Vérification que la réponse est un nombre valide (3)
        if (!isNaN(response) && response ==3) {
            let result;
            if (response === 3) {
                result = "Paris";
            } else if (response === 1) {
                result = "Montpellier";
            } else if (response === 2) {
                result = "Strasbourg";
            }
            console.log(`La réponse correcte sélectionnée est : ${result}`);
        } else {
            console.log("Réponse incorrecte. Veuillez sélectionner une autre reponse.");
        }
        
        rl.close();
    });
}

SaisieReponse();


