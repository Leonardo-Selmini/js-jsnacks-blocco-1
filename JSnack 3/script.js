// JSnack 3
// Stampa le potenze di 2 fino a 1000.

let i = 0;
let result = 0;

while (result <= 1000) {
  result = Math.pow(2, i);
  if (result <= 1000) {
  document.getElementById('output').innerHTML += `<li>2 elevato alla ${i} è uguale a ${result}</li><br>`
  } 
  i++;
}
