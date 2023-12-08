//Écrivez un programme qui calculera la valeur moyenne d'un tableau donné. Testez-le avec les tableaux suivants :
//[1, 2, 3, 4, 5]=> 3
//[100, 101, 102]=> 101

let tab=[1, 2, 3, 4, 5];
let tab2=[100, 101, 102];

let a=0;
let z=0;

for(let elem of tab){
    a= elem + a;
}
for(let elem of tab2){
    z= elem + z;
}
console.log(a/tab.length);
console.log(z/tab2.length);