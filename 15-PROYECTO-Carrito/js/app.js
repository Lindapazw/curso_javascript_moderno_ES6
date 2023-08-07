/*---------------
    @VARIABLES
---------------*/

const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarrito = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

/*---------------
    @FUNCIONES
----------------*/

cargarEventListener();
function cargarEventListener(){
    listaCursos.addEventListener('click', agregarCursos);
};

function agregarCursos(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')) {
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}

// extraer info del curso
function leerDatosCurso(curso){
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('span').textContent,
        id:     curso.querySelector('a').getAttribute('data-id'),
    }
    
    // agregar elementos a carrito
    articulosCarrito = [...articulosCarrito, infoCurso];
    console.log(articulosCarrito);
};