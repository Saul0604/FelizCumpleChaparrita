window.addEventListener('load', function() {
    window.addEventListener('scroll', function() {
        const header = document.getElementById('header');
        if (window.scrollY > 5) {
            header.classList.add('black-bg');
        } else {
            header.classList.remove('black-bg');
        }
    });
});