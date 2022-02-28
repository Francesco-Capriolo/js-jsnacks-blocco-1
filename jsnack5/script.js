/**
 * 
Crea un array vuoto.
Chiedi per 6 volte all'utente di inserire un numero,
se è dispari inseriscilo nell'array.
 * 
 */

let listNumber = [];

for (let i = 0; i < 6; i++) {
    const currentNumber = parseInt(prompt("inserisci un nuovo numero"));
    if ((!isNaN(currentNumber)) && (currentNumber % 2 == 1)) {
        listNumber.push(currentNumber);
    }
}
console.log(listNumber);