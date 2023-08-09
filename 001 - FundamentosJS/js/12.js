// destructuring de objetos

const tecnologias = ['Java', 'JavaScript', 'CSS', 'CSS2', 'CSS3'];

const [uno, dos] = tecnologias;
console.log(uno, dos);

// iterar
tecnologias.forEach( tech => console.log(tech));
console.log('----------------------------------------------------------------');
tecnologias.map( tech => console.log(tech));
