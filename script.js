document.addEventListener("DOMContentLoaded", () => {
    const actionBtn = document.querySelector(".action-btn");
    const headerBtn = document.querySelector(".header-btn");
    const downloadCards = document.querySelectorAll(".download-card");

    // DÜZELTME: Kullanıcı tıkladığında gerçek dosyanızı dışarıdan bir linkle (Drive, Discord vb.) indirtelim
    // Alttaki link yerine indirtmek istediğiniz asıl dosyanın internet linkini yazabilirsiniz
    const gercekLink = "https://github.com";

    // Kartların seçilme efekti
    downloadCards.forEach(card => {
        card.addEventListener("click", () => {
            downloadCards.forEach(c => c.classList.remove("active"));
            card.classList.add("active");
        });
    });

    // Butonlara tıklandığında indirmeyi başlat
    const baslat = (e) => {
        e.preventDefault();
        window.location.href = gercekLink;
    };

    if (actionBtn) {
        actionBtn.setAttribute("href", gercekLink);
        actionBtn.removeAttribute("target");
        actionBtn.addEventListener("click", baslat);
    }
    if (headerBtn) {
        headerBtn.setAttribute("href", gercekLink);
        headerBtn.removeAttribute("target");
        headerBtn.addEventListener("click", baslat);
    }
});
