document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navClose = document.getElementById('navClose');
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.navbar ol li a');

    // Toggle menu
    navToggle.addEventListener('click', () => {
        navbar.classList.add('active');
    });

    // Close menu
    navClose.addEventListener('click', () => {
        navbar.classList.remove('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navbar.contains(e.target) && !navToggle.contains(e.target)) {
            navbar.classList.remove('active');
        }
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
        });
    });
});