/**
 *
Chiedi un numero di 7 cifre all'utente
e calcola la somma di tutte le cifre che compongono il numero.

 *
 */


const number = prompt("dammi un numero di 7 cifre");

let sum = 0;

for (let i = 0; i < number.length; i++) {
    sum += parseInt(number.charAt(i));
}

console.log(sum);