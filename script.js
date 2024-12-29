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

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
} 

// Emoji animasyonu için
const emojis = ['🫡', '🙏', '❤️', '🐝', '✨', '💝', '✅', '😊', '🚀', '💡', '🌟', '🎯'];
const hero = document.querySelector('.hero');

function createEmoji() {
    const emoji = document.createElement('div');
    emoji.className = 'floating-emoji';
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.left = Math.random() * 100 + 'vw';
    emoji.style.animationDuration = Math.random() * 5 + 5 + 's';
    hero.appendChild(emoji);

    // Animasyon bitince elementi kaldır
    emoji.addEventListener('animationend', () => {
        emoji.remove();
    });
}

// Her 500ms'de bir yeni emoji oluştur
setInterval(createEmoji, 500); 