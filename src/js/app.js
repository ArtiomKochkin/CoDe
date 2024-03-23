import * as functions from "./modules/functions.js";
import showMap from "./components/map.js";
import handleModal from "./components/modal.js";
import handleMenu from "./components/menu.js";
import initSlider from "./components/introSlider.js";

functions.isWebp();
initSlider();
handleMenu();
handleModal();
showMap();