/*---------------
    @VARIABLES
---------------*/

const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarrito = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');

cargarEventListener();
function cargarEventListener(){
    listaCursos.addEventListener('click', agregarCursos);
};

/*---------------
    @FUNCIONES
----------------*/

function agregarCursos(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')) {
        console.log('agregando al carrito');
    }
}