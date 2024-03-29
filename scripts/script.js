'use strict';

window.addEventListener('load', () => {
    console.log('loaded');
    // Förslagsvis anropar ni era funktioner som skall sätta lyssnare, rendera objekt osv. härifrån
    setupCarousel();
    showFavorites();
    updateFavoritesUI();
});

// Search button
const searchBtn = document.querySelector('#searchBtn');
searchBtn.addEventListener('click', function(event) {
    event.preventDefault(); 
    searchMovies();
});


// Denna funktion skapar funktionalitet för karusellen
function setupCarousel() {
    console.log('carousel loaded');
    const buttons = document.querySelectorAll('[data-carousel-btn]');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const offset = btn.dataset.carouselBtn === 'next' ? 1 : -1;
            const slides = btn.closest('[data-carousel]').querySelector('[data-slides]');
            const activeSlide = slides.querySelector('[data-active]');
            let newIndex = [...slides.children].indexOf(activeSlide) + offset;
            
            if(newIndex < 0) {
                newIndex = slides.children.length - 1;
            } else if( newIndex >= slides.children.length) {
                newIndex = 0;
            }

            slides.children[newIndex].dataset.active = true;
            delete activeSlide.dataset.active;
        });
    });
}

// Favorites button function
function showFavorites() {

    const headerFavBtn = document.querySelector('#favBtn');
    
    headerFavBtn.addEventListener('click', () => {
        const favoritesContainer = document.querySelector('#favoritesContainer');
        favoritesContainer.classList.toggle('d-none');
        headerFavBtn.classList.toggle('--clicked');
        console.log('Favoritesbtn clicked');
    })
};