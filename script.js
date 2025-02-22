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