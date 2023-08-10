const tecnologias = ['Java', 'JavaScript', 'CSS', 'CSS2', 'CSS3'];
console.log(tecnologias);

// modificar
const nuevoArray = tecnologias.map((tech) => {
    if (tech === 'JavaScript') {
        return 'Hola';
    } else {
        return tech;
    }
});

console.log(nuevoArray); 

// Ejemplo con iterador
const array = nuevoArray.map((tech) => {
    console.log(`tech: ${tech}`);
});