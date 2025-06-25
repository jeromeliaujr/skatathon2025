// src/router/index.js (or wherever your router config is)
import { createRouter, createWebHistory } from 'vue-router';

// Import the ONE main component that contains all your sections
import MainPageView from './components/banner.vue'; // Or BannerView, App.vue, etc.

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Or createWebHashHistory
  routes: [
    {
      // Route for the single page containing the sections
      path: '/',
      name: 'home',
      component: MainPageView
    },
    // Add other routes ONLY if you have actual separate pages/components
    // { path: '/about', name: 'about', component: AboutView },
  ],

  // Optional: Add scroll behavior for smoother scrolling to hashes
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth', // Add smooth scrolling
      }
    } else if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 } // Scroll to top on normal navigation
    }
  }
});

export default router;

// Remember to import and use this router in your main.js/main.ts
// import router from './router'
// createApp(App).use(router).mount('#app')
