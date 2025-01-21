let ingrediente1 = {
    nombre : 'Patata',
    cantidad : 200
}

let ingrediente2 = {
    nombre : 'Cebolla',
    cantidad : 150
}

let ingrediente3 = {
    nombre : 'Huevo',
    cantidad : 100
}

let ingredientes = [ingrediente1, ingrediente2, ingrediente3]

let total = ingredientes.reduce((cantidades, ingredienteActual) => 
    cantidades + ingredienteActual.cantidad, 0);
console.log(total);