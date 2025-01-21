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

function processData(pelicula) {
    if (pelicula.Response === "True") {
        // Obtener los datos necesarios
        const titulo = pelicula.Title;
        const director = pelicula.Director;
        const actores = pelicula.Actors.split(", "); // Separar los actores por coma

        // Mostrar por consola
        console.log("Título:", titulo);
        console.log("Director:", director);
        console.log("Actores:", actores);

        // Mostrar por pantalla (si estás en un entorno web)
        document.body.innerHTML = `
            <h1>Título: ${titulo}</h1>
            <p><strong>Director:</strong> ${director}</p>
            <p><strong>Actores:</strong> ${actores.join("<br>")}</p>
        `;
    } else {
        console.error("Error en la búsqueda:", pelicula.Error);
    }
}

// Realizar la solicitud
doRequest(COMMON_URL + "t=Batman");


function processDataBusqueda(busqueda) {
    if (busqueda.Response === "True") {
        // Filtrar las películas del año 2000 en adelante
        const peliculasFiltradas = busqueda.Search.filter((pelicula) => {
            return parseInt(pelicula.Year) >= 2000; // Filtrar por año
        });

        // Mostrar los títulos y años de las películas filtradas
        console.log("Películas del año 2000 en adelante:");
        peliculasFiltradas.forEach((pelicula) => {
            console.log(`Título: ${pelicula.Title}, Año: ${pelicula.Year}`);
        });

        // Mostrar por pantalla (si estás en un entorno web)
        document.body.innerHTML = peliculasFiltradas.map(
            (pelicula) => `
            <div>
                <h2>${pelicula.Title}</h2>
                <p><strong>Año:</strong> ${pelicula.Year}</p>
            </div>`
        ).join("");
    } else {
        console.error("Error en la búsqueda:", busqueda.Error);
    }
}

// Realizar la solicitud
doRequest(COMMON_URL + "s=Star Wars");
