const reproductor = {
    cancion: '',
    reproducir: id => console.log(`Reproducioendo cancion con el id: ${id}`),
    pausar: () => console.log(`Pausando...`),
    borrar : () => console.log('Borrando cancion ...'),
    crearPlayList : nombre => console.log(`crear Play List ${nombre}`),
    borrar : () => console.log('Borrando cancion ...'),
    reproducirPlayList : nombre => console.log(`Reproducioendo la playlist con el nombre: ${nombre}`),

    set nuevaCancion(cancion){
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },

    get obtenerCancion(){
        console.log(`${this.cancion}`);
    }
};

reproductor.nuevaCancion = 'Enter Sandman';
reproductor.obtenerCancion;

reproductor.crearPlayList('Rock 90');
reproductor.reproducirPlayList('Rock 90');
