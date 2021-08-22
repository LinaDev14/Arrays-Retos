// Pide la edad y si es mayor de 18 años indica que ya puede conducir

let name = prompt(`What is your name?`)
let age = parseInt(prompt(`How old are you?`));

if(age > 18) {
    console.log(`${name} you can obtain a driver's license`);
}else {
    console.log(`${name} you are not old enough to drive`);
}