const efectivo = 300;
const credito = 1400;
const disponible = efectivo + credito;
const totalAPagar = 600;


if(efectivo > totalAPagar || credito > totalAPagar || disponible > totalAPagar) {
    console.log('Podemos pagar');
} else {
    console.log('Fondos insuficientes');
}