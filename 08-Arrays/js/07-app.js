const carrito = [];

// definir un producto 
const producto = {
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

const producto4 = {
    nombre: 'Monitor 50 pulgadas',
    precio: 400,
}

const producto5 = {
    nombre: 'Play 2',
    precio: 800,
}

carrito.push(producto);
carrito.push(producto2);
carrito.push(producto3);
carrito.push(producto4);
carrito.push(producto5);

console.table(carrito);


carrito.splice(2,1);
console.table(carrito);
