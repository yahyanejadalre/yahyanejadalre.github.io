document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-list');
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    const body = document.body;
    const navLinks = document.querySelectorAll('.nav-list li a');
    const backToTopButton = document.getElementById('back-to-top');

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

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const offset = 100;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                menuVisible = false;
                navMenu.classList.remove('active');
            }
        });
    });

    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    backToTopButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    window.scrollTo(0, 0);
});
