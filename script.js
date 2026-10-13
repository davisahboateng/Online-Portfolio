// 1. Grab the elements using the IDs we added to the HTML
const hamburgerBtn = document.getElementById('hamburger-btn');
const navLinks = document.getElementById('nav-links');

// 2. Listen for a click on the hamburger button
hamburgerBtn.addEventListener('click', () => {
    // This switches the 'open' class on and off every time you click
    navLinks.classList.toggle('open');
});
