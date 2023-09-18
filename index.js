const slides = document.querySelector(".slides");
const leftButton = document.querySelector(".slide-left");
const rightButton = document.querySelector(".slide-right");
let offset = 0;
let counter = 1;
let windowWidth = window.innerWidth;
slides.style.columnGap = windowWidth + 'px';

// slide images left
function slideLeft() {
  if (counter < 5) {
    offset -= (windowWidth + 200);
    counter += 1;
    slides.style.transform = `translateX(${offset}px)`;
  }  
}

// slide images right
function slideRight() {
  if (counter > 1) {
    offset += (windowWidth + 200);
    counter -= 1;
    slides.style.transform = `translateX(${offset}px)`;
  }  
}

leftButton.addEventListener("click", slideLeft);
rightButton.addEventListener("click", slideRight);

let timer = setInterval(slideLeft, 5000);

document.addEventListener('mousemove', () => {
  clearInterval(timer);
  timer = setInterval(slideLeft, 5000);
})
