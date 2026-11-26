// Webopoly Wiki header burger menu
const burgerButton = document.getElementById("burger");
const navMenu = document.getElementById("nav");

function setMenuOpen(isOpen) {
    navMenu.classList.toggle("open", isOpen);
    burgerButton.setAttribute("aria-expanded", isOpen);
    burgerButton.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
}

function toggleMenu() {
    const isOpen = navMenu.classList.contains("open");
    setMenuOpen(!isOpen);
}

function closeMenuOnLink(event) {
    if (event.target.tagName === "A") {
        setMenuOpen(false);
    }
}

burgerButton.addEventListener("click", toggleMenu);
navMenu.addEventListener("click", closeMenuOnLink);
