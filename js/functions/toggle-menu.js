const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");

export function toggleMenu() {
  hamburger.onclick = () => {
    if (nav.classList.contains("show-menu")) {
      nav.classList.remove("show-menu");
    } else {
      nav.classList.add("show-menu");
    }
  };
}
