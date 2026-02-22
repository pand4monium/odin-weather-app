export const generateCurrentTemp = (renderer) => {

    const currentTempHTML = `
    <div id="location-time">
        <div id="time">
            ${new Date(renderer.data.currentConditions.datetimeEpoch * 1000)
                .toLocaleString("en-US", {
                    weekday: "short",
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                    timeZone: renderer.data.timezone
                })
                .replace(",", "")
                .replace(" AM", "AM")
                .replace(" PM", "PM")}
        </div>
        <div id="location">${renderer.data["address"].replace(/^./, (char) => char.toUpperCase())}</div>
    </div>
    <div id="currentTemp">
        ${renderer.getWeatherIcon(renderer.data["currentConditions"]["icon"], "large-icon")}
        <div>${renderer.convertTemp()}</div>
    </div>
    <div id="weather-description">${renderer.data["description"]}</div>
    `

    document.getElementById("currentTempContainer").innerHTML = currentTempHTML;

    const time = document.getElementById("time");
    const location = document.getElementById("location");
    const currentTemp = document.getElementById("currentTemp");
}