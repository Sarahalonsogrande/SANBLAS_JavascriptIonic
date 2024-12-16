// Ejercicio30_SORT

const DIAS =  ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
const NUMEROS = [8, 10, -3, 2, 100, 4];

DIAS.sort();
console.log(DIAS);

NUMEROS.sort((a, b) => {
    if (a<b) return -1;
    if (a>b) return 1;
    return 0;
});
console.log(NUMEROS);