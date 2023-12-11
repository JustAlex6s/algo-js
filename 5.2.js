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

function randomizeCast (tvSerie){
        let memberHasard =[];
        for (let i=0; i< tvSerie.addmembers.length; i++){
            let hasard = Math.floor(Math.random()*tvSerie.addmembers.length);
            tab.push(tvSerie.addmembers[hasard]);

        }
        tvSerie.addmembers = memberHasard;
        console.log(tvSerie);

}

randomizeCast(askTvSerie());
