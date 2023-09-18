const slides = document.querySelector(".slides");
const leftButton = document.querySelector(".slide-right");
const rightButton = document.querySelector(".slide-left");
const slideSelectors = document.querySelector(
  "section#slide-selection"
).children;
const boxWidth = 200;
let offset = 0;
let counter = 1;
let windowWidth = window.innerWidth;
slides.style.columnGap = windowWidth + "px";

// fills in circle when a slide is changed
function toggleActive(index) {
  [...slideSelectors][index - 1].classList.toggle('selected');
}

// slide images left
function slideLeft() {
  if (counter < 5) {
    offset -= windowWidth + boxWidth;
    toggleActive(counter);
    counter += 1;
    toggleActive(counter);
    slides.style.transform = `translateX(${offset}px)`;
  }
}

// slide images right
function slideRight() {
  if (counter > 1) {
    offset += windowWidth + boxWidth;
    toggleActive(counter);
    counter -= 1;
    toggleActive(counter);
    slides.style.transform = `translateX(${offset}px)`;
  }
}

[...slideSelectors].forEach((child) => {
  child.addEventListener("click", function () {
    // jump to the appropriate slide or don't do anything
    toggleActive(counter);
    let id = Number(this.id);

    if (id < counter) {
      let i = counter - id;
      offset += (windowWidth + boxWidth) * i;
    } else if (id > counter) {
      let i = id - counter;
      offset -= (windowWidth + boxWidth) * i;
    } else {
      return false;
    }
    counter = id;
    toggleActive(counter);

    document.body.classList.add('no-transition');
    slides.style.transform = `translateX(${offset}px)`;
    setTimeout(() => {
      document.body.classList.remove('no-transition');
    }, '100');
  });
});

leftButton.addEventListener("click", slideLeft);
rightButton.addEventListener("click", slideRight);

// slides to the right every 5 seconds on idle
let timer = setInterval(slideLeft, 5000);

document.addEventListener("mousemove", () => {
  clearInterval(timer);
  timer = setInterval(slideLeft, 5000);
});

toggleActive(1);