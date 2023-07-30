//object literal
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    vivo: true,
}

// agregar nuevas propiedades al objeto
producto.imagen = "linda.jpg";
delete producto.nombre;

console.log(producto);