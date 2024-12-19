const url = 'https://filmaffinity-unofficial.p.rapidapi.com/movie/detail/?lang=en&id=750283';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'Sign Up for Key',
		'x-rapidapi-host': 'filmaffinity-unofficial.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}