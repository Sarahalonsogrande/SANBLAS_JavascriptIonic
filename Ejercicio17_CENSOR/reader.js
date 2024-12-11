import fs from 'node:fs'; // Require package.json

/*
1.- Leer fichero.
2.- reemplazar una palabra por otra.
3.- Mostrar el resultado.
*/

function leerFichero(nombreFichero) {
    const data = fs.readFileSync(nombreFichero, 'utf8')
    return data;
}

function censurar(texto, palabraProhibida, palabraSustitucion) {
    const regexp = new RegExp(`\\b${palabraProhibida}\\b`, 'gi');
    const textoCensurado = texto.replaceAll(regexp, palabraSustitucion);
    return textoCensurado;
}

try {
    const data = leerFichero('./post.txt');
    const data_censurado = censurar(data, 'gilipollas', 'xxxxxxxxxx');

    // const data_censored = data.replaceAll('gilipollas', '**********');

    // const data_censurado = data.replaceAll(/\bgilipollas\b/gi, '**********'); // Con expresión regular

    console.log(data_censurado);

} catch (err) {
    console.error(err);
}
