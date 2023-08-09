// destructuring con arreglos
const numeros = [1,2,3,4,5,6,7,8,9,10];

const [uno] = numeros;
console.log(uno);

const [ , , tres] = numeros;
console.log(tres);

const [ , ...dos] = numeros;
console.log(dos);

