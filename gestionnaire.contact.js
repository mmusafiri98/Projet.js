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

function ajouterContact() {
  let Nom = prompt("Entrez le nom de la personne :");
  let Prenom = prompt("Entrez le Prénom de la personne :");
  let NumeroTelephone = prompt("Entrez le numéro de téléphone");

  let nouvelContact = { Nom, Prenom, NumeroTelephone };

  listeContacts.push(nouvelContact);

  console.log("Liste de Contacts mise à jour :");
  console.log(listeContacts);

  // Appeler la fonction pour supprimer un contact après avoir ajouté un contact
  supprimeContact();
}

function supprimeContact() {
  let Nom = prompt("Entrez le nom de la personne à supprimer :");
  let Prenom = prompt("Entrez le Prénom de la personne à supprimer :");
  let NumeroTelephone = prompt("Entrez le numéro de téléphone de la personne à supprimer :");

  // Créer un nouvel objet
  let contactASupprimer = { Nom, Prenom, NumeroTelephone };

  // Recherchez l'indice de l'objet dans la liste
  const index = listeContacts.findIndex((contact) => {
    return (
      contact.Nom === contactASupprimer.Nom &&
      contact.Prenom === contactASupprimer.Prenom &&
      contact.NumeroTelephone === contactASupprimer.NumeroTelephone
    );
  });

  // Si l'objet est trouvé, supprimez-le
  if (index !== -1) {
    listeContacts.splice(index, 1);
    console.log("Contact supprimé avec succès.");
  } else {
    console.log("Contact non trouvé.");
  }

  // Afficher la liste mise à jour
  console.log("Liste de Contacts mise à jour :");
  console.log(listeContacts);
}

// Appeler la fonction pour saisir la liste de contacts au début du programme
SaisieListeContact()


