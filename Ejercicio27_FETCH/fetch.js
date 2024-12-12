// FETCH en Javascript.

// Realizamos una solicitud GET a la API de JSONPlaceholder
const URL = 'https://fpaniaguaangular.github.io/gamecovers/assets/gamecovers/gamecovers.json';

// function processData(data) { // Data es un ARRAY (En este caso)

//     const CONSOLASNAME =
//         data.filter(consola => {
//             return consola.orientation === 'portrait';
//         });

//     CONSOLASNAME.forEach(consola => {
//         console.log(consola.name);
//     });
// }

function processData(data) { // Data es un ARRAY (En este caso)

    const CONSOLASNAME =
        data.filter(consola => {
            return consola.name.includes('Nintendo');
        });

    CONSOLASNAME.forEach(consola => {
        console.log(consola.name);
    });
}

function doRequest(url) {
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
            processData(data);
        })
        .catch((error) => console.error("Fetch error:", error)); // In case of an error, it
}

doRequest(URL);

// Realizamos una solicitud GET a la API de JSONPlaceholder
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => {
//         // Verificamos si la respuesta es exitosa (status 200-299)
//         if (!response.ok) {
//             throw new Error('Error en la solicitud');
//         }
//         // Parseamos la respuesta JSON
//         return response.json();
//     })
//     .then(data => {
//         // Usamos los datos obtenidos
//         console.log('Datos recibidos:', data);
//     })
//     .catch(error => {
//         // Capturamos y mostramos errores
//         console.error('Hubo un problema con la solicitud:', error);
//     });