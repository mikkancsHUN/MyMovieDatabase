// Api
async function fetchDataFromAPI() {
    try {
        const response = await fetch('https://santosnr6.github.io/Data/movies.json');
        const data = await response.json();

        renderTopMovies(data);
    } catch (error) {
        console.error('Error retrieving data:', error);
    }
}