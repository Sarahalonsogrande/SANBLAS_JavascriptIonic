
// IF
let edad = 50;
if (edad < 18) {
    // Código
}
else if (edad < 50) {
    // Código
}
else {
    // Código si no se cumple ninguna condición
}

// FOR
for (let i=0; i<10; i++) {
    // let i=0
}

// WHILE
const LIMITE = 100;
let actual = 0;
while (actual < LIMITE) {
    // Mientras se cumpla la condición se ejecuta el bloque de código
    actual +=10;
    console.log(actual);
    // 10, 20, 30, 40....100
} 

// DO WHILE
actual = 0;
do {
    // Mientras se cumpla la condición se ejecuta el bloque de código
    actual +=10;
    console.log(actual);
    // 10, 20, 30, 40....100
} while (actual < LIMITE);

// SWITCH
let opcion = 4;
switch (opcion) {
    case 0:
        console.log(0);
        break; // Necesario para que no recorra las otras opciones.
    case 1:
        console.log(1);
        break;
    case 2:
        console.log(2);
        break; // Necesario para que no ejecute el default.
    // Opcional
    default:
        console.log('No lo sé');
}

// BREAK
for (let persona of personas) {
    
}

// CONTINUE
