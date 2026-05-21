document.addEventListener("DOMContentLoaded", () => {
    const actionBtn = document.querySelector(".action-btn");
    const headerBtn = document.querySelector(".header-btn");
    const downloadCards = document.querySelectorAll(".download-card");

    // İndirilecek gerçek test dosyasının linki (Zararsız Roblox Simgesi)
    const testDosyasi = "https://wikimedia.org";

    // Kartların seçilme efekti
    downloadCards.forEach(card => {
        card.addEventListener("click", () => {
            downloadCards.forEach(c => c.classList.remove("active"));
            card.classList.add("active");
        });
    });

    // Butonlara tıklandığında çalışacak indirme fonksiyonu
    const indirmeyiDene = (e) => {
        e.preventDefault(); 
        alert("🚨 GLITCH X: Test indirmesi başlatılıyor! Arkadaşınız gelene kadar sistem bu şekilde test edilecektir.");
        window.location.href = testDosyasi;
    };

    if (actionBtn) {
        actionBtn.addEventListener("click", indirmeyiDene);
    }
    if (headerBtn) {
        headerBtn.addEventListener("click", indirmeyiDene);
    }
});

