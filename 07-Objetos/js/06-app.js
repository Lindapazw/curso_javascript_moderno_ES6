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

const {nombre,informacion, informacion:{fabricacion: {pais}}} = producto;

console.log(nombre);
console.log(informacion);
console.log(pais);