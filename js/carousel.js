document.addEventListener('DOMContentLoaded', function() {
    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach(carousel => {
        const slides = carousel.querySelectorAll('.carousel-slide');
        let counter = 0;

        setInterval(() => {
            carousel.style.transition = 'transform 0.5s ease';
            carousel.style.transform = 'translateX(' + (-counter * 100) + '%)';
            counter++;

            if (counter === slides.length) {
                counter = 0;
            }
        }, 5000); // Change slide every 5 seconds
    });
});
