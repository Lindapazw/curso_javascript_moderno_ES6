const tecnologias = ['Angular', 'JavaScript', 'java', 'react', 'Cobol'];

// filtra todos
const nuevoArray = tecnologias.filter(tech =>  tech !== 'Angular')
console.log(nuevoArray);

// incluye
const filtro = tecnologias.includes('react');
console.log(filtro);

// Al menos uno
const resultado = tecnologias.some( tech => tech !== 'Angular');
console.log(resultado);

// some 
// Find
// Every
// Reduce
// Filter

