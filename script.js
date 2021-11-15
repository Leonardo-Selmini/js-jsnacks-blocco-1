// JSnack 2
// Dare la possibilità di inserire due parole.
// Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.
// Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

let wordA = prompt('Inserisci una parola:');
let wordB = prompt('Inserisci un\'altra parola:');

if (wordA.length == wordB.length) {
  document.getElementById('output').innerHTML = wordA + ' ' + wordB;
} else if (wordA.length > wordB.length) {
  document.getElementById('output').innerHTML = wordA;
} else {
  document.getElementById('output').innerHTML = wordB;
}
