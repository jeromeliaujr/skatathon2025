<script>
export default {
  data() {
    return {
      images: [
        '/src/img/skatathonpics/skatathon1.JPG',
        '/src/img/skatathonpics/skatathon2.JPG',
        '/src/img/skatathonpics/skatathon3.JPG',
        '/src/img/skatathonpics/skatathon4.JPG',
        '/src/img/skatathonpics/skatathon5.JPG',
        '/src/img/skatathonpics/skatathon6.JPG',
      ]
    }
  }
}
</script>

<template>
  <div class="hero bg-secondary min-h-[50vh] py-10 md:py-16">
    <!-- Added vertical padding -->
    <!-- Added horizontal padding px-4 -->
    <div class="hero-content text-center flex flex-col items-center">
      <h1
        class="text-3xl md:text-4xl lg:text-5xl font-bold mt-6 md:mt-8 mb-6 md:mb-10 font-varsity"
      >
        GALLERY
      </h1>

      <div class="card lg:card-side bg-secondary shadow-sm p-1">
        <div class="grid grid-cols-3 gap-1">
          <div v-for="(img, index) in images" :key="index">
            <img :src="img" alt="Gallery image" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
