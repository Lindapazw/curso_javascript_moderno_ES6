// quitar espacio en blanco
const producto = "   Monitor 20 pulgadas       ";

console.log(producto.trimStart(producto));
console.log(producto.trimEnd(producto));
console.log(producto.trimEnd(producto).trimStart(producto));
console.log(producto.trim(producto));

