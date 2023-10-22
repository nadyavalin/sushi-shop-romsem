const cardsLine = document.querySelector(".popular-slider__cards_line");
const arrowPrev = document.querySelector(".arrow-prev");
const arrowNext = document.querySelector(".arrow-next");

// Slider in About block
let offset = 0;
const slideWidth = 329; // Ширина слайда

// Switch slider
function switchSlide(newOffset) {
  offset = newOffset;
  cardsLine.style.left = `${-offset * slideWidth}px`;
}

// Slider arrows for Prev
arrowPrev.addEventListener("click", () => {
  if (offset > 0) {
    switchSlide(offset - 1);
  } else {
    // Если достигнут первый слайд, переместиться в конец
    switchSlide(cardsLine.childElementCount - 1);
  }
});

// Slider arrows for Next
arrowNext.addEventListener("click", () => {
  if (offset < cardsLine.childElementCount - 1) {
    switchSlide(offset + 1);
  } else {
    // Если достигнут последний слайд, переместиться в начало
    switchSlide(0);
  }
});