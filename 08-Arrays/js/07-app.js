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

carrito.push(producto);
carrito.push(producto2);

const producto3 = {
    nombre: 'Play 4',
    precio: 700,
}

carrito.unshift(producto3);
console.table(carrito);

// pop - elimina el ultimo
carrito.pop();
console.table(carrito);

// pop - elimina el primero
carrito.shift();
console.table(carrito);