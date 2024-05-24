import "@fancyapps/ui/dist/fancybox/fancybox.css";
import "./src/styles/style.css";
import "./src/styles/scss/main.scss";

import $ from "jquery";
import {Fancybox} from "@fancyapps/ui";

$(document).ready(function () {
   $("#app").html("Hello World");
});

Fancybox.bind("[data-fancybox]", {
   // Your custom options
});
