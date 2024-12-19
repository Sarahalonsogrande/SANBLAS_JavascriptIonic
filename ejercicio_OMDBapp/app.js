const API_KEY = '2747e7e0'; // Cambié APY_KEY por API_KEY
const COMMON_URL = `https://www.omdbapi.com/?apikey=${API_KEY}&`;

let peliculas;
let peliculasFiltradas;

// "Title": "Batman",
// "Year": "1989",
// "imdbID": "tt0096895",
// "Type": "movie",
// "Poster": 

function generateCard(pelicula){
    //0. Cambiamos el contador
    document.querySelector("#contador").textContent=peliculasFiltradas.length;

    //1. Crear la tarjeta
    const nuevaCard = document.createElement("div");//Crea un elemento de tipo div
    nuevaCard.setAttribute("class","card");
    
    //2. Crear la imagen
    const nuevaImg = document.createElement("img");
    nuevaImg.setAttribute("src", pelicula.Poster);
    nuevaImg.setAttribute("alt", `Póster de la película ${pelicula.Title}`);
    nuevaCard.appendChild(nuevaImg);
    
    //3. Crear el contenido de la tarjeta
    const nuevoContenido = document.createElement("div");
    nuevoContenido.setAttribute("class","card-content");
    nuevaCard.appendChild(nuevoContenido);
    
    //4. Crear el h3 del título <h3>El Padrino</h3>
    const nuevoTitulo = document.createElement("h3");
    nuevoTitulo.textContent = pelicula.Title;
    nuevoContenido.appendChild(nuevoTitulo);
    
    //6. Año
    //<p><strong>Año:</strong> 1972</p>
    const nuevoParrafoAnyo = document.createElement("p");
    const nuevaNegritaAnyo = document.createElement("strong");
    nuevoParrafoAnyo.appendChild(nuevaNegritaAnyo);
    nuevaNegritaAnyo.textContent = "Año: ";
    nuevoContenido.appendChild(nuevoParrafoAnyo);
    const textoAnyo = document.createTextNode(pelicula.Year)
    nuevoParrafoAnyo.appendChild(textoAnyo);
    
    //7. Género
    //<p><span class="genre">Género:</span> Drama, Crimen</p>
    const nuevoParrafoGenero = document.createElement("p");
    const nuevoSpanGenero = document.createElement("span");
    nuevoSpanGenero.setAttribute("class","genre");
    nuevoSpanGenero.textContent = "Género: ";
    nuevoParrafoGenero.appendChild(nuevoSpanGenero);
    nuevoParrafoGenero.appendChild(document.createTextNode(pelicula.Type));
    nuevoContenido.appendChild(nuevoParrafoGenero);

    //Último paso: Agregar al contenedor la ficha recién creada
    document.querySelector("#container").appendChild(nuevaCard);//Agregamos el div al contenedor
}

function generarDesplegableGenero(peliculas){
    //Extraemos los géneros del fichero json 
    let setGeneros = new Set();
    peliculas.forEach(pelicula=>{
        let generos = pelicula.Type.split(',').map(genero=>genero.trim());
        generos.forEach(genero=>setGeneros.add(genero));
    });
    //<option value="drama">Drama</option>
    let arrayGeneros = Array.from(setGeneros);
    arrayGeneros.sort().forEach(genero=>{
        let generoOption = document.createElement("option");
        generoOption.setAttribute("value",genero.toLowerCase());
        generoOption.textContent=genero;
        document.querySelector("#s-genero").appendChild(generoOption);
    });
}

function processMovie(data) {
    peliculas = data.search;
    //peliculasFiltradas = peliculas;//Ambos arrays son el mismo
    peliculasFiltradas = Array.from(peliculas);//Crea un nuevo array
    generarDesplegableGenero(peliculas);

    //FORMAS DE RECORRER ARRAYS Y OBJETOS
    /*
    //Recorremos con bucle for tradicional
    for (let i=0;i<peliculas.length;i++){
        console.log("Duration:" + peliculas[i].Runtime);
    }
    //Recorremos con bucle for-of
    for (pelicula of peliculas) {
        console.log("Director:" + pelicula.Director);
    }
    //Recorremos con el método forEach
    peliculas.forEach(pelicula => {
        console.log("Título:" + pelicula.Title);
    });
    //Recorre el contenido de un objeto
    for (atributo in peliculas[0]){
        console.log(atributo, peliculas[0][atributo]);
    }
    */
    peliculas.forEach(pelicula => {
        generateCard(pelicula);
    });
}

function clearCards(){
    //document.querySelector("#container").innerHTML="";//Chapuza
    document.querySelectorAll(".card").forEach(card=>card.remove());//Elegante
}

doGetRequest(COMMON_URL, processMovie);