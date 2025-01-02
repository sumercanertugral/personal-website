function switchLanguage(lang) {
    // Tüm dil butonlarının active sınıfını kaldır
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Seçilen dil butonuna active sınıfını ekle
    document.querySelector(`.lang-btn:nth-child(${lang === 'tr' ? 1 : 2})`).classList.add('active');

    // Tüm çevrilebilir elementleri bul ve çevir
    document.querySelectorAll('[data-' + lang + ']').forEach(element => {
        element.textContent = element.getAttribute('data-' + lang);
    });

    // İsim ve unvanı özel olarak işle
    if (lang === 'tr') {
        document.querySelector('.hero h1').innerHTML = 'Merhaba, Ben <span class="highlight">Sümer Can Ertuğral</span>';
    } else {
        document.querySelector('.hero h1').innerHTML = 'Hello, I\'m <span class="highlight">Sümer Can Ertuğral</span>';
    }
}

// Modal functions
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Modal kapatma olayları
document.addEventListener('DOMContentLoaded', function () {
    // Tüm modalları seç
    const modals = document.querySelectorAll('.modal');

    modals.forEach(modal => {
        // Tıklama olayı
        modal.addEventListener('click', function (event) {
            if (event.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });

        // Dokunmatik olaylar
        modal.addEventListener('touchstart', function (event) {
            if (event.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });

        // Kapatma butonuna tıklama
        const closeBtn = modal.querySelector('.close-modal');
        if (closeBtn) {
            closeBtn.addEventListener('click', function () {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            });

            closeBtn.addEventListener('touchend', function (event) {
                event.preventDefault();
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            });
        }
    });
});

// Emoji animasyonu için
const emojis = ['🫡', '🙏', '❤️', '🐝', '✨', '💝', '✅', '😊', '🚀', '💡', '🌟', '🎯', '🎃', '🤠', '🤖', '👻', '🤙', '👀', '🎯', '🎃', '🤠', '🤖', '👻', '🤙', '👀'];
const hero = document.querySelector('.hero');

function createEmoji() {
    const emoji = document.createElement('div');
    emoji.className = 'floating-emoji';
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.left = Math.random() * 100 + 'vw';
    emoji.style.animationDuration = Math.random() * 5 + 8 + 's';
    hero.appendChild(emoji);

    // Animasyon bitince elementi kaldır
    emoji.addEventListener('animationend', () => {
        emoji.remove();
    });
}

// Emoji oluşturma sıklığını azalt
setInterval(createEmoji, 1000);

// Sayfa yüklendiğinde dil ayarını kontrol et
document.addEventListener('DOMContentLoaded', function () {
    // Varsayılan dil TR
    switchLanguage('tr');
}); 