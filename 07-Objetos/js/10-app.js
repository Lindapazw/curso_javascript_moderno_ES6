const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}

const medidas = {
    peso: "1 kg",
    medidas: "1 metros",
}

console.log(producto);
console.log(medidas);

const resultado = Object.assign(producto, medidas);

console.log(resultado);
console.log(resultado2);