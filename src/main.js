import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import { inject } from '@vercel/analytics'

inject() // Initializes Vercel Analytics

createApp(App)
  .use(router)
  .mount('#app')