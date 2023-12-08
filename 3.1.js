//Écrivez un programme qui ajoutera tous les éléments d'un tableau. Testez-le avec les tableaux suivants :
//[1, 2, 3, 4, 5]=> 15
//[100, 101, 102]=> 303

let tab1 =[1, 2, 3, 4, 5];
let tab2 =[100, 101, 102];
let y = 0;

let tab3 = tab1.concat(tab2);
console.log (tab3);

for (let elem of tab3){
    y = elem + y ;
}

console.log(y);