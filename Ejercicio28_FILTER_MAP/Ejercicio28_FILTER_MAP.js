// FILTER y MAP

const playa_1 = {
    nombre : 'Famara',
    pais : 'España',
    dificultad : 'Principiante'
}

const playa_2 = {
    nombre : 'Nazaré',
    pais : 'Portugal',
    dificultad : 'Experto'
}

const playa_3 = {
    nombre : 'Pipeline',
    pais : 'Estados Unidos',
    dificultad : 'Experto'
}

const playa_4 = {
    nombre : 'Somo',
    pais : 'España',
    dificultad : 'Intermedio'
}

// Métodos para agregar objetos a un array:
// PUSH agrega al final, con UNSHIFT lo agrega al principio.
let playas = new Array();

playas.push(playa_1);//Agrega al final
playas.push(playa_2);
playas.push(playa_3);
// console.log(playas);//Famara, Nazare, Pipeline
playas.unshift(playa_4);//Agrega al principio
// console.log(playas);//Somo, Famara, Nazare, Pipeline

//1. Filter de las playas de dificultad Experto

playas.filter((playa) => playa.dificultad.includes("Experto")).
forEach(playa => console.log('PLAYAS CON DIFICULTAD EXPERTO: ' + playa.nombre));

//2. Filter de las playas de España

playas.filter(playa => playa.dificultad === 'Experto').forEach(playa => console.log('PLAYAS DE ESPAÑA: ' + playa.nombre));

//3. Obtención del código HTML que representa una playa
//<div class='playa'><div>Playa:Famara</div><div>País:España</div></div>

const DIVSHTML = playas.map(playa => {
    return `<div class='playa'><div>Playa: "${playa.nombre}" </div>><div>País: "${playa.pais}" </div></div>`;
});

console.log(DIVSHTML);

// Otra manera de hacerlo.

playas
    .filter(playa => playa.dificultad === 'Experto')
    .map(playa => `<div class='playa'><div>Playa: "${playa.nombre}" </div>><div>País: "${playa.pais}" </div></div>`)
    .forEach(lineaHTML => console.log(lineaHTML));