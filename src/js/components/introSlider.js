export default function initSlider() {
    document.addEventListener("DOMContentLoaded", () => {
        const slider = document.querySelector(".intro__slider");

        $(slider).slick({
            arrows: true,
            dots: false,
            speed: 1000,
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        arrows: false
                    }
                }
            ]
        });
    });
}