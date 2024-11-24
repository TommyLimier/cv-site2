document.addEventListener('DOMContentLoaded', () => {
    const stickyHeader = document.getElementById('sticky-header');
    const burgerMenu = document.getElementById('burger-menu');
    const navList = document.querySelector('.nav-list');
    const backToTop = document.getElementById('backToTop');

    // Sticky Header
    const headerOffsetTop = stickyHeader.offsetTop;
    window.addEventListener('scroll', () => {
        stickyHeader.classList.toggle('sticky', window.scrollY >= headerOffsetTop);
    });

    // Menu burger
    burgerMenu.addEventListener('click', () => {
        navList.classList.toggle('visible');
        navList.classList.toggle('hidden');
    });

    // Retour en haut
    backToTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
