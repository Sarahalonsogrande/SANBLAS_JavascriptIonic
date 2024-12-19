// Ejercicio 36 EXCEPTIONS

function sumar(s1, s2) {
    if(!(typeof(s1) != 'number')) {
        throw new Error('s1 no es un número');
        
    }
    return s1+s2;
}

try {
    let resultado = sumar('a', 2);
    console.log(resultado);

} catch(fallo) {
    console.error('catch: ', fallo);

}