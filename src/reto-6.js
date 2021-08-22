//Recuperar el min y max de un array

const numeros = [1,3,4,6,8,9,10,11,12,13,14,15,16];

function numeroMax(){
    return Math.max(...numeros);
}
console.log(numeroMax());

function numeroMin(){
    return Math.min(...numeros);
}
console.log(numeroMin());