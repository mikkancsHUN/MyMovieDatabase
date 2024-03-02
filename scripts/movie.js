// Render movie details
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const imdbID = urlParams.get('id');

    fetchDataForMovie(imdbID);
});

async function fetchDataForMovie(imdbID) {
    try {
        const apiKey = '939c4306';
        const response = await fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=${apiKey}`);
        const data = await response.json();

        displayMovieDetails(data);
    } catch (error) {
        console.error('Error fetching movie data:', error);
    }
}

function displayMovieDetails(movieData) {
    const movieTitle = document.getElementById('moiveTitle');
    const movieRating = document.getElementById('movieRating');
    const movieImg = document.getElementById('movieImg');
    const movieSummary = document.getElementById('movieSummary');
    const movieActors = document.getElementById('movieActors');
    const movieDirector = document.getElementById('movieDirector');
    const movieGenres = document.getElementById('movieGenres');

    movieTitle.textContent = movieData.Title;
    movieRating.textContent = `Imdb Rating: ${movieData.imdbRating}`;
    movieImg.src = movieData.Poster;
    movieImg.alt = 'poster of the movie: ' + movieData.Title;
    movieSummary.textContent = movieData.Plot;
    movieActors.textContent = movieData.Actors;
    movieDirector.textContent = movieData.Director;
    movieGenres.textContent = movieData.Genre;
}
