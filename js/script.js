document.addEventListener("DOMContentLoaded", () => {
  let currentSlide = 1;
  let totalSlides = 2;

  let prevButton = document.getElementById("prevButton");
  let nextButton = document.getElementById("nextButton");

  prevButton.addEventListener("click", () => {
    currentSlide = currentSlide - 1 <= 0 ? totalSlides : currentSlide - 1;
    showSlide(currentSlide);
  });

  nextButton.addEventListener("click", () => {
    currentSlide = currentSlide + 1 > totalSlides ? 1 : currentSlide + 1;
    showSlide(currentSlide);
  });

  function showSlide(slideNumber) {
    const slides = document.getElementsByClassName("slider_content");
    Array.from(slides).forEach((slide) => slide.classList.add("hidden"));
    slides[slideNumber - 1].classList.remove("hidden");
  }

  showSlide(currentSlide);
}); // фух, ели успел(тут могла быть ваша утка)

// анимация счета
const counterElement = document.querySelector("#countedNumber");
let isAnimated = false;

document.addEventListener("scroll", () => {
  if (
    counterElement.getBoundingClientRect().top < window.innerHeight * 0.75 &&
    !isAnimated
  ) {
    isAnimated = true;
    startCount();
  }
});

function startCount() {
  let currentValue = 0;
  let max = +counterNumber.getAttribute("data-value");

  let pace = 100;

  let interval = setInterval(() => {
    if (pace >= max * 0.75) {
      pace = 10;
    }
    if (currentValue >= max) {
      clearInterval(interval);
    }
    counterNumber.innerText = currentValue;
    currentValue++;
  }, pace);
}
