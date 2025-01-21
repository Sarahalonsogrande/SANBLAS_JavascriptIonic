
// Condición ? expr1 : expr2
const CALIFICACION_MINIMA = 5;
let calificacionTextual;
let calificacion = 6;

if (calificacion >= CALIFICACION_MINIMA) {
    calificacionTextual = 'Apto';
} else {
    calificacionTextual = 'No apto';
}
console.log(calificacionTextual);

// SOLUCIÓN OPERADOR TERNARIO
calificacionTextual = calificacion >= CALIFICACION_MINIMA ? 'Apto' : 'No apto';
console.log(calificacionTextual);