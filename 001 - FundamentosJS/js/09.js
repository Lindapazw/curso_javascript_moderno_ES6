const producto = {
    nombre: 'nombre',
    precio: 'precio',
}

const cliente = {
    algo: 'algo',
    apellido: 'apellido',
}

const todo = {...cliente, ...producto};

console.log(todo);