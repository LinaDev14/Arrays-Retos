//Fusionar arrays

const frutas = ['🍇', '🥝', '🍈', '🍉', '🍊','🍋','🍒','🍓'];

const comidaRapida = ['🍕','🍔','🍟','🌭','🥓','🥩','🥟','🍣','🍤'];

//Fusionar arrays con el operador spread

const listaAlimentos = [
    ...frutas,
    ...comidaRapida
]

console.log(listaAlimentos);

// Metodo concat

const alimentos = frutas.concat(comidaRapida);
console.log(alimentos);

//Push

const nuevaLista = frutas.push(...comidaRapida);
console.log(nuevaLista);