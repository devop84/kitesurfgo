const slider = document.getElementById("slider");
const slides = slider.querySelectorAll(".slide");

let currentSlide = 0;
let touchStartX = 0;
let touchEndX = 0;

// Set the first slide to be active
slides[currentSlide].classList.add("active");

const progressBar = document.querySelector(".progress");
updateProgressBar();

let intervalId = setInterval(changeSlide, 8000);

function changeSlide() {
  // Remove the active class from the current slide
  slides[currentSlide].classList.remove("active");

  // Increment the current slide, or reset to 0 if at the end
  currentSlide = (currentSlide + 1) % slides.length;

  // Set the next slide to be active
  slides[currentSlide].classList.add("active");

  updateProgressBar();
}

function updateProgressBar() {
  const progress = ((currentSlide + 1) / slides.length) * 100;
  progressBar.style.width = `${progress}%`;
}

// Add touch events to change slide when swiping
slider.addEventListener("touchstart", (event) => {
  touchStartX = event.touches[0].clientX;
  clearInterval(intervalId);
});

slider.addEventListener("touchend", (event) => {
  touchEndX = event.changedTouches[0].clientX;

  // Determine the direction of the swipe
  if (touchStartX - touchEndX > 50) {
    // Swipe left, go to the next slide
    currentSlide = (currentSlide + 1) % slides.length;
  } else if (touchEndX - touchStartX > 50) {
    // Swipe right, go to the previous slide
    currentSlide = (currentSlide + slides.length - 1) % slides.length;
  }

  // Set the new active slide and update progress bar
  slides.forEach(slide => slide.classList.remove("active"));
  slides[currentSlide].classList.add("active");
  updateProgressBar();

  // Start a new interval after the slide has been changed
  intervalId = setInterval(changeSlide, 8000);
});
