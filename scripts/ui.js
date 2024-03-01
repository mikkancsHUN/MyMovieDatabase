
// Render 5 movie trailer
function renderRandomTrailers(movies) {
    const slidesContainer = document.querySelector('[data-slides]');
    
    // Let's mix the movies
    const shuffledMovies = [...movies];
    for (let i = shuffledMovies.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledMovies[i], shuffledMovies[j]] = [shuffledMovies[j], shuffledMovies[i]];
    }

    // We use the first 5 films
    const selectedMovies = shuffledMovies.slice(0, 5);

    // Setting the src attribute of iframe elements
    selectedMovies.forEach((movie, index) => {
        const iframe = slidesContainer.children[index].querySelector('iframe');
        iframe.src = movie.trailer_link;
    });
}

// Render searched movies
function renderSearchedMovies(movies) {
    
    // Movie results ul container
    const resultList = document.querySelector('#resultsList');
    
    // Clear the previous results
    resultList.innerHTML = '';

    // Render each movie item
    movies.forEach(movie => {

        // Movie li item
        const resultCard = document.createElement('article');
        resultCard.classList.add('results__card');
        resultList.appendChild(resultCard);

        // Movie img
        const resultCardImg = document.createElement('img');
        resultCardImg.src = movie.Poster;
        resultCardImg.alt = 'poster of the movie: ' + movie.Title;
        resultCardImg.classList.add('results__card-img');
        resultCard.appendChild(resultCardImg);

        // Movie info container
        const resultCardInfoContainer = document.createElement('div');
        resultCardInfoContainer.classList.add('results__info');
        resultCard.appendChild(resultCardInfoContainer);

        // Movie title
        const resultCardTitle = document.createElement('h3');
        resultCardTitle.textContent = movie.Title;
        resultCardTitle.classList.add('results__card-title');
        resultCardInfoContainer.appendChild(resultCardTitle);

        // Movie favorites button
        const resultCardFavBtn = document.createElement('span');
        resultCardFavBtn.innerHTML = '<svg width="25px" height="25px" viewBox="0 0 16 16" class="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg>';
        resultCardFavBtn.classList.add('results-card-favBtn');
        resultCardInfoContainer.appendChild(resultCardFavBtn);
    });
}

// Render top20 movies
function renderTopMovies(data) {
    console.log('movies rendered');

    // Popular movie container
    const popularCardContainer = document.querySelector('#popularCardContainer');

    // Render each movie item
    data.forEach(movie => {

        // Movie Cards
        const popularCard = document.createElement('article');
        popularCard.classList.add('popular-card');
        popularCardContainer.appendChild(popularCard);

        // Movie Img
        const popularCardImg = document.createElement('img');
        popularCardImg.src = movie.poster;
        popularCardImg.alt = 'poster of the movie: ' + movie.title;
        popularCardImg.classList.add('popular-card-img');
        popularCard.appendChild(popularCardImg);
        
        popularCardImg.addEventListener('click', () => {
            window.location.href = `movie.html?id=${movie.imdbid}`;
        })

        // Movie Title
        const popularCardTitle = document.createElement('h3');
        popularCardTitle.textContent = movie.title;
        popularCardTitle.classList.add('popular-card-title');
        popularCard.appendChild(popularCardTitle); 

        // Favorite Btn
        const popularCardFavBtn = document.createElement('span');
        popularCardFavBtn.innerHTML = '<svg width="25px" height="25px" viewBox="0 0 16 16" class="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg>'
        popularCardFavBtn.classList.add('popular-card-favBtn');
        popularCard.appendChild(popularCardFavBtn);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    fetchDataFromAPI();
});