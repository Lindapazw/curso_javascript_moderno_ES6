// Destructuring de 2 objetos o más
const producto = {
    nombre: 'nombre',
    precio: 'precio',
}

const cliente = {
    nombre: 'nombre',
    apellido: 'apellido',
}

const {nombre, precio} = producto;
const {nombre: nombreCliente, apellido} = cliente;
