// Película - título, año, duración.
// Ordenar por año, duración

const pelicula1 = {
    nombre: 'El Padrino',
    año: 1972,
    duracion: 175
};

const pelicula2 = {
    nombre: 'La Guerra de las Galaxias',
    año: 1977,
    duracion: 121
};

const pelicula3 = {
    nombre: 'Inception',
    año: 2010,
    duracion: 148
};

const pelicula4 = {
    nombre: 'El Señor de los Anillos: La Comunidad del Anillo',
    año: 2001,
    duracion: 178
};

const pelicula5 = {
    nombre: 'Forrest Gump',
    año: 1994,
    duracion: 142
};

const pelicula6 = {
    nombre: 'Matrix',
    año: 1999,
    duracion: 136
};

const pelicula7 = {
    nombre: 'Titanic',
    año: 1997,
    duracion: 195
};

let PELICULAS = [pelicula1, pelicula2, pelicula3, pelicula4, pelicula5, pelicula6, pelicula7];

console.log("*** ORDENADAS POR AÑO ASCENDENTE ***");
PELICULAS.sort((p1, p2) => p1.año - p2.año).forEach(p => {
    console.log(p);
})

console.log("*** ORDENADAS POR DURACIÓN ASCENDENTE ***");
PELICULAS.sort((p1, p2) => p1.duracion - p2.duracion).forEach(p => {
    console.log(p);
})

console.log("*** ORDENADAS POR AÑO Y DURACIÓN ASCENDENTE ***");
// Ordenamos por año, y si los años son iguales, ordenamos por duración
PELICULAS.sort((p1, p2) => {
    // Primero comparamos el año
    if (p1.año !== p2.año) {
        return p1.año - p2.año; // Ordenamos por año, de más antiguo a más reciente
    }
    // Si el año es el mismo, comparamos la duración
    return p1.duracion - p2.duracion; // Ordenamos por duración, de menor a mayor
}).forEach(peli => {
    console.log(`Nombre: ${peli.nombre}, Año: ${peli.año}, Duración: ${peli.duracion} minutos`);
});




