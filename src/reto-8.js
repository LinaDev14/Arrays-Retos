// Comprobar que un array incluye un elemento

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function coincidenciaNumeros() {
    return numeros.includes(3);
}

console.log(coincidenciaNumeros());

const alimentos = ['🍕', '🍔', '🍟', '🌭', '🍿', '🥓', '🥚'];

function encontrarAlimento() {
    return alimentos.includes('🍗');
}

console.log(encontrarAlimento());

//Para buscar en estructuras complejas

const personas = [{
        id: 1,
        nombre: 'Lina',
        apellido: 'Guerrero',
        edad: 22,
        estudio: true
    },

    {
        id: 2,
        nombre: 'Mateo',
        apellido: 'Vlad',
        edad: 25,
        estudio: false
    }

]

function buscarPersona() {
    return personas.some(persona => persona.nombre === 'Mateo');
}

console.log(buscarPersona());