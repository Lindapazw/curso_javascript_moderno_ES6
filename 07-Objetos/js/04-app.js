//object literal
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    vivo: true,
}

// forma vieja
const nombre = producto.nombre;
console.log(nombre);

// forma nueva
const {precio} = producto	
console.log(precio);

// forma nueva
const {vivo,disponible} = producto	
console.log(vivo, disponible);

