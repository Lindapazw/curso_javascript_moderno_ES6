const carrito = [];

// definir un producto 
const producto1 = {
    nombre: 'Monitor 24 pulgadas',
    precio: 400,
}

const producto2 = {
    nombre: 'Play 5',
    precio: 800,
}

const producto3 = {
    nombre: 'Play 4',
    precio: 700,
}

let resultados;
let resultados2;

resultado = [...carrito, producto1, producto2, producto3]
resultado2 = [producto2, producto3,...carrito, producto1]

console.table(resultado);
console.table(resultado2);