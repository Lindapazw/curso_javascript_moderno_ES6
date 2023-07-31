//object literal
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    vivo: true,
}

// forma nueva
const {vivo,disponible} = producto	
console.log(vivo, disponible);


// destructuring con arreglos
const numeros = [1,2,3,4,5,6,7,8,9,10];
const [ , , tres] = numeros;
console.log(tres);

const [ , ...dos] = numeros;
console.log(dos);

