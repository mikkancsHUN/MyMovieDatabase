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
async function searchMovies() {
    // HTML elements
    const searchInput = document.querySelector('#searchInput');
    const movieName = searchInput.value.trim();
    const resultsSection = document.querySelector('#dNone');

    if (!movieName) {
        console.error('Please enter a valid search term.');
        return;
    }

    try {
        const apiKey = '939c4306';
        const response = await fetch(`https://www.omdbapi.com/?s=${movieName}&apikey=${apiKey}`);
        const data = await response.json();

        if (data.Response === 'True') {
            // movies on the console
            renderSearchResults(data.Search);
            resultsSection.classList.remove('d-none');
            
        } else {
            // error messages
            console.error('Error during search:', data.Error || 'An unknown error has occurred.');
        }
    } catch (error) {
        // error messages
        console.error('Error during search:', error.message || error);
    }
}


// Display search results on the console
function renderSearchResults(movies) {
    renderSearchedMovies(movies);
    movies.forEach(movie => {
        console.log('Title:', movie.Title);
        console.log('Poster:', movie.Poster);
    });
}