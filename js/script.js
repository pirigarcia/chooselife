let currentSlide = 1;
const totalSlides = 7;

function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => slide.classList.remove('active'));
    document.getElementById('slide' + n).classList.add('active');
}

function nextSlide() {
    currentSlide = currentSlide >= totalSlides ? 1 : currentSlide + 1;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = currentSlide <= 1 ? totalSlides : currentSlide - 1;
    showSlide(currentSlide);
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        nextSlide();
    } else if (event.key === 'ArrowLeft') {
        prevSlide();
    }
});
// Add this at the end of your existing JavaScript
document.getElementById('year').textContent = new Date().getFullYear();
// Add this to your existing script.js
const fullscreenBtn = document.getElementById('fullscreenBtn');

// Add double-click event listener to document
// Add touch events for mobile
let lastTap = 0;
document.addEventListener('touchend', function(event) {
    const currentTime = new Date().getTime();
    const tapLength = currentTime - lastTap;
    
    if (tapLength < 500 && tapLength > 0) {
        toggleFullScreen();
        event.preventDefault();
    }
    lastTap = currentTime;
});

// Keep existing double-click for desktop
document.addEventListener('dblclick', toggleFullScreen);

function toggleFullScreen() {
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
        header.classList.add('fullscreen-fade');
        footer.classList.add('fullscreen-fade');
    } else {
        document.exitFullscreen();
        header.classList.remove('fullscreen-fade');
        footer.classList.remove('fullscreen-fade');
    }
}

document.addEventListener('fullscreenchange', () => {
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    
    if (!document.fullscreenElement) {
        header.classList.remove('fullscreen-fade');
        footer.classList.remove('fullscreen-fade');
    }
});

// Year update
document.getElementById('year').textContent = new Date().getFullYear();
fullscreenBtn.textContent = '⛶';
;