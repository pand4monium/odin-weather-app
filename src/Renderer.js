import { generateAstronomy } from "./containers/astronomy.js";
import { generateCurrentTemp } from "./containers/currentTemp.js";
import { generateSearchBar } from "./containers/searchInputs.js";
import { generateWeatherForecast } from "./containers/weatherForecast.js";

export class Renderer {

    constructor () {
        this.search = "singapore";
        this.data = "";
        this.units = "C"
    }

    async getData() {
        try {
            const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${this.search}?key=W75S577F32VMR69QXMXQDA92K`);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            this.data = await response.json();
            console.log(this.data);
        } catch (error) {
            console.error(error.message);
        }
    }

    async loadPage() {
        await this.getData();
        generateSearchBar(this);
        generateCurrentTemp(this);
        generateWeatherForecast(this);
        generateAstronomy(this);
    }

    getWeatherIcon(icon, id) {
        console.log("Icon name:", icon);
        return `
        <img src="/icons/weather-conditions/${icon}.svg" class="${id}">
        `
    }

    convertTemp(temp) {
        let tempSet = temp;
        if (!temp) {
            tempSet = this.data["currentConditions"]["temp"];
        }


        if (this.units === "F") {
            return tempSet + "°F";
        } else if (this.units === "C") {
            return ((tempSet - 32) * 5/9 ).toFixed(1) + "°C";
        }
    }
}