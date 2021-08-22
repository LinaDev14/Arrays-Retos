// Eliminar una propiedad de un objeto

const contacto = {
    
    "telefono": 3182991851,
    "instagram": "@LinaDev",
    "twitter": "@LinaDevFront",
    "correo": "guerrero@gmail.com"
}

const {twitter, ...nuevoContacto} = contacto;
console.log(nuevoContacto);