<script>
// Your script remains the same
export default {
  data() {
    return {
      headline: 'THE ONLY SKATING MARATHON IN SINGAPORE',
      details:
        "SMU SKATATHON 2025 is the sixth official inline skating marathon, proudly organised by the SMU SMUX Skating Team. Featuring four dynamic categories for skaters of every skill level, this event is your chance to push your limits, connect with other passionate skaters and be part of the growing skating community. Join us for a day filled with excitement and unforgettable memories. It's an event you don't want to miss!",
      action: 'REGISTER NOW',
    }
  },
  methods: {
    openLink() {
      window.open('https://www.eventbookings.com/b/event/smu-skatathon-2025', '_blank')
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
    <div class="hero-overlay bg-primary/75"></div>
    <!-- Adjusted opacity slightly -->

    <!-- Content remains the same, scrolls over the fixed background -->
    <div class="hero-content flex-col lg:flex-row text-neutral-content">
      <div class="text-center flex flex-col items-center">
        <!-- Added max-width -->
        <h1 class="mb-5 text-4xl md:text-5xl font-bold font-varsity">{{ headline }}</h1>
        <!-- Responsive text -->
        <p class="sm:text-lg md:text-xl mb-6">
          <!-- Adjusted size/margin -->
          {{ details }}
        </p>
        <button class="btn font-semibold text-lg btn-secondary w-fit" @click="openLink()">
          {{ action }}
        </button>
      </div>
    </div>
  </div>
</template>
