const carrito = [
    {nombre: 'Monitor 27 pulgadas', precio: 500},
    {nombre: 'TV', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Play5 ', precio: 300}
];

const nuevoArrglo = carrito.forEach(({nombre, precio}) => {
    console.log(`El nombre es: ${nombre} y el precio : ${precio}`);
});

console.log('----------------');

const nuevoArreglo2 = carrito.map(({nombre, precio}) => {
    console.log(`El nombre es: ${nombre} y el precio : ${precio}`);
});


