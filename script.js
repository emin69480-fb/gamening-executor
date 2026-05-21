document.addEventListener("DOMContentLoaded", () => {
    const actionBtn = document.querySelector(".action-btn");
    const headerBtn = document.querySelector(".header-btn");
    const downloadCards = document.querySelectorAll(".download-card");

    // HİLE: Linkin arkasına rastgele bir sayı (sayaç) ekleyerek tarayıcının hafızasını zorla patlatıyoruz
    const rasgeleSayi = Math.floor(Math.random() * 99999);
    const testDosyasi = "https://wikimedia.org" + rasgeleSayi;

    // Kartların seçilme efekti
    downloadCards.forEach(card => {
        card.addEventListener("click", () => {
            downloadCards.forEach(c => c.classList.remove("active"));
            card.classList.add("active");
        });
    });

    // Butonlara tıklandığında çalışacak kesin indirme fonksiyonu
    const indirmeyiDene = (e) => {
        e.preventDefault(); 
        
        alert("🚨 GLITCH X: Tarayıcı engeli kırıldı! İndirme şimdi zorla başlatılıyor.");
        
        // Tarayıcıyı yeni linke zorla yönlendiriyoruz
        window.location.href = testDosyasi;
    };

    if (actionBtn) {
        actionBtn.addEventListener("click", indirmeyiDene);
    }
    if (headerBtn) {
        headerBtn.addEventListener("click", indirmeyiDene);
    }
});
