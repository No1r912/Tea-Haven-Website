const btn = document.getElementById("teaShopsBtn");
const menu = document.getElementById("teaShopsMenu");

if (btn && menu) {

    btn.addEventListener("click", function(e) {
        e.preventDefault();
        menu.classList.toggle("show");
    });

    document.addEventListener("click", function(e) {
        if (!btn.contains(e.target) && !menu.contains(e.target)) {
            menu.classList.remove("show");
        }
    });

}






const words = ["Chalux", "Guhe", "De Hoja", "Gong Cha", "Tea Live"];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.getElementById("typing");

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!isDeleting) {
        typingElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }

    } else {
        typingElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }

    setTimeout(typeEffect, isDeleting ? 80 : 120);
}

typeEffect();



const searchInput = document.getElementById("menuSearch");

if (searchInput) {
    searchInput.addEventListener("keyup", function () {

        const filter = this.value.toLowerCase();
        const cards = document.querySelectorAll(".searchable");

        cards.forEach(card => {

            const title = card.querySelector("h4").textContent.toLowerCase();

            if (title.includes(filter)) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }

        });

    });
}










