let runshtml = "";

runningroutes.forEach((run, index) => {
    runshtml += `
        <tr>
            <td style="text-align: center;">
                <span class="routename">${run.routename}</span><br><br><br>
                <span class="routelength">${run.routelength} mi</span>
                <br><br><br>
                <button class="more-info-btn" data-index="${index}">More Info</button>
            </td>
            <td>
                <a href="${run.link}" style="text-decoration: none; color: inherit;">
                    <div>
                        <video width="640" height="360"  id="state-college-video-${index}" autoplay loop muted controls>
                            <source src="${run.video}" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </a>
            </td>
        </tr>`;
});

document.querySelector(".js-runroute-summary").innerHTML = runshtml;
document.querySelectorAll('.more-info-btn').forEach(item => {
    item.addEventListener('click', event => {
        const index = event.target.getAttribute('data-index');
        const run = runningroutes[index];
        window.location.href = `more_info_page.html?routename=${encodeURIComponent(run.routename)}&routelength=${encodeURIComponent(run.routelength)}&link=${encodeURIComponent(run.link)}`;
    });
});
