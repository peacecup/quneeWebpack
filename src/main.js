import "expose-loader?$!jquery";
import "./js/qunee-min.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./css/style.css";

import { initGraph } from "./js/graph.js";
import { initToolbox } from "./js/tools.js";
import { initCompontents } from "./js/components.js";
import { registerIcon} from "./js/SVGIcon.js";
import {appendInteractionMenu} from "./js/propMenu.js";

$(function() {
	registerIcon();
	initGraph();
	initToolbox();
	initCompontents();
	appendInteractionMenu(graph);

})