document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.nav-toggle'); // Updated class selector
    const navMenu = document.querySelector('.nav-list'); // Updated class selector

    menuToggle.addEventListener('click', function () {
        navMenu.classList.toggle('active'); // Toggle 'active' class
    });
});
