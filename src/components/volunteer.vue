<script>
// Your script remains the same
export default {
  data() {
    return {
      headline: 'VOLUNTEER WITH US',
      details:
        "Join us in making SMU Skatathon 2025 a success! We are looking for enthusiastic volunteers to help with various roles from bike sweepers to first aiders. No skating experience is required! Sign up now and be part of this exciting experience!",
      action: 'VOLUNTEER NOW',
      information: 'FIND OUT MORE',
    }
  },
  methods: {
    moreInfo() {
      window.open('https://drive.google.com/file/d/1kJk_GLW79-qbliqcOu1sVK1-4-YOfeDt/view', '_blank')
    },
    openLink() {
      window.open('https://forms.gle/bMQzjiyujyFXiJFM8', '_blank')
    },
  },
}
</script>

<template>
  <!-- Apply background image here with fixed attachment -->
  <div
    class="hero min-h-[80vh] bg-cover bg-center bg-fixed"
    style="background-image: url('/volunteer.JPG')"
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
        <div class="inline-flex items-center gap-4 mb-6">
        
        <button class="btn font-semibold text-lg btn-100 w-fit" @click="moreInfo()">
          {{ information }}
        </button>
        <button class="btn font-semibold text-lg btn-secondary w-fit" @click="openLink()">
          {{ action }}
        </button>
        </div>
      </div>
    </div>
  </div>
</template>
