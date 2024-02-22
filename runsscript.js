let runshtml = "";


runningroutes.forEach((run)=>{
    runshtml += `<tr>
    <td style="text-align: center;">${run.routename}
    <br>${run.routelength} mi</br>
    </td>
    
    <td>
        <a href="${run.link}" style="text-decoration: none; color: inherit;">
            <div>
                <video width="640" height="360"  id="state-college-video-${run.id}" autoplay loop muted controls>
                    <source src="state-college-video.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
        </a>
    </td>
</tr>`

})

document.querySelector(".js-runroute-summary").innerHTML = runshtml



