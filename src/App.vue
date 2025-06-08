<script setup>
import navbar from './components/navbar.vue'
import faq from './components/faq.vue'
import banner from './components/banner.vue'
import countdown from './components/countdown.vue'
import sponsor from './components/sponsor.vue'
import category from './components/category.vue'
import guide from './components/guide.vue'
import entitlement from './components/entitlement.vue'
import foot from './components/foot.vue'
import grid from './components/grid.vue'
import about from './components/about.vue'
</script>
<template>
  <header>
    <navbar />
  </header>
  <main>
    <banner />
    <countdown />
    <about />
    <section id="guide">
      <guide />
    </section>
    <section id="category">
      <category />
    </section>
    <entitlement />
    <section id="sponsor">
      <sponsor />
    </section>
    <grid />
    <section id="faq">
      <faq />
    </section>
    <foot />
  </main>
</template>
