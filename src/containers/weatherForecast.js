export const generateWeatherForecast = (renderer) => {
    const weatherForecastTemplateHTML = `
        <h2> Forecast </h2>
        <table id="weatherForecastTable"></table>
    `

    document.getElementById("weatherForecastContainer").innerHTML = weatherForecastTemplateHTML;
    console.log(renderer.data["days"]);

    const table = document.getElementById("weatherForecastTable")
    table.innerHTML = renderer.data["days"].reduce((acc, dayData, index) => {
        return index < 8 ? acc + `
        <tr>
            <td class="forecastDate">${new Date(dayData["datetime"]).toLocaleDateString("en-GB", {
                                                        day: "2-digit",
                                                        month: "short",
                                                        year: "numeric"
                                                    }).replace(",", "")
            }</td>
            <td>${renderer.getWeatherIcon(dayData["icon"], "small-icon")}</td>
            <td class="forecastTemp">${renderer.convertTemp(dayData["temp"])}</td>
        </tr>
        ` : acc;

    }, "")

}