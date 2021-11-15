// JSnack 1
// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while


// VERSIONE CON IL FOR 00000000
let number = 0;

// for (i = 0; i < 5; i++) {
//   let userNumber = parseInt(prompt('inserisci un numero:'));
//   number += userNumber;
// }

// document.getElementById('output').innerHTML = 'La somma dei numeri che hai inserito è' + number;


// VERSIONE CON IL WHILE 00000000
let i = 0;

while (i < 5) {
  let userNumber = parseInt(prompt('inserisci un numero:'));
  number += userNumber;
  i++;
}

document.getElementById('output').innerHTML = 'La somma dei numeri che hai inserito è ' + number;