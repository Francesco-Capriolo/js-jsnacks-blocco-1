/**
 * Creiamo un array con dieci numeri randomici
 * calcoliamo la somma di tutti gli elementi
 * e calcoliamo anche il valore medio
 */


const numbers = [];
let sum = 0;

for (let i = 0; i < 10; i++) {
    numbers.push(Math.floor(math.random() * 1000));
    sum += numbers;
}

console.log(numbers);
console.log(sum);
console.log(sum / numbers.length);