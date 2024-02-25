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

        const viewPreviewButton = document.createElement('a');
        viewPreviewButton.classList.add('btn', 'btn-viewprev');
        viewPreviewButton.textContent = 'View Preview';

        // Append elements to the card
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(viewRouteButton);
        cardBody.appendChild(viewDetailsButton);
        cardBody.appendChild(viewPreviewButton);

        card.appendChild(cardVideo);
        card.appendChild(cardBody);

        cardWrapper.appendChild(card);

        // Append the card wrapper to the container
        runRouteCardsContainer.appendChild(cardWrapper);

        // Add event listeners for mouseenter and mouseleave
        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);

        // Event listener for "View Preview" buttons
        viewPreviewButton.addEventListener('click', function() {
            // Toggle a class on the card wrapper to activate the styles
            cardWrapper.classList.toggle('active');
            card.classList.toggle('active');
        });
    });
});

// Function to handle mouseenter with delay
function handleMouseEnter(event) {
    const card = event.currentTarget;
    card.dataset.hoverTimeout = setTimeout(function() {
        card.classList.add('hover-effect');
        
    }, 2000); // 2 seconds delay
}

// Function to handle mouseleave and clear timeout
function handleMouseLeave(event) {
    const card = event.currentTarget;
    clearTimeout(card.dataset.hoverTimeout);
    card.classList.remove('hover-effect');
}

    



