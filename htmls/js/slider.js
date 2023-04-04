const slider = document.getElementById("slider");
const slides = slider.querySelectorAll(".slide");
let currentSlide = 0;
let touchStartX = 0;
let touchEndX = 0;

// Set the first slide to be active
slides[currentSlide].classList.add("active");

const progressBar = document.querySelector('.progress');
const progress = ((currentSlide + 1) / slides.length) * 100;
progressBar.style.width = `${progress}%`;



// Create a timer to change the active slide every 8 seconds
setInterval(() => {


  // Remove the active class from the current slide
  slides[currentSlide].classList.remove("active");
  
  // Increment the current slide, or reset to 0 if at the end
  currentSlide = (currentSlide + 1) % slides.length;
  
  // Set the next slide to be active
  slides[currentSlide].classList.add("active");

  


}, 8000);



// Add touch events to change slide when swiping
slider.addEventListener("touchstart", (event) => {
  touchStartX = event.touches[0].clientX;
});

slider.addEventListener("touchend", (event) => {
  touchEndX = event.changedTouches[0].clientX;
  
  // Determine the direction of the swipe
  if (touchStartX - touchEndX > 50) {
    // Swipe left, go to the next slide
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");

    const progressBar = document.querySelector('.progress');
    const progress = ((currentSlide + 1) / slides.length) * 100;
    progressBar.style.width = `${progress}%`;


  } else if (touchEndX - touchStartX > 50) {
    // Swipe right, go to the previous slide
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + slides.length - 1) % slides.length;
    slides[currentSlide].classList.add("active");

    const progressBar = document.querySelector('.progress');
    const progress = ((currentSlide + 1) / slides.length) * 100;
    progressBar.style.width = `${progress}%`;

  }
});

