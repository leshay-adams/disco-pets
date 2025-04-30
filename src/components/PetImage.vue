<template>
  <div class="relative w-80 h-80 mx-auto mt-6">
    <div class="absolute inset-0 bg-petPink rounded-2xl shadow-2xl transform rotate-6"></div>
    <img v-if="!loading" :src="imageUrl" alt="pet" class="relative w-full h-full object-cover rounded-2xl shadow-lg transform hover:scale-105 transition duration-500 animate-fadeIn hover:shadow-[0_0_20px_rgba(138,79,255,0.5)]
" />

    <div v-else class="relative w-full h-full flex items-center justify-center">
      <div class="w-12 h-12 border-4 border-petPink border-t-petPurple rounded-full animate-spin"></div>
    </div>

    <DynamicShape color="petPurple" :size="2" :top="'-5%'" :left="'80%'" :rotate="45" />
    <DynamicShape color="petBlue" :size="2.5" :top="'75%'" :left="'-5%'" :rotate="0" />
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
