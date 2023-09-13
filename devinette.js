const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function SaiseNombres() {
    const min = 1;
    const max = 100;
    const randomInteger = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(randomInteger);

    rl.question("Écrivez le nombre généré par l'ordinateur : ", (input) => {
        const response = parseInt(input);
        if (!isNaN(response) && (response >=50 || response === 100)) {
            let result;
            if (response === randomInteger) {
                result = "Vous avez deviné le bon nombre !";
            } else {
                result = "Vous avez deviné un nombre incorrect.";
            }
            console.log(`La réponse correcte était : ${randomInteger}. ${result}`);
            rl.close();
        } else {
            console.log("Réponse incorrecte. Vous devez obtenir un nombre egale a 50 ou superieur a 50 ou 100 comme réponse.");
            SaiseNombres(); // Vous pouvez rappeler la fonction pour permettre une nouvelle tentative.
        }
    });
}

SaiseNombres();
