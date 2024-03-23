import * as functions from "./modules/functions.js";
import showMap from "./components/map.js";
import handleModal from "./components/modal.js";
import handleMenu from "./components/menu.js";

functions.isWebp();
handleMenu();
handleModal();
showMap();