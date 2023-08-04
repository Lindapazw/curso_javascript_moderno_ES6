const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

// concat
const resultado = meses.concat(meses2);
console.log(resultado);

// spread
const resultado2 = [...meses, ...meses2, 'Otro mes'];
console.log(resultado2);