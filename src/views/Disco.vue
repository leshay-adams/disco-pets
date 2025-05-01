<template>
  <div
    class="text-indigo-950 max-w-screen-sm w-full xl:space-x-24 mx-auto px-6 py-16 text-center xl:flex xl:flex-row xl:max-w-screen-lg xl:text-left xl:p-0">
    <div class="mb-24 xl:mb-0">
      <div class="relative xl:mr-10">
        <h1 class="text-7xl/[0.8em] sm:text-9xl/[0.8em] font-extrabold drop-shadow-lg animate-fadeIn tracking-[-0.1em]">
          Disco Pets
        </h1>
        <h3 class="text-[0.6rem] sm:text-md uppercase tracking-wide animate-fadeIn py-3 xl:ml-28">
          A Frontend Dev Showcase
        </h3>
        <div class="absolute top-[-40px] right-0 p-4 text-3xl xl:text-6xl animate-float select-none">
          {{ selectedAnimal === 'cat' ? '😻' : '💫' }}
        </div>
        <div class="absolute left-0 w-full mb-4 overflow-hidden h-12">
          <div class="animate-slide whitespace-nowrap text-lg">
            🐈 🐾 🐕
          </div>
        </div>
        <p
          class="base-text xl:text-xl text-brand-subtitle leading-relaxed max-w-md xl:max-w-xl mx-auto animate-fadeIn delay-200 pt-8 px-10 xl:px-0">
          Pick your vibe – cat or dog – and we'll fetch a random pic to match your mood.
        </p>
      </div>
      <PetPicker class="animate-fadeIn delay-400 p-8 xl:px-0" v-model:chosenPet="selectedAnimal" />
      <div class="hidden sm:block absolute left-10 p-4 text-5xl animate-float select-none opacity-90">
        {{ selectedAnimal === 'cat' ? '✨' : '🎉' }}
      </div>
    </div>
    <div class="">
      <PetImage class="mx-auto animate-bounceIn delay-600" :animal="selectedAnimal" />
    </div>
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
