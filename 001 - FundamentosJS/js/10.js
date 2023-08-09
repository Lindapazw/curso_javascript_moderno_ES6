const numeros = [1, 2, 3];

console.log(numeros[1]);

console.log('-----------');

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

console.log('-----------');

numeros.forEach((numero) => {
    console.log(numero);
})