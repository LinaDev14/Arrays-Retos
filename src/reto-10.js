//Eliminar elementos de un Array

//Para eliminar un elemento de un array
const foodRemove = '🍔';
const arrayfoods= ['🍟','🍔','🍕','🍿'];


const newArray = arrayfoods.filter(
    comida => comida !== foodRemove
);

console.log(newArray);

//Para eliminar varips elementos de un array

const valuesRemove = [1,2,3,4];
const valuesArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];

function newArrayValues() {
    return valuesArray.filter(
        values => valuesRemove.includes(values)
    );
}

console.log(newArrayValues());