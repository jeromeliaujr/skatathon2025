<script>
export default {
  data() {
    return {
      title: 'RACE GUIDE',
      details:
        "Download SMU Skatathon's Race e-Guide to access detailed information about the race, program highlights, the race route, and much more! The e-Guide provides you with the necessary knowledge for a great Skatathon.",
      action: 'VIEW',

    }
  },
   methods: {
    openLink() {
      window.open('https://drive.google.com/file/d/1DKqMQXB1K6XtTten6KCqnEhhmm0RcsyR/view?usp=sharing', '_blank');
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
          <img src="/guide.png" alt="Movie" class="p-20" />
        </figure>
        <div class="card-body lg:w-3/6">
          <h1 class="text-5xl mb-10 text-left font-bold font-varsity">{{ title }}</h1>
          <!-- Added margin-bottom -->
          <p class="text-lg text-left">{{ details }}</p>
          <button
            class="btn text-lg btn-secondary mb-20"
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
