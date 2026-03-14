export const generateAstronomy = (renderer) => {
    const astronomyTemplateHTML = `
        <h2>Astronomy</h2>
        <table id="astronomyTable"></table>
    `

    document.getElementById("astronomyContainer").innerHTML = astronomyTemplateHTML;
    const table = document.getElementById("astronomyTable");

    table.innerHTML = `
    <tbody>
        <tr>
            <td> ${renderer.getMeasurementIcon("sunrise", "small-icon")} </td>
            <td class="astronomyText"> Sunrise </td>
            <td class="astronomyText"> ${new Date(renderer.data["currentConditions"]["sunriseEpoch"] * 1000).toLocaleTimeString([], {hour: "2-digit", minute: "2-digit", hour12: false})} </td>
        </tr>

        <tr>
            <td> ${renderer.getMeasurementIcon("sunset", "small-icon")} </td>
            <td class="astronomyText"> Sunset </td>
            <td class="astronomyText"> ${new Date(renderer.data["currentConditions"]["sunsetEpoch"] * 1000).toLocaleTimeString([], {hour: "2-digit", minute: "2-digit", hour12: false})} </td>
        </tr>
    </tbody>
    `
}

/* new Date(dayData["datetime"]).toLocaleDateString("en-GB", {
                                                        day: "2-digit",
                                                        month: "short",
                                                        year: "numeric"
                                                    }).replace(",", "") */