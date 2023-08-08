const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    mostrarInfo : function () {
        console.log(`El ${this.nombre} tiene un precio de: ${this.precio}`);
    }
}

const producto2 = {
    nombre: "Tablet",
    precio: 300,
    disponible: true,
    mostrarInfo : function () {
        console.log(`La ${this.nombre} tiene un precio de: ${this.precio}`);
    }
}

producto.mostrarInfo();
producto2.mostrarInfo();
