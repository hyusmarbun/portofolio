document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.addEventListener('click', function(event) {
    const details = document.getElementById('menu-details');
    const summary = details.querySelector('summary');
    const isClickInside = details.contains(event.target);

    if (!isClickInside && details.hasAttribute('open')) {
        details.removeAttribute('open');
    }
    if (event.target.tagName === 'A' && details.hasAttribute('open')) {
        details.removeAttribute('open');
    }
});


document.addEventListener("DOMContentLoaded", function() {
    const image = document.querySelector('.image');

    function checkVisibility() {
        const rect = image.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            image.classList.add('visible');
        } else {
            image.classList.remove('visible');
        }
    }

    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('load', checkVisibility);
});

