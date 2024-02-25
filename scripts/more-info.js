document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const index = parseInt(params.get('index'));
    const selectedRun = runningroutes[index];
    const runDetailsContainer = document.getElementById('run-details');

    if (selectedRun) {
        runDetailsContainer.innerHTML = `
            <p><strong>Route Name:</strong> ${selectedRun.routename}</p>
            <p><strong>Route Length:</strong> ${selectedRun.routelength} mi</p>
            <p><strong>Link:</strong> <a href="${selectedRun.link}" target="_blank">${selectedRun.link}</a></p>
        `;
    } else {
        runDetailsContainer.innerHTML = '<p>Run details not found.</p>';
    }
});
