<script setup>
import { ref } from 'vue'
import emblaCarouselVue from 'embla-carousel-vue'
import Autoplay from 'embla-carousel-autoplay'

// Assumes images are moved to public/img/skatathonpics/
const images = ref([
  { src: '/src/img/skatathonpics/banner.png', alt: 'Skatathon event photo 1' },
  // { src: 'src/img/skatathonpics/skatathon2.jpg', alt: 'Skatathon event photo 2' },
  // { src: 'src/img/skatathonpics/skatathon3.jpg', alt: 'Skatathon event photo 3' },
  // { src: 'src/img/skatathonpics/skatathon4.jpg', alt: 'Skatathon event photo 4' },
])

const [emblaRef, emblaApi] = emblaCarouselVue({ loop: true }, [
  Autoplay({ delay: 3000, stopOnInteraction: false }),
])

function pauseAutoplay() {
  autoplay.stop()
  setTimeout(() => {
    autoplay.play()
  }, 3000)
}

function scrollNext() {
  emblaApi.value?.scrollNext()
  pauseAutoplay()
}

function scrollPrev() {
  emblaApi.value?.scrollPrev()
  pauseAutoplay()
}
</script>

<template>
  <div class="relative">
    <div class="embla">
      <div class="embla__viewport" ref="emblaRef">
        <div class="embla__container">
          <div class="embla__slide" v-for="(image, index) in images" :key="index">
            <img :src="image.src" :alt="image.alt" class="block w-full object-cover" />
          </div>
        </div>
      </div>
      <button
        class="absolute bottom-4 right-17 z-10 btn btn-circle"
        @click="scrollPrev"
        aria-label="Previous"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          aria-label="Less than"
        >
          <polyline
            points="16 4 8 12 16 20"
            fill="none"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <button
        class="absolute bottom-4 right-4 z-10 btn btn-circle"
        @click="scrollNext"
        aria-label="Next"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          aria-label="Greater than"
        >
          <polyline
            points="8 4 16 12 8 20"
            fill="none"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped>
.embla {
  overflow: hidden;
}
.embla__container {
  display: flex;
}
.embla__slide {
  flex: 0 0 100%;
  min-width: 0;
  position: relative;
}
</style>
