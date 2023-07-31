const carrito = [
    {nombre: 'Monitor 27 pulgadas', precio: 500},
    {nombre: 'TV', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Play5 ', precio: 300}
];

const nuevoArreglo = carrito.map( (producto) =>  `Nombre: ${producto.nombre} - Precio: ${producto.precio} `);
const nuevoArreglo2 = carrito.forEach( (producto) => `Nombre: ${producto.nombre} - Precio: ${producto.precio} `);

console.log(nuevoArreglo);
console.log(nuevoArreglo2);