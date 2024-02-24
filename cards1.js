document.addEventListener("DOMContentLoaded", function() {
    const runRouteCardsContainer = document.querySelector('.js-runroute-cards');

    runningroutes.forEach(function(route) {
        // Create elements for the card
        const cardWrapper = document.createElement('div');
        cardWrapper.classList.add('card-wrapper');

        const card = document.createElement('div');
        card.classList.add('card');

        const cardVideo = document.createElement('video');
        cardVideo.classList.add('card-img-top');
        cardVideo.src = route.video;
        cardVideo.autoplay = true;
        cardVideo.loop = true;
        cardVideo.muted = true;

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const cardTitle = document.createElement('h5');
        cardTitle.classList.add('card-title');
        cardTitle.textContent = route.routename;

        const cardText = document.createElement('p');
        cardText.classList.add('card-text');
        cardText.textContent = `Route Length: ${route.routelength} miles`;

        const viewRouteButton = document.createElement('a');
        viewRouteButton.href = route.link;
        viewRouteButton.classList.add('btn', 'btn-primary');
        viewRouteButton.textContent = 'View Route';

        const viewDetailsButton = document.createElement('a');
        viewDetailsButton.href = `run_details.html?routename=${encodeURIComponent(route.routename)}`;
        viewDetailsButton.classList.add('btn', 'btn-secondary');
        viewDetailsButton.textContent = 'View Details';

        // Append elements to the card
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(viewRouteButton);
        cardBody.appendChild(viewDetailsButton);

        card.appendChild(cardVideo);
        card.appendChild(cardBody);

        cardWrapper.appendChild(card);

        // Append the card wrapper to the container
        runRouteCardsContainer.appendChild(cardWrapper);
    });
});
