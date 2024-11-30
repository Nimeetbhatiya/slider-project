let currentSlide = 0;
const slides = document.querySelector(".slides");
const sliderCount = document.querySelectorAll(".slide").length;
const intervalTime = 3000; // Fixed typo: "intervelTime" -> "intervalTime"
let intervalId;

function next() {
    currentSlide = (currentSlide + 1) % sliderCount; 
    updateSlider();
}

function previous() {
    currentSlide = (currentSlide - 1 + sliderCount) % sliderCount;
    updateSlider();
}

function updateSlider() {
    slides.style.transform = `translateX(-${currentSlide * 100}%)`; // Fixed template literal
}

function startAutoSlide() {
    stopAutoSlide(); // Ensure no multiple intervals
    intervalId = setInterval(next, intervalTime);
}

function stopAutoSlide() {
    clearInterval(intervalId); // Fixed variable name
}

document.querySelector(".next").addEventListener("click", () => {
    stopAutoSlide(); // Stop the current interval
    next(); // Move to the next slide
    startAutoSlide(); // Restart the interval
});

document.querySelector(".prev").addEventListener("click", () => {
    stopAutoSlide(); // Stop the current interval
    previous(); // Move to the previous slide
    startAutoSlide(); // Restart the interval
});

startAutoSlide();
