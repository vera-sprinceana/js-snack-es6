/*Dato l'array di nomi:

e dati due numeri min e max (min più piccolo di max).
Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.
Eseguiamo questo esercizio prima con forEach e poi con filter.*/

const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];

let min=2;
let max=5;
let nuovoArray=[]
myArray.forEach(
    (element, index)=>{
        if(index > min && index < max){
            nuovoArray.push(element);    
        }
    }
)
console.log(nuovoArray)


 let nuovoArray2=myArray.filter(
     (element, index)=>{
         if(index > min && index < max){
             return (true)
         }
         return false
    }
 )
console.log(nuovoArray2)