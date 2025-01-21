// Ejercicio30_SORT

// const DIAS =  ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
// const NUMEROS = [8, 10, -3, 2, 100, 4];

// DIAS.sort();
// console.log(DIAS);

// NUMEROS.sort((a, b) => {
//     if (a<b) return -1;
//     if (a>b) return 1;
//     return 0;
// });
// console.log(NUMEROS);

const coche1 = {
    nombre : 'Seat 600',
    capacidad : 4,
    velocidad : 98
}

const coche2 = {
    nombre : 'Ferrari F40',
    capacidad : 2,
    velocidad : 280
}

const coche3 = {
    nombre : 'Skoda Fabia',
    capacidad : 5,
    velocidad : 145
}

let COCHES = [coche1, coche2, coche3];

// VERSIÓN EXTENDIDA:
// COCHES.sort((c1, c2) => {
//     return c1.velocidad - c2.velocidad; // Nos da ascendente
// }) // Nos lo da al revés. .reverse();

// COCHES.forEach (c => {
//     console.log(c.nombre);
// })

COCHES.sort((c1, c2) => c1.velocidad - c2.velocidad)
    .reverse().forEach(coche => {
        console.log(coche);
    }
);