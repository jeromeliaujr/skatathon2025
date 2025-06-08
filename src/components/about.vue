<script>
// Your script remains the same
export default {
  data() {
    return {
      headline: 'THE ONLY SKATATING MARATHON IN SINGAPORE',
      details:
        "SKATATHON 2025 is the sixth official skating marathon held by the SMUX Skating Team. Join us on for a thrilling challenge and a day filled with skating excitement. With three categories for skaters of all levels, it's an event you don't want to miss.",
        action: "REGISTER NOW"
    }
  },
}
</script>

<template>
  <!-- Apply background image here with fixed attachment -->
  <div
    class="hero min-h-[75vh] bg-cover bg-center bg-fixed" 
    style="background-image: url('src/img/skatathonpics/about2.jpg');"
  >
    <div class="hero-overlay bg-opacity-80" style="background-color: rgba(50,50,50,0.8)"></div> <!-- Adjusted opacity slightly -->

    <!-- Content remains the same, scrolls over the fixed background -->
    <div class="hero-content flex-col lg:flex-row text-neutral-content">
      <div class="text-center flex flex-col items-center"> <!-- Added max-width -->
        <h1 class="mb-5 text-4xl md:text-5xl font-bold font-varsity">{{ headline }}</h1> <!-- Responsive text -->
        <p class="text-lg md:text-xl mb-6"> <!-- Adjusted size/margin -->
          {{ details }}
        </p>
        <button class="btn btn-secondary w-fit">{{ action }}</button> <!-- Changed color, added w-fit -->
      </div>
    </div>
  </div>
</template>

