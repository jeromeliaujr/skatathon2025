<script>
export default {
  data() {
    return {
      title: 'Race Guide',
      details: "Download SMU Skatathon's Race e-Guide to access detailed information about the race, program highlights, the race route, and much more! The e-Guide provides you with the necessary knowledge for a great Skatathon.'",
      action: 'VIEW'
    }
  },
}
</script>

<template>
  <div class="hero bg-base-200 min-h-[50vh] py-10 md:py-16">
    <div class="hero-content text-center">
      <!-- <div class="flex items-center"> -->
        <div class="card lg:card-side bg-base-100 shadow-sm p-4">
          <figure class="lg:w-3/6">
            <img
              src="../img/guide.png"
              alt="Movie"
              class="p-20"
            />
          </figure>
          <div class="card-body lg:w-3/6">
            <h1 class="text-5xl font-bold mb-10 text-left font-varsity">{{ title }}</h1> <!-- Added margin-bottom -->
            <p class="text-lg text-left">{{ details }}</p>
            <button class="btn btn-secondary mb-20">{{ action }}</button>
          </div>
        </div>
      </div>
    </div>
  <!-- </div> -->
</template>
