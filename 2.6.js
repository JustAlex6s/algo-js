//Créez un programme qui demande à l'utilisateur d'entrer un nombre compris entre 1 et 7. Selon le nombre, affichez le jour de la semaine qui correspond. (1 => lundi, 2 => mardi, etc...)

let nbr = prompt("Entrez un nombre entre 1 et 7...")

if(nbr==1){
    console.log("Le jour est lundi !");
}
else if(nbr==2){
    console.log("Le jour est mardi !");
}
else if(nbr==3){
    console.log("Le jour est mercredi !");
}
else if(nbr==4){
    console.log("Le jour est jeudi !");
}
else if(nbr==5){
    console.log("Le jour est vendredi !");
}
else if(nbr==6){
    console.log("Le jour est samedi !");
}
else if(nbr==7){
    console.log("Le jour est dimanche !");
}
else{
    console.log("le nombre correspond à aucun jours de la semaine !");
}