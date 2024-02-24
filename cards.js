
function createRouteCard(route) {
    // Create card container
    var card = document.createElement('div');
    card.classList.add('card');

    // Create card body
    var cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    // Add route name to card
    var routeName = document.createElement('h5');
    routeName.classList.add('card-title');
    routeName.textContent = route.routename;
    cardBody.appendChild(routeName);

    // Add route length to card
    var routeLength = document.createElement('p');
    routeLength.classList.add('card-text');
    routeLength.textContent = 'Length: ' + route.routelength + ' miles';
    cardBody.appendChild(routeLength);

    // Add link to card
    var routeLink = document.createElement('a');
    routeLink.classList.add('btn', 'btn-primary');
    routeLink.href = route.link;
    routeLink.textContent = 'View Route';
    cardBody.appendChild(routeLink);

    // Append card body to card
    card.appendChild(cardBody);

    return card;
}

// Function to display running routes
function displayRunningRoutes(routes) {
    var runRouteSummary = document.querySelector('.js-runroute-summary');

    routes.forEach(function(route) {
        var routeCard = createRouteCard(route);
        runRouteSummary.appendChild(routeCard);
    });
}

displayRunningRoutes(runningroutes);

