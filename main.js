// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
let biciDacorsa=[
    {
        nome: 'Ciclocross',
        peso: 6.8 
    },
    {
        nome:'Ebike',
        peso:25
    },
    {
        nome: 'Gravel',
        peso: 1.5
    },
    {
        nome: 'Aeroad',
        peso:7.3
    }
]
console.log(biciDacorsa)
let[nome, peso]=biciDacorsa;
console.log(nome, peso)

 let pesoMaggiore=[];
let minore= biciDacorsa[0]

for(i=0; i<biciDacorsa.length; i++){
    let x=biciDacorsa[i];
    if(minore['peso']> x['peso']){
        minore=x;
    }
}
console.log(minore)
document.getElementById("bici").innerHTML+=`${minore.nome} ${minore.peso}`;


// Snack2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.