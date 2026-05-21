document.addEventListener("DOMContentLoaded", () => {
    const actionBtn = document.querySelector(".action-btn");
    const headerBtn = document.querySelector(".header-btn");

    const butonTiklandi = (e) => {
        e.preventDefault();
        alert("🚨 GLITCH X: Dosya şu anda güncelleniyor! Yeni sürüm çok yakında burada aktif olacaktır.");
    };

    if (actionBtn) actionBtn.addEventListener("click", butonTiklandi);
    if (headerBtn) headerBtn.addEventListener("click", butonTiklandi);
});
