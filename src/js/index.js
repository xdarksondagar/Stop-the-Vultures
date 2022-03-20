// Aos
import AOS from "aos";
AOS.init({
  once: true,
  duration: 1000,
});

// SLIDER
// Glide slider
import Glide, {
  Controls,
  Autoplay,
} from "@glidejs/glide/dist/glide.modular.esm";

const glide = new Glide(".glide", {
  type: "carousel",
  autoplay: 5000,
  startAt: 0,
});

glide.mount({ Controls, Autoplay });

// NAV-BAR
const navBtn = document.querySelector(".nav__hamburger");
const nav = document.querySelector("#nav");
const main = document.querySelector("main");
const footer = document.querySelector(".footer");

navBtn.addEventListener("click", () => {
  nav.classList.toggle("nav-open");
});

function rmNav(x) {
  x.addEventListener("click", () => {
    const hasOpen = nav.classList.contains("nav-open");
    if (hasOpen) {
      nav.classList.remove("nav-open");
    }
  });
}
rmNav(main);
rmNav(footer);
