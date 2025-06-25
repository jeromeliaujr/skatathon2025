<template>
  <div class="hero bg-secondary min-h-[50vh] py-10 md:py-16">
    <!-- Added vertical padding -->
    <!-- Added horizontal padding px-4 -->
    <div class="hero-content text-center flex flex-col items-center">
      <h1 class="text-4xl lg:text-5xl mt-6 md:mt-8 mb-6 md:mb-10 font-varsity">
        GALLERY
      </h1>
      <div class="embla">
        <!-- Main Carousel -->
        <div class="embla__viewport" ref="emblaMainRef">
          <div class="embla__container">
            <div v-for="(slide, index) in slides" :key="index" class="embla__slide">
              <div class="aspect-w-16 aspect-h-9 w-full rounded-xl overflow-hidden">
                <img
                  :src="slide"
                  :alt="'Slide ' + (index + 1)"
                  class="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Thumbnail Carousel -->
        <div class="embla-thumbs mt-4">
          <div class="embla-thumbs__viewport" ref="emblaThumbsRef">
            <div class="embla-thumbs__container">
              <div
                v-for="(slide, index) in slides"
                :key="index"
                :class="[
                  'embla-thumbs__slide',
                  index === selectedIndex ? 'embla-thumbs__slide--selected' : '',
                ]"
              >
                <div class="aspect-[16/9] w-full overflow-hidden rounded-xl relative">
                  <button class="w-full h-full relative" @click="onThumbClick(index)" type="button">
                    <img :src="slide" alt="Thumbnail" class="w-full h-full object-cover" />
                    <div
                      v-if="index === selectedIndex"
                      class="absolute inset-0 bg-opacity-30 rounded-xl ring-2 ring-white" style="background-color: rgba(50,50,50,0.8)"
                    ></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import emblaCarouselVue from 'embla-carousel-vue'

const slides = [
  '/skatathon1.JPG',
  '/skatathon2.JPG',
  '/skatathon3.JPG',
  '/skatathon4.JPG',
  '/skatathon5.JPG',
  '/skatathon6.jpg',
  '/skatathon7.jpg',
  '/skatathon8.jpg',
  '/skatathon9.jpg',
  '/skatathon10.jpg',
]

const selectedIndex = ref(0)

const [emblaMainRef, emblaMainApi] = emblaCarouselVue({ loop: true })
const [emblaThumbsRef, emblaThumbsApi] = emblaCarouselVue({
  containScroll: 'keepSnaps',
  dragFree: true,
})

const onThumbClick = (index) => {
  if (emblaMainApi.value) emblaMainApi.value.scrollTo(index)
}

const onSelect = () => {
  if (emblaMainApi.value && emblaThumbsApi.value) {
    selectedIndex.value = emblaMainApi.value.selectedScrollSnap()
    emblaThumbsApi.value.scrollTo(selectedIndex.value)
  }
}

onMounted(() => {
  emblaMainApi.value?.on('select', onSelect).on('reInit', onSelect)
  onSelect()
})

onUnmounted(() => {
  emblaMainApi.value?.destroy()
  emblaThumbsApi.value?.destroy()
})
</script>

<style scoped>
.embla {
  overflow: hidden;
}
.embla__viewport {
  overflow: hidden;
}
.embla__container {
  display: flex;
}
.embla__slide {
  flex: 0 0 100%;
  min-width: 0;
}
.embla-thumbs__viewport {
  overflow: hidden;
}
.embla-thumbs__container {
  display: flex;
  flex-direction: row;
}
.embla-thumbs__slide {
  flex: 0 0 22%;
  min-width: 0;
  padding-left: 0.8rem;
}

@media (min-width: 576px) {
  .embla-thumbs__slide {
    flex: 0 0 15%;
  }
}
</style>
