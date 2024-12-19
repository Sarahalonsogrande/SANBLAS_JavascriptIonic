function sumar(s1, s2=4){ // Los que tienen valor por defecto al final.
    const RESULTADO = s1 + s2;
    return RESULTADO;
} 

let r = sumar(8);
console.log(r); // 12

// Parámetros REST
function multiplicar(...numeros) { // Rest parámetros numeros es un array.
    let valor = numeros.reduce((total, numero) => total * numero, 1);
    return valor;
}

let m = multiplicar(3, 4, 8, 10);
console.log(m);

// SINTAXIS SPREED

function sumar3(s1, s2, s3) { // Los que tienen valor por defecto al final.
    return s1 + s2 + s3;
} 