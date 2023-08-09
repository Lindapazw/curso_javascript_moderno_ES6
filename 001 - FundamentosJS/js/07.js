// objetos
const producto = {
    nombre: 'Nombre',
    marca: 'marca',
    precio: 200
}
console.log(producto);

// re escribir
producto.nombre = 'Nombreee';
console.log(producto);

// eliminar
delete producto.marca;
console.log(producto);

// añadir
producto.img = 'img/hola.jpg';
console.log(producto);