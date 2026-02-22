export const generateWeatherForecast = (renderer) => {
    const weatherForecastTemplateHTML = `
        <h2> Forecast </h2>
        <table id="weatherForecastTable"></table>
    `

    document.getElementById("weatherForecastContainer").innerHTML = weatherForecastTemplateHTML;
    console.log(renderer.data["days"]);

    const table = document.getElementById("weatherForecastTable")
    table.innerHTML = renderer.data["days"].reduce((acc, dayData) => {
        return acc + `
        <tr>
            <td>${dayData["datetime"]}</td>
            <td>${renderer.getWeatherIcon(dayData["icon"], "small-icon")}</td>
            <td>${renderer.convertTemp(dayData["temp"])}</td>
        </tr>
        `

    }, "")

}