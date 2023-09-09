
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function SaisieNombres() {
    rl.question("Saisissez trois nombres, puis affichez le plus grand d'entre eux : ", (input) => {
        // Séparez la chaîne de caractères en nombres
        const numbers = input.split(' ').map(parseFloat);
        
        // Assurez-vous qu'il y a exactement trois nombres
        if (numbers.length !== 3 || numbers.some(isNaN)) {
            console.log("Saisie invalide. Veuillez entrer trois nombres valides.");
            rl.close();
            return;
        }

        // Obtenez les nombres individuellement
        const [x, y, z] = numbers;

        // Trouvez le plus grand nombre
        let result;
        if (x >= y && x >= z) {
            result = x;
        } else if (y >= x && y >= z) {
            result = y;
        } else {
            result = z;
        }

        console.log(`Le plus grand nombre sélectionné est : ${result}`);
        rl.close();
    });
}

// Appelez la fonction pour démarrer le processus
SaisieNombres();

        

    
