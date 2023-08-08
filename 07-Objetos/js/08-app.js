"use strict";

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}


producto.vivo = true;
producto.imagen = "imagen.jpg";

Object.freeze(producto);

console.log(producto);

console.log(Object.isFrozen(producto));