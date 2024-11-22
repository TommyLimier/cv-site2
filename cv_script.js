    window.addEventListener('DOMContentLoaded', () => {
        const stickyHeader = document.getElementById('sticky-header');
        const headerOffsetTop = stickyHeader.offsetTop; // Position initiale

        window.addEventListener('scroll', () => {
            if (window.scrollY >= headerOffsetTop) {
                stickyHeader.classList.add('sticky'); // Ajoute la classe sticky
            } else {
                stickyHeader.classList.remove('sticky'); // Supprime la classe sticky
            }
        });
    });

