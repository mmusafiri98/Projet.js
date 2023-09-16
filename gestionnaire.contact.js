const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Créez une liste de contacts vide pour stocker vos contacts
let listeContacts = [];

function SaisieListeContact() {
  rl.question("Ouvrez votre liste de Contact: ", (input) => {
    const mots = input.split(' ');

    // Créez un tableau pour stocker les contacts
    let listeContact = [];

    // Parcourez les mots par paires et créez des objets de contact
    for (let i = 0; i < mots.length; i += 3) {
      let contact = {
        prenom: mots[i],
        Nom: mots[i + 1],
        NumeroTelephone: mots[i + 2]
      };
      listeContact.push(contact);
    }

    // Affichez la liste des contacts
    console.log("Liste de Contacts :");
    console.log(listeContact);
    
    // Appeler la fonction pour ajouter un contact après avoir saisi la liste
    ajouterContact();
  });
}

// Appeler la fonction pour saisir la liste de contacts au début du programme
SaisieListeContact();

function ajouterContact() {
  rl.question("Entrez le nom de la personne : ", (Nom) => {
    rl.question("Entrez le prénom de la personne : ", (prenom) => {
      rl.question("Entrez le numéro de téléphone : ", (NumeroTelephone) => {
        // Créez un nouvel objet contact avec les informations saisies
        let nouvelContact = { Nom, prenom, NumeroTelephone };

        // Ajoutez l'objet contact à la liste
        listeContacts.push(nouvelContact);

        // Affichez la liste mise à jour
        console.log("Liste de Contacts mise à jour :");
        console.log(listeContacts);

        // Fermez l'interface readline
        rl.close();
      });
    });
  });
}

function supprimeContact() {
  rl.question("Entrez le nom de la personne à supprimer : ", (Nom) => {
    rl.question("Entrez le prénom de la personne : ", (prenom) => {
      rl.question("Entrez le numéro de téléphone : ", (NumeroTelephone) => {
        // Créez un nouvel objet contact avec les informations saisies
        let AncienneContact = { Nom, prenom, NumeroTelephone };

        // Recherchez l'index de l'ancien contact dans la liste
        const index = listeContacts.findIndex((contact) =>
          contact.Nom === AncienneContact.Nom &&
          contact.prenom === AncienneContact.prenom &&
          contact.NumeroTelephone === AncienneContact.NumeroTelephone
        );

        if (index !== -1) {
          // Supprimez l'ancien contact de la liste
          listeContacts.splice(index, 1);

          // Affichez la liste mise à jour
          console.log("Liste de Contacts mise à jour :");
          console.log(listeContacts);
        } else {
          console.log("Le contact n'a pas été trouvé.");
        }

        // Fermez l'interface readline
        rl.close();
      });
    });
  });
}


