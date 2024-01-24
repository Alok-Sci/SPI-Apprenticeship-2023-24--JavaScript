const track = document.querySelector('.carousel-track');
const carouselItems = document.querySelectorAll('.carousel-item');
let totalItems = carouselItems.length;
let currentIndex = 0;

function nextSlide() {
    if (currentIndex < totalItems - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updatePosition();
}
function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalItems - 1;
    }
    updatePosition();
}
function updatePosition() {
    track.style.transform = `translateX(${-currentIndex * 100}%)`;
}