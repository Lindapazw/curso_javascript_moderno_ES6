const autenticado = true;
const pueedePagar = true;

console.log(autenticado && pueedePagar? 'si puede': 'no puede');
console.log(autenticado || pueedePagar? 'si puede': 'no puede');

// otro ejemplo 
const nota = 65;
const grado =   nota >= 95? "A+":
                nota >= 85? "B+": 
                nota >= 75? "C+":
                nota >= 65? "D+": "F";


