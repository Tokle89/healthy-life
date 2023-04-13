const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");
console.log(nav);

export function toggleMenu() {
  hamburger.onclick = function () {
    if (nav.classList.contains("show-menu")) {
      nav.classList.remove("show-menu");
    } else {
      nav.classList.add("show-menu");
    }
  };
}
