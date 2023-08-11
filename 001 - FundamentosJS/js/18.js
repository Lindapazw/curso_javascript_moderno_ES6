// selectores del DOM

const heading = document.querySelector('h2');
console.log(heading.textContent);
console.log(heading.tagName);
console.log(heading.classList);

console.log('----------------------------------------------------------------');

const headingClass = document.querySelector('.heading');
console.log(headingClass);

const headingId = document.querySelector('#heading');
console.log(headingId);


// querySelectorAll

const enlaces = document.querySelectorAll('a');
console.log(enlaces);

const noExiste = document.querySelector('noExiste');
console.log(noExiste);