const producto = "Monitor 20 pulgadas";


//replace
console.log(producto);
console.log(producto.replace('pulgadas', '"'));
console.log(producto.replace('Monitor', 'Monitor curvo'));

//slice para cortar 
console.log(producto.slice(0,10));
console.log(producto.slice(8));

// substring
console.log(producto.substring(8));

// Mostramos la primera letra del nombre
const usuario = "Linda";
console.log(usuario.substring(0,1));

// chart At
console.log(usuario.charAt(0));
