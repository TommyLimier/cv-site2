window.addEventListener('DOMContentLoaded', () => {
    const stickyHeader = document.getElementById('sticky-header');
    const headerOffsetTop = stickyHeader.offsetTop; 

    window.addEventListener('scroll', () => {
        if (window.scrollY >= headerOffsetTop) {
            stickyHeader.classList.add('sticky'); 
        } else {
            stickyHeader.classList.remove('sticky'); 
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.getElementById('burger-menu');
    const navList = document.querySelector('.nav-list');

    burgerMenu.addEventListener('click', () => {
        navList.classList.toggle('visible');
    });
});
