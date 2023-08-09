const tecnologias = ['Java', 'JavaScript', 'CSS', 'CSS2', 'CSS3'];
console.log(tecnologias);

// eliminar
const nuevoArray = tecnologias.filter((tech) => {
    return tech !== 'Java';
})

console.log(nuevoArray);