const slides = document.querySelector(".slides");
const leftButton = document.querySelector(".slide-left");
const rightButton = document.querySelector(".slide-right");
let offset = 0;

leftButton.addEventListener("click", () => {
  offset -= 1200;
  slides.style.transform = `translateX(${offset}px)`;  
});

rightButton.addEventListener("click", () => {
    offset += 1200;
    slides.style.transform = `translateX(${offset}px)`;
});
