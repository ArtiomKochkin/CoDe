export default function handleMenu() {
    const burgerMenu = document.getElementById("burger-menu");
    const closeMenu = document.getElementById("close-menu");
    const menu = document.getElementById("header-nav");
    const body = document.body;

    burgerMenu.addEventListener("click", () => {
        menu.classList.add("show");
        closeMenu.classList.add("show");
        body.classList.add("no-scroll");
    });

    closeMenu.addEventListener("click", () => {
        menu.classList.remove("show");
        closeMenu.classList.remove("show");
        body.classList.remove("no-scroll");
    });
}