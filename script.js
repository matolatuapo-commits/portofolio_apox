
// ANIMASI TEKS BERGANTI
const typingElement = document.getElementById("typing");

const words = [
    "Web Developer",
    "Programmer",
    "Informatics Student"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typingEffect() {

    // Periksa apakah elemen tersedia
    if (!typingElement) return;

    const currentWord = words[wordIndex];

    if (deleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typingElement.textContent =
        currentWord.substring(0, charIndex);

    let speed = deleting ? 60 : 120;

    if (!deleting && charIndex === currentWord.length) {
        deleting = true;
        speed = 1200;
    } else if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 400;
    }

    setTimeout(typingEffect, speed);
}

typingEffect();


// MENU NAVIGASI HP
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function() {
        navLinks.classList.toggle("active");
    });

    // TUTUP MENU SETELAH DIKLIK
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", function() {
            navLinks.classList.remove("active");
        });
    });
}


// FORMULIR WHATSAPP
const contactForm = document.getElementById("contactForm");

// GANTI DENGAN NOMOR WHATSAPP KAMU
const whatsappNumber = "6281234567890";

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        const whatsappMessage =
            "Halo, saya " + name +
            "\nEmail: " + email +
            "\nPesan: " + message;

        const whatsappURL =
            "https://wa.me/" + whatsappNumber +
            "?text=" + encodeURIComponent(whatsappMessage);

        window.open(whatsappURL, "_blank");

        contactForm.reset();
    });
}
