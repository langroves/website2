// JavaScript code to toggle between background images
const backgroundImages = document.querySelectorAll('.background-image');
let currentIndex = 0;

function transitionBackground() {
    const nextIndex = (currentIndex + 1) % backgroundImages.length;
    backgroundImages[currentIndex].style.transform = 'translateX(-100%)';
    backgroundImages[nextIndex].style.transform = 'translateX(0%)';
    currentIndex = nextIndex;
}

// Transition the background every 5 seconds
setInterval(transitionBackground, 5000);