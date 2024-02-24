    let runshtml = "";
    document.addEventListener("DOMContentLoaded", () => {
        const runRouteSummary = document.querySelector(".js-runroute-summary");
    
        runningroutes.forEach((run, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td style="text-align: center;">
                    ${run.routename}<br>${run.routelength} mi
                </td>
                <td>
                    <button class="more-info-btn" data-index="${index}">More Info</button>
                </td>
            `;
            runRouteSummary.appendChild(row);
        });
    
        // Event listener for "more info" buttons
        document.querySelectorAll('.more-info-btn').forEach(button => {
            button.addEventListener('click', () => {
                const index = parseInt(button.dataset.index);
                const url = `more-info.html?index=${index}`;
                window.location.href = url;
            });
        });
    });
    
    


