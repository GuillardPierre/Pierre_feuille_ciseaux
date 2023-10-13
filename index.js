// function quiEsTu() {                                             Ancienne fonction pour jouer dans la console
//   let question = "Pierre, feuille ou ciseaux ?";
//   let choix;
//   let i = 0;
//   while (choix !== "pierre" && choix !== "feuille" && choix !== "ciseaux") {
//     choix = prompt(question);
//     i++;
//     if (i > 2) {
//       alert("Alerte au gogol!!!");
//       return "bug";
//     }
//   }
//   return choix;
// }

// function choixAdversaire() {                                    Ancienne fonction pour que la page fasse un choix aléatoire
//   let chiffreRandom = nombreRandom(3);
//   let adversaire = "";
//   if (chiffreRandom == 0) {
//     adversaire = "pierre";
//   } else if (chiffreRandom == 1) {
//     adversaire = "feuille";
//   } else if (chiffreRandom == 2) {
//     adversaire = "ciseau";
//   }
//   return adversaire;
// }

// function duel(adversaire, choix) {                         Ancienne fonction duel pour savoir qui gagne
//   if (choix === "bug") {
//     alert("partie annulée");
//   } else if (adversaire === choix) {
//     console.log("égalité");
//   } else if (
//     (choix === "pierre" && adversaire === "feuille") ||
//     (choix === "feuille" && adversaire === "ciseaux") ||
//     (choix === "ciseaux" && adversaire === "pierre")
//   ) {
//     console.log("T'as perdu!");
//   } else {
//     console.log("Bien joué bg!");
//   }
// }

// let adversaire = choixAdversaire();                      Lancement du jeu
// let choix = quiEsTu();
// duel(adversaire, choix);

// Nouvelle fonction pour que la page fasse un choix entre les images
function choixAdversaire() {
  let adversaire = nombreRandom(3);
  return adversaire;
}

// Fonction pour choisir un nombre aléatoire
function nombreRandom(max) {
  return Math.floor(Math.random() * max);
}

let choixJoueur = "bug";
let victoire = 0;
let partiesJouees = 0;

let images = [
  { src: "Images/rock.png", alt: "pierre" },
  { src: "Images/Hand.png", alt: "feuille" },
  { src: "Images/scissor.png", alt: "ciseaux" },
];

let mesBoutons = [
  document.getElementById("0"),
  document.getElementById("1"),
  document.getElementById("2"),
];

let slotScore = document.getElementById("score");
let texteScore = `Votre score est de : ${victoire} / ${partiesJouees}`;
slotScore.innerHTML = texteScore;

mesBoutons.forEach((boutons) => {
  boutons.addEventListener("click", () => {
    choixJoueur = boutons.id;
    let slotJoueur = document.getElementById("resultat");

    if (choixJoueur !== "bug") {
      let VS = document.createTextNode("VS");
      let imageJoueur = document.createElement("img");
      imageJoueur.src = images[choixJoueur].src;
      imageJoueur.alt = images[choixJoueur].alt;
      imageJoueur.id = "joueur";
      let adversaire = choixAdversaire();
      console.log(adversaire);
      let imageAdversaire = document.createElement("img");
      imageAdversaire.src = images[adversaire].src;
      imageAdversaire.alt = images[adversaire].alt;
      imageAdversaire.id = "adversaire";
      console.log(imageAdversaire.alt);

      while (slotJoueur.firstChild) {
        slotJoueur.removeChild(slotJoueur.firstChild);
      }
      slotJoueur.appendChild(imageJoueur);
      slotJoueur.appendChild(VS);
      slotJoueur.appendChild(imageAdversaire);

      if (imageJoueur === "bug") {
        alert("partie annulée");
      } else if (imageAdversaire.alt === imageJoueur.alt) {
        console.log("égalité");
        slotJoueur.style.background = "orange";
      } else if (
        (imageJoueur.alt === "pierre" && imageAdversaire.alt === "feuille") ||
        (imageJoueur.alt === "feuille" && imageAdversaire.alt === "ciseaux") ||
        (imageJoueur.alt === "ciseaux" && imageAdversaire.alt === "pierre")
      ) {
        console.log("perdu");
        slotJoueur.style.background = "red";
        partiesJouees++;
      } else {
        console.log("gagné");
        slotJoueur.style.background = "green";
        partiesJouees++;
        victoire++;
      }
    }
  });
});
