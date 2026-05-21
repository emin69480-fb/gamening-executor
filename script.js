document.addEventListener("DOMContentLoaded", () => {
    const actionBtn = document.querySelector(".action-btn");
    const headerBtn = document.querySelector(".header-btn");
    const downloadCards = document.querySelectorAll(".download-card");

    // Kartların seçilme efekti (Neon çerçeve geçişi)
    downloadCards.forEach(card => {
        card.addEventListener("click", () => {
            downloadCards.forEach(c => c.classList.remove("active"));
            card.classList.add("active");
        });
    });

    // Butonlara tıklandığında çalışacak simülasyon fonksiyonu
    const butonTiklandi = (e) => {
        e.preventDefault(); // Hata veren boş indirmeyi engeller
        
        // Ekrana şık bir bilgilendirme kutusu çıkartır
        alert("🚨 GLITCH X: Dosya şu anda güncelleniyor! Yeni sürüm çok yakında burada aktif olacaktır. Lütfen takipte kalın.");
    };

    if (actionBtn) {
        actionBtn.addEventListener("click", butonTiklandi);
    }
    if (headerBtn) {
        headerBtn.addEventListener("click", butonTiklandi);
    }
});
