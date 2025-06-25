<template>
  <div class="hero bg-base-200 min-h-[50vh] py-10 md:py-16">
    <!-- Added vertical padding -->
    <div class="hero-content text-center w-full">
      <!-- Container for content width and padding -->
      <div class="max-w-7xl w-full px-4">
        <!-- Adjusted max-w, Added padding -->
        <!-- Title: Responsive size and margins -->
        <h1 class="text-4xl lg:text-5xl mb-8 md:mb-12 lg:mb-16 font-bold font-varsity">
          {{ title }}
        </h1>
        <h1
          class="text-3xl md:text-4xl lg:text-5xl pl-5 pr-5 pt-2 pb-2 mb-6 md:mb-10 font-bold font-varsity bg-[#34acc0] text-[#ffffff]"
        >
          {{ subtitle }}
        </h1>

        <!-- Grid Layout: Responsive columns and gap -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <!-- Loop through entitlements -->
          <div
            v-for="entitlement in entitlements"
            :key="entitlement.src"
            class="card bg-base-100 w-full shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
          >
            <!-- Figure first for image on top -->
            <figure class="bg-secondary">
              <!-- Optional background for figure -->
              <img
                class="w-full h-48 object-contain p-4"
                :src="entitlement.src"
                :alt="entitlement.alt"
              />
            </figure>
            <!-- Card Body -->
            <div class="card-body items-center text-center py-4">
              <!-- Adjusted padding -->
              <!-- Use entitlement.title -->
              <h2 class="card-title text-lg md:text-xl">{{ entitlement.title }}</h2>
              <!-- Optional: Add a short description if available -->
              <!-- <p class="text-sm text-base-content/80 mt-1">A brief description here.</p> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Your script with updated data structure
export default {
  data() {
    return {
      title: 'RACE ENTITLEMENTS',
      subtitle: 'TO BE REVEALED',
      entitlements: [
        { title: 'Tote Bag', src: '/totebag.png', alt: 'Race tote bag' },
        { title: 'Skatathon Tee', src: '/tee.png', alt: 'Skatathon tee' },
        { title: 'Keychain', src: '/keychain.png', alt: 'Skatathon keychain' },
        { title: 'Race Bib', src: '/racebib.png', alt: 'Race bib' },
        { title: 'Socks', src: '/socks.png', alt: 'Socks' },
        { title: 'Sponsor Vouchers', src: '/vouchers.png', alt: 'Discount vouchers from sponsors' },
      ],
    }
  },
}
</script>

<style scoped>
/* Add specific styles if needed */
.card-body {
  min-height: 80px; /* Example: Ensure card body has some minimum height */
}
</style>
