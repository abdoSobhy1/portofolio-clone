let activeIndex = 0;

const slides = document.getElementsByTagName("article");

const handleLeftClick = () => {
  const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : slides.length - 1;

  const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`),
    nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);

  currentSlide.dataset.status = "after";

  nextSlide.dataset.status = "becoming-active-from-before";

  setTimeout(() => {
    nextSlide.dataset.status = "active";
    activeIndex = nextIndex;
  });
};

const handleRightClick = () => {
  const nextIndex = activeIndex + 1 <= slides.length - 1 ? activeIndex + 1 : 0;

  const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`),
    nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);

  currentSlide.dataset.status = "before";

  nextSlide.dataset.status = "becoming-active-from-after";

  setTimeout(() => {
    nextSlide.dataset.status = "active";
    activeIndex = nextIndex;
  });
};

const nav = document.querySelector("nav");
const mNav = document.querySelector("#nav-mobile-section");

const handleNavToggle = () => {
  nav.dataset.transitionable = "true";
  if (nav.dataset.toggled === "true") {
    nav.dataset.toggled = "false";
    setTimeout(() => {
      mNav.style.display = "none";
    }, 300);
  } else {
    mNav.style.display = "grid";
    setTimeout(() => {
      nav.dataset.toggled = "true";
    }, 3);
  }
};

window.matchMedia("(max-width: 762px)").onchange = (e) => {
  nav.dataset.transitionable = "false";
  mNav.style.display = "flex";
  nav.dataset.toggled = "false";
};
