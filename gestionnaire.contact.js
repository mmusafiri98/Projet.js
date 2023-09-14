const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function SaisieListeContact(){
  rl.question("ouvre votre   liste de Contact: ", (input) => {
    const mots = input.split(' ').map(parseFloat);
    const numbers = input.split(' ').map(parseFloat);
    let LIsteContact = {
      prenom: "Marco", // Utilisation de deux-points (:) pour définir les propriétés de l'objet
      Nom: "Vittone","
      Numero de telephone: +39 344 545 456 789,
      prenom: "Lorenzo",
      Nom: "Fragola",
      Numero de telephone: "+39 347 567 678 994",
      Prenom: "Fausto,"
      Nom: "Cogliati"
      Numero de telephone: "+32 351 345 789 897",
      Prenom: "Riccardo",
      Nom: "Di Franco",
      Numero de telephone: "+32 365 456 789 789",
  
  } :  
      
 
  console.log(Contact);
}; 

  function ajouterContact() {
    // Demander à l'utilisateur de fournir le nom et la valeur de l'objet
    let Nom = prompt("Entrez le nom dela personne :");
    let Prenom = prompt("Entrez le Prenom de la personne :");
    let Numero de telephone = prompt("Entrez le numero de telephone")
  
    // Créer un nouvel objet
    let nouvelContact = { Nom, Prenom,Numero de telephone };
  
    // Ajouter l'objet à la liste
    listeContacts.push(nouvelContact);
  
    // Afficher la liste mise à jour
    console.log("Liste de Contact mis a jour :");
    console.log(listeContact);
  }
  
  // Appeler la fonction pour ajouter un objet
  ajouterContact();

  function supprimeContact(){
    let Nom = prompt("Entrez le nom dela personne :");
    let Prenom = prompt("Entrez le Prenom de la personne :");
    let Numero de telephone = prompt("Entrez le numero de telephone")
  
    // Créer un nouvel objet
    let elimineContact = { Nom, Prenom,Numero de telephone };
  
    // Ajouter l'objet à la liste
    listeContacts.pop(elimineContact);
  
    // Afficher la liste mise à jour
    console.log("Liste de Contact mis a jour :");
    console.log(listeContact);
  }
  
  // Appeler la fonction pour ajouter un objet
  supprimeContact();


