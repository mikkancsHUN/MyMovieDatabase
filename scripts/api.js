// Top20 Movies Api
async function fetchDataFromAPI() {
    try {
        const response = await fetch('https://santosnr6.github.io/Data/movies.json');
        const data = await response.json();

        renderTopMovies(data);
        renderRandomTrailers(data)
    } catch (error) {
        console.error('Error retrieving data:', error);
    }
}

// OMDb Api
async function searchMovies(searchTerm) {
    try {
        const apiKey = '939c4306';
        const response = await fetch(`http://www.omdbapi.com/?s=${searchTerm}&apikey=${apiKey}`);
        const data = await response.json();

        if (data.Response === 'True') {
            renderSearchResults(data.Search);
        } else {
            console.error('There are no errors in the API response.');
        }
    } catch (error) {
        console.error('Error retrieving data:', error);
    }
}