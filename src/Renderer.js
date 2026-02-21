import { generateSearchBar } from "./containers/searchInputs.js";

export class Renderer {

    constructor () {
        this.search = "singapore";
    }

    async getData() {
        try {
            const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${this.search}?key=W75S577F32VMR69QXMXQDA92K`);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const result = await response.json();
            console.log(result);
        } catch (error) {
            console.error(error.message);
        }
    }

    async loadPage() {
        this.getData();
        generateSearchBar(this);
    }
}