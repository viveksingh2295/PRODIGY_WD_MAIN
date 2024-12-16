document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const links = navbar.querySelectorAll('a.nav-link');
    
    window.addEventListener('scroll', () => {
        const fromTop = window.scrollY;

        links.forEach(link => {
            const section = document.querySelector(link.hash);

            if (
                section.offsetTop <= fromTop &&
                section.offsetTop + section.offsetHeight > fromTop
            ) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    });
});
