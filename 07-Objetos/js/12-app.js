// object constructor
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto2 = new Producto('Monitor 24 ', 400);
console.log(producto2);

const producto3 = new Producto('Monitor 30 ', 400);
console.log(producto3);

