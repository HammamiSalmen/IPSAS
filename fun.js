function animateNumber(elementId, targetNumber, duration) {
    const startNumber = 0;
    const startTime = performance.now();

    function updateNumber(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const currentNumber = Math.floor(startNumber + (targetNumber - startNumber) * progress);

        document.getElementById(elementId).textContent = currentNumber;

        if (progress < 1) {
            requestAnimationFrame(updateNumber);
        }
    }

    requestAnimationFrame(updateNumber);
}

animateNumber('animated-number-1', 1000, 2000);
animateNumber('animated-number-2', 500, 1500); 
animateNumber('animated-number-3', 750, 2500);