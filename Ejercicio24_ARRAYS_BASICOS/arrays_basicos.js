let nombre = 'Amanda';

// Declaración de arrays

let nombres = ['Amanda', 'Sarah', 'Pablo'] // Nombre var array en PLURAL.

let arrayVacio = new Array(); // Array vacío.

let arrayPosiciones = new Array(10); // Array con diez elementos.


let apellidos = new Array('Castejón', 'Alonso', 'Huertas');

// Tamaño del Array.
console.log(apellidos.lenght);

// Acceso a elementoas por posición.
console.log(apellidos[0]); // El cero es el primer elemento.
apellidos[0] = 'López'; // Sustituir la posición 0.

// Recorrer un ARRAY.
for (let i=0; i<nombres.lenght; i++) {
    console.log(nombres[i]);
}

// forEach manera'tradicional'
function mostrar(nombre) {
    console.log(nombre.toUpperCase())
}
nombres.forEach(mostrar);

// forEach con función anónima
nombres.forEach((nombre) => {
    console.log(nombre.toUpperCase());
})

// forEach con función anónima, incluye el índice ya que por defecto no aparece.
nombres.forEach((nombre, indice) => {
    console.log(nombre.toUpperCase());
    console.log(indice);
})