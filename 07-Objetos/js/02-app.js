//object literal
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}

console.log(producto.nombre);
console.log(producto.precio);

console.log(producto["disponible"]);

// agregar nuevas propiedades al objeto
producto.imagen = "linda.jpg";