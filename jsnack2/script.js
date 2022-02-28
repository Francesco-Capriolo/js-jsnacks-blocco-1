/**
 * 
L'utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.
 */

let person1 = prompt("Please enter your first word");
document.getElementById("first-person").innerHTML = person1;
console.log(person1);

let person2 = prompt("Please enter your first word");
document.getElementById("second-person").innerHTML = `${person2}`;
console.log(person2);

let minResult = document.getElementById("min-result");
let maxResult = document.getElementById("max-result");


if (person1.length > person2.length) {
    maxResult.innerHTML = person1;
    minResult.innerHTML = person2;
} else if (person2.length > person1.length) {
    maxResult.innerHTML = person2;
    minResult.innerHTML = person1;
} else {
    minResult.innerHTML = "le parole sono della stessa lunghezza";
    maxResult.innerHTML = "le parole sono della stessa lunghezza";
}