const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function saisieOperations() {
  rl.question("Saisissez une opération mathématique (ex. 5 + 3 * 2) : ", (operation) => {
    // Analysez l'opération pour extraire les valeurs et l'opérateur
    const matches = operation.match(/(\d+)\s*([\+\-\*\/])\s*(\d+)/);

    if (matches && matches.length === 4) {
      const a = parseFloat(matches[1]);
      const operator = matches[2];
      const b = parseFloat(matches[3]);

      // Effectuez l'opération en fonction de l'opérateur
      let result;
      switch (operator) {
        case '+':
          result = a + b;
          break;
        case '-':
          result = a - b;
          break;
        case '*':
          result = a * b;
          break;
        case '/':
          if (b !== 0) {
            result = a / b;
          } else {
            console.log("Division par zéro impossible.");
            rl.close();
            return;
          }
          break;
        default:
          console.log("Opérateur non reconnu.");
          rl.close();
          return;
      }

      console.log(`Le résultat de l'opération est : ${result}`);
    } else {
      console.log("Opération invalide.");
    }

    rl.close(); // N'oubliez pas de fermer l'interface readline lorsque vous avez terminé
  });
}

saisieOperations(); // Appelez la fonction pour démarrer le processus
