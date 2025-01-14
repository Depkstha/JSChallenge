let currentIndex = 0;

function showSlide(index) {
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;
  const slidesToShow = 4; // Number of slides visible at a time
  const maxIndex = totalSlides - slidesToShow; // Maximum index to prevent empty space

  if (index > maxIndex) {
    currentIndex = 0; // Loop back to the start
  } else if (index < 0) {
    currentIndex = maxIndex; // Loop back to the end
  } else {
    currentIndex = index;
  }

  const offset = -currentIndex * (100 / slidesToShow); // Adjust transform based on visible slides
  slider.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

// Initialize the slider
showSlide(currentIndex);
