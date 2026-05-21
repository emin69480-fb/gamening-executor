document.addEventListener("DOMContentLoaded", () => {
    const downloadCards = document.querySelectorAll(".download-card");
    const actionBtn = document.querySelector(".action-btn");
    const headerBtn = document.querySelector(".header-btn");
    const downloadFile = "./GamingExecutor.zip";

    downloadCards.forEach(card => {
        card.addEventListener("click", () => {
            downloadCards.forEach(c => c.classList.remove("active"));
            card.classList.add("active"));
        });
    });

    if (actionBtn) {
        actionBtn.setAttribute("href", downloadFile);
        actionBtn.removeAttribute("target");
    }

    if (headerBtn) {
        headerBtn.setAttribute("href", downloadFile);
        headerBtn.removeAttribute("target");
    }
});
