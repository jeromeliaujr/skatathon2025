<template>
  <div class="hero bg-base-300 min-h-[50vh]">
    <div class="hero-content text-center">
      <div class="max-w-8xl w-full">
        <h1 class="text-5xl font-bold mt-10 mb-10 font-varsity">{{ title }}</h1>
        <!-- Added margin-bottom -->
        <!-- Make sure the carousel container itself can be constrained if needed -->
        <div class="carousel rounded-box w-full max-w-8xl mx-auto">
          <!-- Example: Constrain overall width -->
          <!-- Removed m-20, added padding p-4 and a fixed width w-48 -->
          <div
            v-for="sponsor in sponsors"
            :key="sponsor.src"
            class="carousel-item p-8 w-48 flex items-center justify-center"
          >
            <!-- Used max-w-full inside the sized container -->
            <img class="block h-20 max-w-full object-contain" :src="sponsor.src" :alt="sponsor.alt" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Your script remains the same
export default {
  data() {
    return {
      title: 'Sponsors',
      sponsors: [
        { src: 'src/img/sponsor1.webp', alt: 'Sponsor 1 Logo' },
        { src: 'src/img/sponsor2.webp', alt: 'Sponsor 2 Logo' },
        { src: 'src/img/sponsor3.png', alt: 'Sponsor 3 Logo' },
        { src: 'src/img/sponsor4.webp', alt: 'Sponsor 4 Logo' },
        { src: 'src/img/sponsor5.webp', alt: 'Sponsor 5 Logo' },
        { src: 'src/img/sponsor6.png', alt: 'Sponsor 6 Logo' },
        { src: 'src/img/sponsor7.webp', alt: 'Sponsor 7 Logo' },
        { src: 'src/img/sponsor8.webp', alt: 'Sponsor 8 Logo' },
      ],
    }
  },
}

import { onMounted, onUnmounted } from 'vue'

let intervalId = null
const intervalDuration = 300 // Slide change interval in milliseconds (e.g., 3 seconds)

onMounted(() => {
  const carousel = document.querySelector('.carousel')
  if (!carousel) return

  const slides = carousel.querySelectorAll('.carousel-item')
  if (slides.length <= 1) return // No need to slide if only one or zero slides

  let currentSlideIndex = 0

  const showNextSlide = () => {
    // Find the "next" button within the currently visible slide
    // DaisyUI's structure puts controls *inside* the slide div
    const currentSlideElement = slides[currentSlideIndex]
    const nextButton = currentSlideElement.querySelector('a.btn:last-of-type') // Assumes 'next' is the last button

    if (nextButton) {
      // Programmatically click the next button
      nextButton.click()

      // Update the current slide index based on the href of the clicked button
      const nextSlideId = nextButton.getAttribute('href')?.substring(1) // Get 'slide2' from '#slide2'
      slides.forEach((slide, index) => {
        if (slide.id === nextSlideId) {
          currentSlideIndex = index
        }
      })
    } else {
      // Fallback or error handling if button not found
      console.error('Could not find the next button for the current slide.')
      clearInterval(intervalId) // Stop interval if controls are missing
    }
  }

  // Start the automatic sliding
  intervalId = setInterval(showNextSlide, intervalDuration)

  // Optional: Pause sliding when the mouse hovers over the carousel
  carousel.addEventListener('mouseenter', () => clearInterval(intervalId))
  // Optional: Resume sliding when the mouse leaves the carousel
  carousel.addEventListener('mouseleave', () => {
    intervalId = setInterval(showNextSlide, intervalDuration)
  })
})
</script>
