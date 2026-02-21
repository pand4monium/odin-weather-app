import { Renderer } from "./Renderer.js";

import "./styles/styles.css";
import "./styles/searchInputsStyles.css";


const renderer = new Renderer();
renderer.getData("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/singapre?key=W75S577F32VMR69QXMXQDA92K");

renderer.loadPage();
