<script>
// Your script remains the same
export default {
  data() {
    return {
      title: 'ABOUT THE RACE',
      headline: 'SINGAPORE ONLY SKATATING MARATHON',
      details:
        "Skatathon 2025 is the sixth official skating marathon held by the SMUX Skating Team. Join us on  for a thrilling challenge and a day filled with skating excitement. With three categories for skaters of all levels, it's an event you don't want to miss.",
        images: [
        { src: 'src/img/skatathon1.jpg', alt: 'Sponsor 1 Logo' },
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
</script>
<template>
  <div class="hero bg-base-300 min-h-[50vh] p-5">
    <!-- Ensure hero-content has max-width and centering -->
    <div
      class="hero-content flex flex-col lg:flex-row justify-center items-stretch gap-5 mx-auto px-4"
    >
      <!-- Card 1 -->
      <div class="card card-border bg-base-100 min-w-auto shadow-md flex-1 flex-grow">
        <div class="card-body">
          <h2 class="card-title">{{ title }}</h2>
          <h1 class="text-4xl lg:text-5xl font-bold mb-2 lg:mb-4 text-left font-varsity">{{ headline }}</h1>
          <p class="text-lg text-left">
            {{ details }}
          </p>
        </div>
      </div>

      <!-- Card 2 -->
      <div class="card card-border bg-base-100 min-w-auto shadow-md flex-1 flex-grow">
        <div class="card-body">
          <!-- <img class="mb-5 rounded-lg" src="../img/skatathon1.jpg" /> -->
          <div class="carousel rounded-box w-full">
            <div v-for="image in images"
            :key="image.src" class="carousel-item w-full">
              <img class="w-full"
                :src="image.src" :alt="image.alt"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End of hero-content -->
  </div>
</template>
