document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-list');
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    const body = document.body;

    let menuVisible = false;

    function toggleMenu() {
        menuVisible = !menuVisible;
        if (menuVisible) {
            navMenu.classList.add('active');
        } else {
            navMenu.classList.remove('active');
        }
    }

    menuToggle.addEventListener('click', toggleMenu);

    darkModeToggle.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
        const icon = darkModeToggle.querySelector('i');
        if (body.classList.contains('dark-mode')) {
            icon.classList.replace('fa-moon', 'fa-sun');
        } else {
            icon.classList.replace('fa-sun', 'fa-moon');
        }
    });

    // Keep the menu open while hovering over the menu or toggle
    navMenu.addEventListener('mouseenter', function () {
        menuVisible = true;
        navMenu.classList.add('active');
    });

    navMenu.addEventListener('mouseleave', function () {
        menuVisible = false;
        navMenu.classList.remove('active');
    });

    menuToggle.addEventListener('mouseenter', function () {
        menuVisible = true;
        navMenu.classList.add('active');
    });

    menuToggle.addEventListener('mouseleave', function () {
        if (!navMenu.matches(':hover')) {
            menuVisible = false;
            navMenu.classList.remove('active');
        }
    });
});
