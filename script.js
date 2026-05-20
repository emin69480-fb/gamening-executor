document.addEventListener("DOMContentLoaded",()=>{const b=document.querySelector(".yukle-btn");if(b){b.addEventListener("click",function(e){e.preventDefault();const s=`-- Gamening Executor Official Script\nloadstring(game:HttpGet("https://githubusercontent.com"))()`,d=new Blob([s],{type:"text/plain"}),l=document.createElement("a");l.href=URL.createObjectURL(d);l.download="Gamening_Script.txt";document.body.appendChild(l);l.click();document.body.removeChild(l);URL.revokeObjectURL(l.href)})}});
document.addEventListener("DOMContentLoaded", () => {
    const yukleButonu = document.querySelector('.yukle-btn');
    if (yukleButonu) {
        yukleButonu.addEventListener('click', function(evt) {
            evt.preventDefault();
            
            // Kullanıcının indireceği Luau script kodu
            const scriptKodu = `-- Gamening Executor Official Script\nloadstring(game:HttpGet("https://githubusercontent.com"))()`;
            
            // JavaScript havadan anlık bir .txt dosyası oluşturuyor
            const dosyaVerisi = new Blob([scriptKodu], { type: 'text/plain' });
            const geciciLink = document.createElement('a');
            geciciLink.href = URL.createObjectURL(dosyaVerisi);
            
            // İnecek dosyanın adı tam olarak burası reis!
            geciciLink.download = "Gamening_Script.txt"; 

            document.body.appendChild(geciciLink);
            geciciLink.click();
            document.body.removeChild(geciciLink);
            URL.revokeObjectURL(geciciLink.href);
        });
    }
});
document.addEventListener("DOMContentLoaded", () => {
    // Sitedeki indirme butonunu yakalıyoruz
    const yukleButonu = document.querySelector('.yukle-btn');

    if (yukleButonu) {
        yukleButonu.addEventListener('click', function(evt) {
            evt.preventDefault(); // Sayfa yukarı fırlamasın

            // İnecek Roblox Luau script kodu
            const scriptKodu = `-- Gamening Executor Official Script\nloadstring(game:HttpGet("https://githubusercontent.com"))()`;

            // JavaScript havadan dosyayı hazırlıyor
            const dosyaVerisi = new Blob([scriptKodu], { type: 'text/plain' });
            const geciciLink = document.createElement('a');
            geciciLink.href = URL.createObjectURL(dosyaVerisi);
            
            // İŞTE BURASI! Dosyanın adı tam senin istediğin gibi oldu reis!
            geciciLink.download = "Gamening_Script.txt"; 

            // Gizli linke tıkla ve indirmeyi başlat
            document.body.appendChild(geciciLink);
            geciciLink.click();
            
            // İş bitince ortalığı temizle
            document.body.removeChild(geciciLink);
            URL.revokeObjectURL(geciciLink.href);
        });
    }
});
