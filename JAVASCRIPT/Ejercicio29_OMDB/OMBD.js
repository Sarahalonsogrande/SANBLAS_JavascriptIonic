//Ejercicio29_OMBDAPI

const API_KEY = '2747e7e0'; // Cambié APY_KEY por API_KEY
const COMMON_URL = `https://www.omdbapi.com/?apikey=${API_KEY}&`;

function processData(pelicula) {
    console.log(pelicula.Title);
    console.log(pelicula.Director);
    // Utilizamos SPLIT para separar actores con la coma como separador, después MAP para cada elemento y con TRIM quitamos los espacios a los lados.
    const ACTORES = pelicula.Actors.split(",").map((actor) => actor.trim());
    ACTORES.forEach(actor => {
        console.log(`Actor:*${actor}*`)
    });
}

function processDataEx02(searchObject) {
    const PELICULAS = searchObject.Search;
    PELICULAS.filter(pelicula => parseInt(pelicula.Year) >= 2000).forEach(pelicula => {
        console.log(`Título:${pelicula.Title}`);
        console.log(`Año:${pelicula.Year}`);
    });
}

function doRequest(url, processData) {
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
        .catch((error) => console.error("Fetch error:", error));
}

// Ejercicio 1
const URL_REQUEST = COMMON_URL + 't=Batman';
doRequest(URL_REQUEST, processData);  // Usamos URL_REQUEST aquí

// Ejercicio 2
doRequest(COMMON_URL + 's=Star Wars', processDataEx02);  // Llamamos a processDataEx02 para mostrar las películas de 2000 en adelante
