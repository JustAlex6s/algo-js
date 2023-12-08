//By reusing the function rand10() created in Exercise 2, write a function named multiRand(n) that returns an array of n numbers between 1 and 10. You should not modify anything in rand10() to achieve this. Write a documentation for the multiRand(n) function.

//Use that function to create a program that will ask the number of random numbers to generate then display that same number of random numbers.


let min = 1;
let max =10;
function rand10(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }


let n = rand10(min, max);
console.log(n);
function multiRand(n){
    let tab = [];
    for (i=0; i<n;i++){
        tab.push(rand10(1,10));
    }
    return tab;
}
console.log(multiRand(n));