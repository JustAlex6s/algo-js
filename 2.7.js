//Créez un programme qui demande à l'utilisateur d'entrer un numéro nommé n. Ensuite, demandez-lui l'heure d'entrer un nouveau numéro. À la fin, affichez la somme de tous les nombres collectés de cette façon.
//Example: If the user enters 3 for n then 1, 2 and 3, the program should display 6.

let n = prompt("Entre ton numéro");
let sum = 0;

for(let i = 0; i <= n; i++) {
    sum += i;
}

console.log("La somme des nombres de 1 à " + n + " est : " + sum);
