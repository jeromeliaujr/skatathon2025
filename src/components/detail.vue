<template>
  <div class="bg-secondary carousel-wrapper mx-auto px-4 w-full">
    <div class="embla overflow-hidden h-20 sm:h-32">
      <div class="embla__viewport overflow-hidden w-full h-full" ref="viewport">
        <div class="embla__container flex h-full">
          <div
            v-for="(slide, index) in slides"
            :key="index"
            class="embla__slide flex-shrink-0 flex-grow-0 relative"
          >
            <div class="embla__slide__content flex items-center justify-center h-full p-4 mr-15">
              <font-awesome-icon :icon="slide.icon" />
              <p class="text-3xl sm:text-4xl md:text-5xl font-varsity">
                <!-- <p class="text-xl md:text-5xl lg:text-6xl font-bold font-archi text-center"> -->
                {{ slide.title }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import EmblaCarousel from 'embla-carousel'
import AutoScroll from 'embla-carousel-auto-scroll'

export default {
  setup() {
    const viewport = ref(null)
    const emblaApi = ref(null)

    const slides = ref([
      { title: 'SMU SKATATHON 2025, 6TH EDITION', icon: ['fas', 'calendar'] },
      { title: '31 AUGUST 2025, 06.45 - 13.30', icon: ['fas', 'calendar'] },
      { title: 'PASSION WAVE @ MARINA BAY', icon: ['fas', 'calendar'] },
      { title: 'FOR SKATERS, BY SKATERS', icon: ['fas', 'calendar'] },
    ])

    onMounted(() => {
      if (viewport.value) {
        emblaApi.value = EmblaCarousel(
          viewport.value,
          {
            loop: true,
          },
          [
            AutoScroll({
              playOnInit: true,
              speed: 1.5,
              stopOnInteraction: false,
            }),
          ],
        )
      }
    })

    return { viewport, slides }
  },
}
</script>
<!-- 
<style>
.carousel-wrapper {
  max-width: 100%;
  margin: 0 auto;
  padding: 1rem;
}
.embla {
  overflow: hidden;
}
.embla__viewport {
  overflow: hidden;
  width: 100%;
}
.embla__container {
  display: flex;
}
.embla__slide {
  flex: 0 0 60%;
  min-width: 0;
  position: relative;
}
.embla__slide__content {
  padding: 1rem;
}
.font-archi {
  /* Add your font styling here */
}
</style> -->
