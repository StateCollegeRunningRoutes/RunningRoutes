document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(function(card) {
        const video = card.querySelector('.card-img-top');

        card.addEventListener('mouseenter', function() {
            video.play();
        });

        card.addEventListener('mouseleave', function() {
            video.pause();
            video.currentTime = 0; // Resets the video to the beginning
        });
    });
});
