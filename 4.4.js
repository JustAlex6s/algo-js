//Create a function pickLearner(inputAr, n) that takes 2 parameters.

//inputAr: Un tableau d'apprenants (ceau que vous avez créé dans l'exercice 3.0 par exemple)
//n: Un nombre, qui doit être supérieur à 0 et inférieur à la longueur de inputAr
//La fonction devrait renvoyer un tableau d'apprenants sélectionnés au hasard.

let inputAr = ["Alice", "Jerem", "Alexis", "Winona", "Cass", "Julien", "Hanen"];
let n = prompt("Entrez un nombre supérieur à 0 et inférieur à " + inputAr.length);

// Fonction pour générer un nombre aléatoire entre min et max
function rand10(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function pickLearner(inputAr, n) {
    // Vérifier si l'entrée est un nombre valide
    if (n > 0 && n < inputAr.length) {
        n = parseInt(n, 10);

        // Sélectionner et afficher les noms au hasard
        let selectedLearners = [];
        for (let i = 0; i < n; i++) {
            let indexAleatoire = rand10(0, inputAr.length);
            selectedLearners.push(inputAr[indexAleatoire]);
        }
        return selectedLearners;
    } else {
        console.log("Veuillez entrer un nombre valide, supérieur à 0 et inférieur à " + inputAr.length);
    }
}

console.log(pickLearner(inputAr, n));