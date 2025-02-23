// Toggle the sliding menu
const menuToggle = document.getElementById('menu-toggle');
const slidingMenu = document.getElementById('sliding-menu');

menuToggle.addEventListener('click', () => {
    slidingMenu.classList.toggle('active');
});

// Close the menu when clicking outside
document.addEventListener('click', (event) => {
    if (!slidingMenu.contains(event.target) && !menuToggle.contains(event.target)) {
        slidingMenu.classList.remove('active');
    }
});


function animateNumber(elementId, targetNumber, duration) {
    const startNumber = 0;
    const startTime = performance.now();

    function updateNumber(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const currentNumber = Math.floor(startNumber + (targetNumber - startNumber) * progress);

        document.getElementById(elementId).textContent = "+"+currentNumber;

        if (progress < 1) {
            requestAnimationFrame(updateNumber);
        }
    }

    requestAnimationFrame(updateNumber);
}

animateNumber('animated-number-1', 1027, 2000);
animateNumber('animated-number-2', 524, 1500); 
animateNumber('animated-number-3', 751, 2500);
animateNumber('animated-number-4', 453, 2500);

