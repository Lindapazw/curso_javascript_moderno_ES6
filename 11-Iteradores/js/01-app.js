for( let i = 0; i < 10; i++ ) {
    if( i % 2 === 0 ) {
        console.log(`Es par ${i}`);
    } else { 
        console.log(`Es impar ${i}`);
    }
}

const carrito = [
    {nombre: 'Monitor 27 pulgadas', precio: 500},
    {nombre: 'TV', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Play5 ', precio: 300}
];

console.log(carrito.length);

for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre);
}