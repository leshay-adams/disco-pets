<template>
  <div class="relative w-80 h-80 mx-auto mt-6">
    <div class="absolute inset-0 bg-petPink rounded-2xl shadow-2xl transform rotate-6"></div>
    <img v-if="!loading" :src="imageUrl" alt="pet"
      class="relative w-full h-full object-cover rounded-2xl shadow-lg transform hover:scale-105 transition duration-500 animate-fadeIn" />
    <div v-else class="relative w-full h-full flex items-center justify-center">
      loading..
    </div>
  </div>
</template>


<script>
import httpClient from '../classes/httpClient'

export default {
  props: ['animal'],
  data() {
    return {
      imageUrl: '',
      loading: false
    }
  },
  watch: {
    animal: {
      immediate: true,
      async handler(newVal) {
        if (!newVal) return
        this.loading = true
        try {
          this.imageUrl = await httpClient.getPetImage(newVal)
        } catch (e) {
          console.error('please try again', e)
        } finally {
          this.loading = false
        }
      }
    }
  }
}
</script>
