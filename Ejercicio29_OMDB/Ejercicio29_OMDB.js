// Ejercicio 29

// Con el ? empiezan los parámetros - & es el separador de parámetros
// Podemos indicar una id de una película de IMBD con i
// https://www.omdbapi.com/?apikey=2747e7e0&i=tt0117883
// Podemos indicar un nombre con t
// https://www.omdbapi.com/?apikey=2747e7e0&t=Alien
// Podemos indicar un género con type
// https://www.omdbapi.com/?apikey=2747e7e0&type=series
// Podemos indicar un year
// https://www.omdbapi.com/?apikey=2747e7e0&y=1990
// Podemos indicar Page number to return.
// https://www.omdbapi.com/?apikey=2747e7e0&&t=Alien&page=1
// Y más...........

const APY_KEY = '2747e7e0';
const COMMON_URL = `https://www.omdbapi.com/?apikey=${APY_KEY}&`;

function processData(pelicula) {
    console.log(pelicula.Title);
    console.log(pelicula.Director);

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
        .catch((error) => console.error("Fetch error:", error));
}

// Mostrar en pantalla Title, Director, Actor (por separado - SPLIT)
doRequest(COMMON_URL + 't=Alien', 'Director=Ridley Scott');
// https://www.omdbapi.com/?apikey=2747e7e0&i=tt0117883


// doRequest(COMMON_URL + 's = Star Wars');
// Mostrar en pantalla Title, Year (del 2000 en adelante)