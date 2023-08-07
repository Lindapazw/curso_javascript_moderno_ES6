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
        cantidad: '1',
    }

    // revisa si un elemento ya existe 
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);
    if(existe) {
        const cursos = articulosCarrito.map(curso => {
            if(curso.id === infoCurso.id) {
                curso.cantidad++;
                return curso;
            } else {
                return curso;
            }
        });
        articulosCarrito = [...cursos];
    } else {
        articulosCarrito = [...articulosCarrito, infoCurso];
    }

    carritoHTML();
};

// muestra el carrito
function carritoHTML(){

    limpiarHTML();

    articulosCarrito.forEach( curso => {
        const {imagen, titulo, precio, cantidad,id} = curso;
        const row = document.createElement('tr');
        row.innerHTML = `
        <td><img src="${imagen}" width="100"></td>
        <td>${titulo}</td>
        <td>${precio}</td>
        <td>${cantidad}</td>
        <td>
            <a href="#" class="borrar-curso" data-id="${id}"> X </a>
        </td>
        `;

        // agrega en el html del carrito el tbody
        contenedorCarrito.appendChild(row);
    });

};

// elimina los cursos del tbody
function limpiarHTML() {
    // forma lenta
    // contenedorCarrito.innerHTML = ''; 

    while(contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
};

