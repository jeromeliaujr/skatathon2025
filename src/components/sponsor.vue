<script setup>
import { ref } from 'vue'
import emblaCarouselVue from 'embla-carousel-vue'
import Autoplay from 'embla-carousel-autoplay'

const title = 'Sponsors'
const images = ref([
  { src: 'src/img/sponsor1.webp', alt: 'Sponsor 1 Logo' },
  { src: 'src/img/sponsor2.webp', alt: 'Sponsor 2 Logo' },
  { src: 'src/img/sponsor3.png', alt: 'Sponsor 3 Logo' },
  { src: 'src/img/sponsor4.webp', alt: 'Sponsor 4 Logo' },
  { src: 'src/img/sponsor5.webp', alt: 'Sponsor 5 Logo' },
  { src: 'src/img/sponsor6.png', alt: 'Sponsor 6 Logo' },
  { src: 'src/img/sponsor7.webp', alt: 'Sponsor 7 Logo' },
  { src: 'src/img/sponsor8.webp', alt: 'Sponsor 8 Logo' },
])

// --- Embla Carousel Setup ---
// Initialize Embla with loop and Autoplay plugin [1, 3, 4]
const [emblaRef] = emblaCarouselVue(
  {
    loop: true, // Enable infinite looping [1]
    align: 'start', // Align slides to the start
    // slidesToScroll: 1, // Default: scroll one slide at a time [1]
    // Could set to 4 if you want button clicks/drags to move 4 slides
  },
  [Autoplay({ delay: 3000, stopOnInteraction: false })], // Autoplay config [3]
)
</script>

<template>
  <!-- Optional: Outer container for centering and spacing -->
  <div class="hero bg-base-100 min-h-[50vh] p-5">
    <div class="hero-content text-center w-full px-4">
      <div class="flex flex-col items-center w-full">
        <h1 class="text-5xl font-bold mb-20 text-left font-varsity">{{ title }}</h1>
        <!-- Embla Viewport: ref and overflow hidden required -->
         
        <div class="embla" ref="emblaRef">
          <!-- Embla Container: flex required -->
          <div class="embla__container">
            <!-- Loop through images -->
            <div class="embla__slide" v-for="(image, index) in images" :key="index">
              <!-- Slide Content Wrapper (for potential gap/padding) -->
              <div class="embla__slide__content mx-4 flex items-center justify-center h-full">
                <!-- Added margin for gap -->
                <img
                  :src="image.src"
                  :alt="image.alt"
                  class="block max-h-full w-40 object-contain"
                />
                <!-- Adjust height (h-48) and styling as needed -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.embla {
  overflow: hidden;
}
.embla__container {
  display: flex;
  /* Negative margin compensates for slide margin */
  margin-left: -1rem; /* Corresponds to mx-4 */
  margin-right: -1rem; /* Corresponds to mx-4 */
}
.embla__slide {
  /* 4 slides visible */
  flex: 0 0 25%;
  min-width: 0;
  position: relative;
  height: 120px; /* Give slide a fixed height to help centering */
}
.embla__slide__content {
  /* Ensure content wrapper also takes height */
  height: 100%;
}
</style>
