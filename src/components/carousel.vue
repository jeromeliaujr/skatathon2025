<template>
  <div class="carousel w-full">
    <div id="slide1" class="carousel-item relative w-full">
      <img
        src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
        class="w-full"
      />
      <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <a href="#slide4" class="btn btn-circle">❮</a>
        <a href="#slide2" class="btn btn-circle">❯</a>
      </div>
    </div>
    <div id="slide2" class="carousel-item relative w-full">
      <img
        src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
        class="w-full"
      />
      <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <a href="#slide1" class="btn btn-circle">❮</a>
        <a href="#slide3" class="btn btn-circle">❯</a>
      </div>
    </div>
    <div id="slide3" class="carousel-item relative w-full">
      <img
        src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
        class="w-full"
      />
      <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <a href="#slide2" class="btn btn-circle">❮</a>
        <a href="#slide4" class="btn btn-circle">❯</a>
      </div>
    </div>
    <div id="slide4" class="carousel-item relative w-full">
      <img
        src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
        class="w-full"
      />
      <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <a href="#slide3" class="btn btn-circle">❮</a>
        <a href="#slide1" class="btn btn-circle">❯</a>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted } from 'vue';

let intervalId = null;
const intervalDuration = 300; // Slide change interval in milliseconds (e.g., 3 seconds)

onMounted(() => {
  const carousel = document.querySelector('.carousel');
  if (!carousel) return;

  const slides = carousel.querySelectorAll('.carousel-item');
  if (slides.length <= 1) return; // No need to slide if only one or zero slides

  let currentSlideIndex = 0;

  const showNextSlide = () => {
    // Find the "next" button within the currently visible slide
    // DaisyUI's structure puts controls *inside* the slide div
    const currentSlideElement = slides[currentSlideIndex];
    const nextButton = currentSlideElement.querySelector('a.btn:last-of-type'); // Assumes 'next' is the last button

    if (nextButton) {
      // Programmatically click the next button
      nextButton.click();

      // Update the current slide index based on the href of the clicked button
      const nextSlideId = nextButton.getAttribute('href')?.substring(1); // Get 'slide2' from '#slide2'
      slides.forEach((slide, index) => {
        if (slide.id === nextSlideId) {
          currentSlideIndex = index;
        }
      });
    } else {
      // Fallback or error handling if button not found
      console.error("Could not find the next button for the current slide.");
      clearInterval(intervalId); // Stop interval if controls are missing
    }
  };

  // Start the automatic sliding
  intervalId = setInterval(showNextSlide, intervalDuration);

  // Optional: Pause sliding when the mouse hovers over the carousel
  carousel.addEventListener('mouseenter', () => clearInterval(intervalId));
  // Optional: Resume sliding when the mouse leaves the carousel
  carousel.addEventListener('mouseleave', () => {
    intervalId = setInterval(showNextSlide, intervalDuration);
  });
});
</script>