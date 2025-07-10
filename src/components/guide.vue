<script>
export default {
  data() {
    return {
      title: 'RACE GUIDE',
      details:
        "Download the official SMU Skatathon's Race E-Guide to instantly access detailed information about the race, program highlights, routes, and much more! All conveniently organized in one place for a seamless and exciting skatathon.",
      action: 'DOWNLOAD',

    }
  },
   methods: {
    openLink() {
      window.open('https://www.dropbox.com/scl/fi/hxj5ca2cczb1xl57jqgx7/SMU-Skatathon-2025-Race-E-Guide.pdf?rlkey=y5flwbhci4gukv4lgf2404wkd&st=oir4hc0i&dl=0', '_blank');
    }
  }
}
</script>

<template>
  <div class="hero bg-base-200 min-h-[50vh] py-10 md:py-16">
    <div class="hero-content text-center">
      <!-- <div class="flex items-center"> -->
      <div class="card lg:card-side bg-base-100 shadow-sm p-4">
        <figure class="lg:w-3/6">
          <img src="/guide.png" alt="Movie" class="p-8 sm:p-12 md:p-16 lg:p-20" />
        </figure>
        <div class="card-body lg:w-3/6">
          <h1 class="text-4xl md:text-5xl font-varsity mt-10 mb-10 text-left">{{ title }}</h1>
          <!-- <h1 class="text-5xl mb-10 text-left font-bold font-varsity">{{ title }}</h1> -->
          <!-- Added margin-bottom -->
          <p class="text-lg text-left">{{ details }}</p>
          <button
            class="btn font-semibold text-lg btn-secondary mb-20 mt-10 md:mt-10"
            @click.stop="openLink()"
          >
            {{ action }}
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>
