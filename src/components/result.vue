<script setup>
import { onMounted, ref } from 'vue'
import { supabase } from '../supabaseClient'

const data = ref([])
const error = ref(null)
const searchTerm = ref('')

async function fetchData() {
  let query = supabase.from('timing').select('*')
  const trimmed = searchTerm.value.trim()
  if (trimmed !== '') {
    const raceId = Number(trimmed)
    if (!isNaN(raceId)) {
      query = query.eq('raceId', raceId)
    } else {
      data.value = []
      error.value = 'Please enter a valid race bib number'
      return
    }
  }
  const { data: fetchedData, error: fetchError } = await query
  if (fetchError) {
    error.value = fetchError.message
    console.error(fetchError)
  } else {
    if (fetchedData.length === 0 && trimmed !== '') {
      data.value = []
      error.value = 'NO MATCHING RECORD FOUND'
    } else {
      data.value = fetchedData
      error.value = null
    }
  }
}

// Load all data initially
onMounted(() => {
  fetchData()
})
</script>

<template>
  <div class="hero bg-base-100 min-h-[50vh] py-10">
    <div class="hero-content flex-col text-center w-full px-6">
      <h1 class="text-4xl md:text-5xl font-varsity tracking-wide">RESULTS</h1>
      <div class="card lg:card-side p-10 w-full pb-2">
        <div class="flex flex-col items-center w-full px-4">
          <div class="flex items-center gap-3 mb-6 md:mb-10 justify-center min-w-md mx-auto">
            <input
              type="search"
              v-model="searchTerm"
              placeholder="Enter your race bib number"
              class="input-bordered input w-full bg-white pl-3"
              @keyup.enter="fetchData"
            />
            <button class="btn btn-secondary font-semibold text-lg px-6" @click="fetchData">
              SEARCH
            </button>
          </div>

          <div class="max-h-40 overflow-x-auto rounded-lg border border-base-300 bg-white w-full">
            <table class="table table-zebra text-center min-w-full">
              <thead class="bg-base-300 sticky top-0 z-10">
                <tr>
                  <th class="font-helva text-sm md:text-lg lg:text-xl mb-6">BIB NO</th>
                  <th class="font-helva text-sm md:text-lg lg:text-xl mb-6">CATEGORY</th>
                  <th class="font-helva text-sm md:text-lg lg:text-xl mb-6">TIME</th>
                </tr>
              </thead>
              <tbody>
                <tr v-if="error" class="text-error text-base md:text-lg font-semibold">
                  <td colspan="3" class="text-center">{{ error }}</td>
                </tr>
                <tr
                  v-else
                  v-for="item in data"
                  :key="item.raceId"
                  class="hover:bg-base-200 transition-colors duration-200"
                >
                  <td class="text-sm md:text-lg font-semibold mb-6">{{ item.raceId }}</td>
                  <td class="text-sm md:text-lg mb-6">{{ item.category }}</td>
                  <td class="text-sm md:text-lg mb-6">{{ item.duration }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
