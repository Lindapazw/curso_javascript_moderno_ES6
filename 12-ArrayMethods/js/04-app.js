const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

let resultado;
resultado = carrito.filter((producto) => producto.precio > 400 )
console.log(resultado);

let resultado2;
resultado2 = carrito.filter((producto) => producto.precio < 600 )
console.log(resultado2);

let resultado3;
resultado3 = carrito.filter((producto) => producto.nombre !== 'Teclado' )
console.log(resultado3);

