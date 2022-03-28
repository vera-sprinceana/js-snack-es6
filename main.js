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


 let pesoMinore=[];
let minore= biciDacorsa[0]

for(i=0; i<biciDacorsa.length; i++){
    let x=biciDacorsa[i];
    biciDacorsa[i]=minore;
    
    if(minore['peso']> x['peso']){
        minore=x;
      
    }
}
console.log(minore)
let {nome, peso}=minore;
let test=document.getElementById("bici");
test.innerHTML= `<div>Bici con peso minore è: ${nome} -> ${peso} kg`



// Snack2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
let squadre=[
    {
        nomeSquadra:'Torino',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nomeSquadra:'Juventus',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nomeSquadra:'Milan',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nomeSquadra:'Inter',
        puntiFatti: 0,
        falliSubiti: 0
    }
]
console.log(squadre)
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
 ;
 for(let i=0; i<squadre.length; i++) {
     let element= squadre[i];
     element.puntiFatti=getRandomInt( 100);
     element.falliSubiti=getRandomInt( 100);
 }

 let nuovoArray=[];
 for(let i=0; i<squadre.length; i++){
     let element= squadre[i];
     let{nomeSquadra ,  falliSubiti}=element;
     nuovoArray.push(
         {
             nome,
             falliSubiti
         }
     )
         
    console.log(element); 
 }
 
 console.log(nuovoArray)
