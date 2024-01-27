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
