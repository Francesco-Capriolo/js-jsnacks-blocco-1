/**
 * L'utente inserisce due numeri in successione, con due prompt.
    Il software stampa il maggiore.
 */
let person1 = parseInt(prompt("Please enter your first number"));
console.log(person1);
let person2 = parseInt(prompt("Please enter your first number"));
console.log(person2);


if (isNaN(person1) || (isNaN(person2))) {
    console.log("i numeri non sono validi");
} else if (person1 > person2) {
    console.log(person1);
} else if (person1 < person2) {
    console.log(person2);
} else {
    console.log("avete scelto lo stesso numero");
}