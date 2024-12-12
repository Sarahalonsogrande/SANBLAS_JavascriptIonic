// OBJETOS en Javascript.

let nombre = 'Fran';

let alumno = ['Fran', 39, 'Córdoba', true];

let jesus = {
    nombre : 'Jesús',
    edad : 42,
    cuidad : 'Madrid',
    programador : true
}

// JSON (Javascript Object Notation): formato de los objetos en JS

// Objeto con: título, número temporadas, sipnosis, año estreno, plataforma
let aDosMetros = {
    titulo : 'A dos metros bajo tierra',
    temporadas : 5,
    sipnosis : 'Narra la vida de los miembros de una peculiar familia de Los Ángeles que posee una empresa funeraria.',
    estreno : 2001,
    plataforma: 'MAX',
    
    reparto : [
        {
            nombre: 'Peter Krause',
            personaje: 'Nathaniel Samuel Fisher'
        },
        {
            nombre: 'Michael C. Hall',
            personaje: 'David James Fisher'
        },
        {
            nombre: 'Rachel Griffiths',
            personaje: 'Brenda Chenowith'
        },
        {
            nombre: 'Frances Conroy',
            personaje: 'Ruth Fisher'
        },
        {
            nombre: 'Lauren Ambrose',
            personaje: 'Claire Fisher'
        }
    ]
}

console.log(jesus.nombre);

console.log(typeof nombre); // String
console.log(typeof alumno); // Object (aunque es un Array)
console.log(typeof jesus); // Object