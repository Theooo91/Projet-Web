const carouselContainer = document.querySelector('.carousel');
const carouselImages = carouselContainer.querySelectorAll('img');

// Clone les images dans le carrousel
carouselImages.forEach(image => {
  const clone = image.cloneNode(true);
  carouselContainer.appendChild(clone);
});

let scrollAmount = 0;
const scrollStep = 3;
const scrollDelay = 20;

function startCarousel() {
  carouselContainer.scrollTo(0, 0); // Réinitialise la position du carrousel au début
  const interval = setInterval(() => {
    carouselContainer.scrollLeft += scrollStep;
    scrollAmount += scrollStep;
    
    if (scrollAmount >= carouselImages[0].offsetWidth) {
      clearInterval(interval);
      startCarousel();
    }
  }, scrollDelay);
}

// Démarre le carrousel
startCarousel();
