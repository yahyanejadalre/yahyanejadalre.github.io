document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-list');
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    const body = document.body;

    menuToggle.addEventListener('click', function () {
        navMenu.classList.toggle('active');
    });

    darkModeToggle.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
        const icon = darkModeToggle.querySelector('i');
        if (body.classList.contains('dark-mode')) {
            icon.classList.replace('fa-moon', 'fa-sun');
        } else {
            icon.classList.replace('fa-sun', 'fa-moon');
        }
    });
});
