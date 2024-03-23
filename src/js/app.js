import * as functions from "./modules/functions.js";
import showMap from "./components/map.js";
import handleModal from "./components/modal.js";
import handleMenu from "./components/menu.js";
import initSlider from "./components/introSlider.js";
import initGallery from "./components/gallery.js";

functions.isWebp();
initSlider();
initGallery();
handleMenu();
handleModal();
showMap();