// Event bubbling

const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const titulo = document.querySelector('.titulo');

cardDiv.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('click card');
});

infoDiv.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('click info');
});

titulo.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('click titulo');
});