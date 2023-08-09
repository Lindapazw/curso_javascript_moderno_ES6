function sumar(a,b) {
    return {
        resultado: a + b,
        mensaje: 'Holaaa'
    }
};

const {resultado, mensaje} = sumar(20,20);

console.log(resultado);
console.log(mensaje);