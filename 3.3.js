//Écrivez un programme qui créera un doublon d'un tableau donné.
//Bonus : faites une première version qui ne le fera qu'en utilisant push(). Faites une deuxième version qui utilise un seul appel de méthode pour effectuer la copie. (Vous devrez effectuer une recherche sur MDN ou Google pour celui-ci.)

let tab=["Alice","Jerem","Alexis","Winona","Cass","Julien","Hanen"];
let tab2=[];


//for (let elem of tab){
//    tab2.push(elem);
//}

//console.log(tab2);

let tab3 = tab.concat(tab2);
console.log (tab3);
