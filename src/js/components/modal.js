// Есть возможность обработки множества модальных окон (не только формы обратной связи, но и других, если в дальнейшем бы появились)

export default function handleModal() {
    const modalButtons = document.querySelectorAll("[data-modal]");
    const modalWindows = document.querySelectorAll(".modal");
    const modalClose = document.querySelectorAll(".modal__close");
    const body = document.body;

    modalButtons.forEach(item => {
        item.addEventListener("click", event => {
            let target = event.currentTarget;
            let modalID = target.getAttribute("data-modal");
            let modal = document.getElementById(modalID);
            showModal(modal);
        });
    });

    modalClose.forEach(close => {
        close.addEventListener("click", event => {
            let currentModal = event.currentTarget.closest(".modal");
            closeModal(currentModal);
        });
    });

    modalWindows.forEach(modal => {
        modal.addEventListener("click", event => {
            let currentModal = event.currentTarget;
            closeModal(currentModal);
        });
    });

    function showModal(modal) {
        let modalContent = modal.querySelector(".modal__content");

        modalContent.addEventListener("click", event => {
            event.stopPropagation();
        });
        
        modal.classList.add("show");
        body.classList.add("no-scroll");
        setTimeout(function() {
            modalContent.classList.add("show");
        }, 1);
    }

    function closeModal(currentModal) {
        let modalContent = currentModal.querySelector(".modal__content");

        modalContent.classList.remove("show");
        setTimeout(function() {
            currentModal.classList.remove("show");
            body.classList.remove("no-scroll");
        }, 400);
    }
} 