const tecnologias = ['Angular', 'JavaScript', 'java', 'react', 'Cobol'];

const nuevoArray = tecnologias.filter(tech =>  tech !== 'Angular')
console.log(nuevoArray);

const filtro = tecnologias.includes('react');
console.log(filtro);