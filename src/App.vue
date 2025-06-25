<script setup>
import navbar from './components/navbar.vue'
import faq from './components/faq.vue'
import banner from './components/banner.vue'
import countdown from './components/countdown.vue'
import sponsor from './components/sponsor.vue'
import category from './components/category.vue'
import guide from './components/guide.vue'
import entitlement from './components/entitlement.vue'
import social from './components/social.vue'
import grid from './components/grid.vue'
import about from './components/about.vue'
import detail from './components/detail.vue'
</script>
<template>
  <header>
    <navbar />
  </header>
  <main>
    <banner />
    <detail/>
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
    <social />
  </main>
</template>
