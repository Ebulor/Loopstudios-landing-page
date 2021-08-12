const mobile = document.querySelector(".mobile-menu");
const nav = document.querySelector(".navbar");
const mobilenav = document.querySelector("nav");

mobile.addEventListener("click", () => {
  nav.classList.toggle("open-menu");
  mobile.classList.toggle("toggle");
  mobilenav.classList.toggle("nav-mobile");
});
