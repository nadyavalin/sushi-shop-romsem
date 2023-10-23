const sliderLine = document.querySelector(".popular-slider__line");
const arrowPrev = document.querySelector(".arrow-prev");
const arrowNext = document.querySelector(".arrow-next");
let offset = 0;

arrowPrev.addEventListener("click", () => {
  offset -= 289 + 40;
  if (offset < 0) {
    offset = 0;
  }
  sliderLine.style.left = `${-offset}px`;
});

arrowNext.addEventListener("click", () => {
  offset += 289 + 40;
  if (offset > 1200) {
    offset = 0;
  }
  sliderLine.style.left = `${-offset}px`;
});

/* сделать слайдер конечным в одну и в другую сторону и кнопки должны дизактивироваться при окончании слайдера */
/* или сделать слайдер бесконечным */