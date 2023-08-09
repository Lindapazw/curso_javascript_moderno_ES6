const carrito = [
    {nombre: 'Monitor 27 pulgadas', precio: 500},
    {nombre: 'TV', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Play5 ', precio: 300}
];

for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i]);
};

console.log('----------------')

// producto es el singular
carrito.forEach( function (producto) {
    console.log(`Nombre: ${producto.nombre} - Precio: ${producto.precio} `);
});

console.log('----------------')

carrito.forEach( producto => {
    console.log(`El nombre: ${producto.nombre} - Precio: ${producto.precio}`);
});

console.log('----------------')

carrito.forEach(({ nombre, precio }) => {
    console.log(`Nombre: ${nombre} - Precio: ${precio}`);
});

