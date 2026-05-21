document.addEventListener("DOMContentLoaded", () => {
    const actionBtn = document.querySelector(".action-btn");
    const headerBtn = document.querySelector(".header-btn");
    const downloadCards = document.querySelectorAll(".download-card");
    const downloadFile = "./GamingExecutor.zip";

    // Kartların seçilme efekti
    downloadCards.forEach(card => {
        card.addEventListener("click", () => {
            downloadCards.forEach(c => c.classList.remove("active"));
            card.classList.add("active");
        });
    });

    // Butonlara tıklandığında hem uyarı verecek hem de indirmeyi başlatacak fonksiyon
    const indirmeyiBaslat = (e) => {
        e.preventDefault(); // Varsayılan sayfa yönlendirmesini engelle
        
        // Önce uyarıyı gösterir
        alert("🚨 GLITCH X: Dosya güncelleniyor ancak indirme işlemi yine de deneniyor!");
        
        // Tamam butonuna basıldığı an indirmeyi zorla başlatır
        const gizliLink = document.createElement("a");
        gizliLink.href = downloadFile;
        gizliLink.download = "GamingExecutor.zip";
        document.body.appendChild(gizliLink);
        gizliLink.click();
        document.body.removeChild(gizliLink);
    };

    if (actionBtn) {
        actionBtn.addEventListener("click", indirmeyiBaslat);
    }
    if (headerBtn) {
        headerBtn.addEventListener("click", indirmeyiBaslat);
    }
});
