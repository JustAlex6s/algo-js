/*Create a function named askTvSerie() that will ask the user for the following data about its favorite TV serie:
nom
Année de production
Noms des membres de la distribution (il peut y en avoir autant que l'utilisateur le souhaite)
Cette fonction doit rassembler toutes les données dans un seul objet et les renvoyer. La structure des données doit être élégante.
Créez un programme qui utilise cette fonction pour générer un objet de série TV et l'afficher à l'utilisateur au format JSON.*/

function askTvSerie(){
    let tvSerie ={
        //clé : valeur;
        'title' : prompt("Quel est le nom de ta série préféré ? "),
        years : parseInt(prompt("Quel est l'année de production ?")),
        addmembers : [],
    }
    let members = prompt("Quels sont les membres?");
    while (members !==''){
        tvSerie.addmembers.push(members);
        members = prompt("Quels sont les membres?");

    }
    return tvSerie;
}
console.log(askTvSerie());