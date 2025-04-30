<template>
  <div class="text-slate-900 max-w-screen-sm w-full mx-auto px-6 py-10 text-center space-y-10">
    <div class="space-y-3 relative">
      <h1 class="text-4xl sm:text-6xl font-extrabold drop-shadow-lg animate-fadeIn leading-tight">
        Disco Pets
      </h1>
      <h3 class="text-sm sm:text-lg uppercase tracking-wide text-slate-500 animate-fadeIn">
        A Frontend Dev Showcase
      </h3>
      <div class="absolute top-[-40px] right-0 p-4 text-3xl animate-float select-none">
        {{ selectedAnimal === 'cat' ? '🐱‍👤' : '💫' }}
      </div>
      <div class="absolute top-10 left-30 p-4 text-3xl animate-float select-none">
        {{ selectedAnimal === 'cat' ? '✨' : '🎉' }}
      </div>
    </div>
    <p class="text-sm sm:text-lg text-slate-600 leading-relaxed max-w-md mx-auto animate-fadeIn delay-200">
      Pick your vibe – cat or dog – and we'll fetch a random pic to match your mood.
    </p>

    <PetPicker class="animate-fadeIn delay-400" v-model:chosenPet="selectedAnimal" />
    <PetImage class="mx-auto animate-bounceIn delay-600" :animal="selectedAnimal" />
  </div>
</template>


<script>
import PetPicker from '../components/PetPicker.vue'
import PetImage from '../components/PetImage.vue'

export default {
  components: { PetPicker, PetImage },
  data() {
    return {
      selectedAnimal: null
    }
  },
  created() {
    const saved = localStorage.getItem('selectedAnimal')
    if (saved) {
      this.selectedAnimal = saved
    }
  },
  watch: {
    selectedAnimal(newAnimal) {
      if (newAnimal) {
        localStorage.setItem('selectedAnimal', newAnimal)
      }
    }
  }
}
</script>
