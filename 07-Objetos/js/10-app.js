const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}

const medidas = {
    peso: "1 kg",
    medidas: "1 metros",
}

const resultado = Object.assign(producto, medidas);

// spread operator o rest operator
const resultado2 = { ...producto, ...medidas}

console.log(resultado);
console.log(resultado2);
