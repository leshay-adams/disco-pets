<template>
  <div class="relative w-full max-w-sm h-80 sm:h-96 md:h-[28rem] mx-auto mt-6 px-4">
    <div class="absolute inset-0 bg-brand-secondary rounded-2xl shadow-2xl transform rotate-6"></div>
    <img v-if="!loading" :src="imageUrl" alt="pet"
      class="relative w-full h-full object-cover rounded-2xl shadow-lg transform hover:scale-105 transition duration-500 animate-fadeIn hover:shadow-[0_0_20px_rgba(138,79,255,0.5)]" />
    <div v-else class="relative w-full h-full flex items-center justify-center">
      <div class="w-12 h-12 border-4 border-brand-secondary border-t-brand-primary rounded-full animate-spin"></div>
    </div>
    <div v-if="error"
      class="absolute inset-0 flex flex-col items-center justify-center text-center bg-white/80 rounded-2xl p-4">
      <p class="text-brand-primary font-semibold text-sm sm:text-base">
        Oops.. that pet is unavailable to dance right now
      </p>
      <p class="text-xs sm:text-sm mt-1 text-gray-500">Incase it was your connection please try again</p>
    </div>

    <DynamicShape color="brand-primary" :size="2" :top="'-5%'" :left="'80%'" :rotate="45" />
    <DynamicShape color="brand-accent" :size="2.5" :top="'75%'" :left="'-5%'" :rotate="0" />
  </div>
</template>


<script>
import httpClient from '../classes/httpClient'
import DynamicShape from '../components/DynamicShape.vue'

export default {
  components: { DynamicShape },
  props: ['animal'],
  data() {
    return {
      imageUrl: '',
      loading: false,
      error: false,
    }
  },
  watch: {
    animal: {
      immediate: true,
      async handler(newVal) {
        if (!newVal) return
        this.loading = true
        this.error = false
        try {
          this.imageUrl = await httpClient.getPetImage(newVal)
        } catch (e) {
          console.error('Error fetching image:', e)
          this.error = true
        } finally {
          this.loading = false
        }
      }
    }
  }
}
</script>
