
let students = [
    { name: 'Marco', id: 213, grades: 78 },
    { name: 'Paola', id: 110, grades: 96 },
    { name: 'Andrea', id: 250, grades: 48 },
    { name: 'Gaia', id: 145, grades: 74 },
    { name: 'Luigi', id: 196, grades: 68 },
    { name: 'Piero', id: 102, grades: 50 },
    { name: 'Francesca', id: 120, grades: 84 },
  ];
  console.log(students)
  /*1- Dobbiamo creare delle targhe con il loro nome in maiuscolo. Ci serve quindi un nuovo array di stringhe. Ogni elemento
 del nuovo array sarà il nome dello studente ma con tutte le lettere maiuscole.*/
//  let arrayNomi=[];
 let nuovoArray = [];
 
   students.forEach(
       (element)=>{
         element=element.name.toUpperCase()
        nuovoArray.push(element);
   }
   )
   console.log(nuovoArray)
  
   /*2-  Dobbiamo creare un nuovo array con gli studenti che hanno un totale di voti superiore a 70 */
   let voto= []
   
  students.forEach(
      (element)=>{
          if(element.grades>70){
              voto.push(element)
          }
      }
  )
  console.log(voto)

  /*3-  Dobbiamo creare un nuovo array di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120 */
  let votoId=[];
  students.forEach(
      (element)=>{
          if(element.grades>70 && element.id>120){
              votoId.push(element)
          }

      }
  )
  console.log(votoId)