

const puntaje = 500;

function revisarPuntaje() {
    if(puntaje > 400) {
        console.log('Casi');
        return;
    }
    if(puntaje > 500) {
        console.log('Excelente');
        return;
    }
}

revisarPuntaje();