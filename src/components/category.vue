<template>
  <div class="hero secondary min-h-[50vh] py-10 md:py-16">
    <!-- Added vertical padding -->
    <!-- Added horizontal padding px-4 -->
    <div class="hero-content text-center flex flex-col items-center">
      <h1
        class="text-3xl md:text-4xl lg:text-5xl mt-6 md:mt-8 mb-6 md:mb-10 font-bold font-varsity"
      >
        {{ title }}
      </h1>
      <h1
        class="text-3xl md:text-4xl lg:text-5xl pl-5 pr-5 pt-2 pb-2 mb-6 md:mb-10 font-bold font-varsity bg-[#34acc0] text-[#ffffff]"
      >
        {{ subtitle }}
    </h1>

      <div class="card lg:card-side p-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <!-- Loop through entitlements -->
          <div
            v-for="category in categories"
            :key="category.src"
            class="card bg-base-200 w-full shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
          >
            <!-- Figure first for image on top -->
            <figure class="">
              <!-- Optional background for figure -->
              <img
                class="w-full h-48 object-contain p-4 rounded-b-lg"
                :src="category.src"
                :alt="category.alt"
              />
            </figure>
          </div>
        </div>
        <!-- <figure>
          <img src="../img/race.png" alt="Race Categories" class="h-48 md:h-64 lg:h-80" />
        </figure> -->
        <!-- <div class="card-body items-center text-center sm:items-start sm:text-start">
          <p class="text-sm md:text-base">
            Find all the information about different race categories, distances, entry fees, and
            included goodies right here. Plan your race day!
          </p>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
// Your script with updated data structure
export default {
  data() {
    return {
      title: 'RACE CATEGORIES & PRICING',
      subtitle: 'EARLY BIRD SPECIAL TILL 24 JULY 2025',

      categories: [
        { title: '4km', src: '/4km.png', alt: '4km' },
        { title: '10km', src: '/10km.png', alt: '10km' },
        { title: '21km', src: '/21km.png', alt: '21km' },
        { title: '42km', src: '/42km.png', alt: '42km' },
      ],
    }
  },
}
</script>
