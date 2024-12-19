const puppeteer = require('puppeteer');
const axios = require('axios');

// URL de IMDb de Rulo Pardo
const url = 'https://www.imdb.com/search/title/?explore=year&role=nm1407539&sort=release_date,desc';

// Función para extraer los enlaces de las películas
async function getMovieLinks() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'domcontentloaded' });

    // Extraer todos los enlaces a las películas
    const movieLinks = await page.evaluate(() => {
        const links = [];
        const items = document.querySelectorAll('.lister-item-header a');
        items.forEach(item => links.push(item.href));
        return links;
    });

    await browser.close();
    return movieLinks;
}

// Función para obtener detalles de cada película
async function getMovieDetails(movieUrl) {
    try {
        const { data } = await axios.get(movieUrl);
        const html = data;

        const title = html.match(/<title>(.*?)<\/title>/)[1].split(" - IMDb")[0]; // Extracting Title
        const year = html.match(/year">(\d{4})<\/span>/) ? html.match(/year">(\d{4})<\/span>/)[1] : "N/A";
        const genre = html.match(/Genres:.*?href="\/search\/title\?genres=[^"]+/g) ? html.match(/Genres:.*?href="\/search\/title\?genres=[^"]+/g).map(genre => genre.split('>')[1].split('<')[0]).join(", ") : "N/A";
        const director = html.match(/Director.*?<a.*?>(.*?)<\/a>/) ? html.match(/Director.*?<a.*?>(.*?)<\/a>/)[1] : "N/A";
        const writer = html.match(/Writers?<\/span>:.*?<a.*?>(.*?)<\/a>/) ? html.match(/Writers?<\/span>:.*?<a.*?>(.*?)<\/a>/)[1] : "N/A";
        const actors = html.match(/Stars?<\/span>:.*?<a.*?>(.*?)<\/a>/) ? html.match(/Stars?<\/span>:.*?<a.*?>(.*?)<\/a>/).map(actor => actor.split('>')[1].split('<')[0]).join(", ") : "N/A";
        const plot = html.match(/"plotSummary" content="(.*?)"/) ? html.match(/"plotSummary" content="(.*?)"/)[1] : "N/A";
        const language = html.match(/Language<\/span>:.*?<a.*?>(.*?)<\/a>/) ? html.match(/Language<\/span>:.*?<a.*?>(.*?)<\/a>/)[1] : "N/A";
        const country = html.match(/Country<\/span>:.*?<a.*?>(.*?)<\/a>/) ? html.match(/Country<\/span>:.*?<a.*?>(.*?)<\/a>/)[1] : "N/A";
        const poster = html.match(/<img class="ipc-image" src="(.*?)" alt="Poster"/) ? html.match(/<img class="ipc-image" src="(.*?)" alt="Poster"/)[1] : "N/A";
        const imdbRating = html.match(/"ratingValue":"(.*?)"/) ? html.match(/"ratingValue":"(.*?)"/)[1] : "N/A";
        const imdbVotes = html.match(/"ratingCount":"(\d+)" /) ? html.match(/"ratingCount":"(\d+)" /)[1] : "N/A";
        const imdbID = movieUrl.match(/\/title\/(tt\d+)\//) ? movieUrl.match(/\/title\/(tt\d+)\//)[1] : "N/A";

        // Construir la estructura de datos
        return {
            Title: title,
            Year: year,
            Rated: "N/A",
            Released: "N/A",
            Runtime: "N/A",
            Genre: genre,
            Director: director,
            Writer: writer,
            Actors: actors,
            Plot: plot,
            Language: language,
            Country: country,
            Awards: "N/A",
            Poster: poster,
            Ratings: [{
                Source: "Internet Movie Database",
                Value: imdbRating
            }],
            Metascore: "N/A",
            imdbRating: imdbRating,
            imdbVotes: imdbVotes,
            imdbID: imdbID,
            Type: "movie",
            DVD: "N/A",
            BoxOffice: "N/A",
            Production: "N/A",
            Website: "N/A",
            Response: "True"
        };
    } catch (error) {
        console.error(`Error al obtener detalles de la película: ${error}`);
        return null;
    }
}

// Función principal para obtener todos los datos
async function main() {
    const movieLinks = await getMovieLinks();
    const movies = [];

    for (let i = 0; i < movieLinks.length; i++) {
        const movieDetails = await getMovieDetails(movieLinks[i]);
        if (movieDetails) {
            movies.push(movieDetails);
        }
    }

    console.log(JSON.stringify(movies, null, 2));
}

main();
