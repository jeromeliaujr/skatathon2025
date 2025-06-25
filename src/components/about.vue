<script>
// Your script remains the same
export default {
  data() {
    return {
      headline: 'THE ONLY SKATING MARATHON IN SINGAPORE',
      details:
        "SMU SKATATHON 2025 is the sixth official skating marathon, proudly organized by the SMU SMUX Skating Team. Featuring four dynamic categories for skaters of every skill level, this event is your chance to push your limits, connect with other passionate skaters and be part of the growing skating community. Join us for a day filled with excitement and unforgetable memories. It's an event you would not want to miss!",
      action: 'REGISTER NOW',
    }
  },
  methods: {
    openLink() {
      window.open(
        'https://www.eventbrite.sg/e/skatathon-2025-tickets-1375881010139?aff=oddtdtcreator',
        '_blank',
      )
    },
  },
}
</script>

<template>
  <!-- Apply background image here with fixed attachment -->
  <div
    class="hero min-h-[75vh] bg-cover bg-center bg-fixed"
    style="background-image: url('/about2.jpg')"
  >
    <div class="hero-overlay bg-opacity-80" style="background-color: rgba(50, 50, 50, 0.8)"></div>
    <!-- Adjusted opacity slightly -->

    <!-- Content remains the same, scrolls over the fixed background -->
    <div class="hero-content flex-col lg:flex-row text-neutral-content">
      <div class="text-center flex flex-col items-center">
        <!-- Added max-width -->
        <h1 class="mb-5 text-4xl md:text-5xl font-bold font-varsity">{{ headline }}</h1>
        <!-- Responsive text -->
        <p class="text-lg md:text-xl mb-6">
          <!-- Adjusted size/margin -->
          {{ details }}
        </p>
        <button class="btn text-lg btn-secondary w-fit" @click="openLink()">
          {{ action }}
        </button>
      </div>
    </div>
  </div>
</template>
