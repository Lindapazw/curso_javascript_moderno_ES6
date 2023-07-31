const carrito = [
    {nombre: 'Monitor 27 pulgadas', precio: 500},
    {nombre: 'TV', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Play5 ', precio: 300}
];

for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i]);
}

for (let i = 0; i < carrito.length; i++) {
    console.log(`Nombre: ${carrito[i].nombre} - Precio: ${carrito[i].precio} `);
}