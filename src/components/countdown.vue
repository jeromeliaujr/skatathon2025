<template>
  <div class="hero bg-base-200 min-h-[50vh]">
    <div class="hero-content text-center">
      <div class="flex flex-col items-center w-full px-4">
        <!-- Title -->
        <h1 class="text-3xl sm:text-4xl md:text-5xl mb-6 md:mb-8 lg:mb-10 font-bold font-varsity">
          COUNTDOWN TO RACE DAY
        </h1>

        <!-- Countdown Grid: DaisyUI classes and Tailwind responsive grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-5">
          <!-- Days -->
          <div class="bg-base-100 rounded-box flex flex-col items-center p-2">
            <span class="font-helva font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl p-2 md:p-3 lg:p-4 xl:p-5">
              <span :style="`--value: ${countDownTime.days}`" aria-live="polite" :aria-label="`${countDownTime.days} days`">
                {{ countDownTime.days }}
              </span>
            </span>
            <span class="font-helva font-bold text-sm sm:text-base">DAYS</span>
          </div>
          <!-- Hours -->
          <div class="bg-base-100 rounded-box flex flex-col items-center p-2">
            <span class="font-helva font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl p-2 md:p-3 lg:p-4 xl:p-5">
              <span :style="`--value: ${countDownTime.hours}`" aria-live="polite" :aria-label="`${countDownTime.hours} hours`">
                {{ String(countDownTime.hours).padStart(2, '0') }}
              </span>
            </span>
            <span class="font-helva font-bold text-sm sm:text-base">HOURS</span>
          </div>
          <!-- Minutes -->
          <div class="bg-base-100 rounded-box flex flex-col items-center p-2">
            <span class="font-helva font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl p-2 md:p-3 lg:p-4 xl:p-5">
              <span :style="`--value: ${countDownTime.minutes}`" aria-live="polite" :aria-label="`${countDownTime.minutes} minutes`">
                {{ String(countDownTime.minutes).padStart(2, '0') }}
              </span>
            </span>
            <span class="font-helva font-bold text-sm sm:text-base">MINUTES</span>
          </div>
          <!-- Seconds -->
          <div class="bg-base-100 rounded-box flex flex-col items-center p-2">
            <span class="font-helva font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl p-2 md:p-3 lg:p-4 xl:p-5">
              <span :style="`--value: ${countDownTime.seconds}`" aria-live="polite" :aria-label="`${countDownTime.seconds} seconds`">
                {{ String(countDownTime.seconds).padStart(2, '0') }}
              </span>
            </span>
            <span class="font-helva font-bold text-sm sm:text-base">SECONDS</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
// Your existing script setup remains the same
import { ref, onMounted, onBeforeUnmount } from 'vue'

const countDownTime = ref({ days: 0, hours: 0, minutes: 0, seconds: 0 })
let intervalId = null
const targetDate = new Date('2025-08-31T00:00:00')

const updateCountdown = () => {
  const now = new Date()
  const diff = targetDate - now
  if (diff <= 0) {
    countDownTime.value = { days: 0, hours: 0, minutes: 0, seconds: 0 }
    clearInterval(intervalId)
    return
  }
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  const seconds = Math.floor((diff / 1000) % 60)
  countDownTime.value = { days, hours, minutes, seconds }
}

onMounted(() => {
  updateCountdown()
  intervalId = setInterval(updateCountdown, 1000)
})

onBeforeUnmount(() => {
  clearInterval(intervalId)
})
</script>

<style scoped>
/* Optional: Add specific styles if needed */
/* For DaisyUI countdown animation (if you re-add the class): */
/* .countdown > span { display: inline-block; } */
</style>
