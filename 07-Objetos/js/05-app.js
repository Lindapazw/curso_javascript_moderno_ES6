//object literal
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    vivo: true,
    informacion : {
        medidas : {
            peso: "1kl",
            medida: "2 metro"
        },
        fabricacion : {
            pais: "china",
        }
    }
}

console.log(producto);
console.log(producto.informacion); 
console.log(producto.informacion.medidas.peso); 