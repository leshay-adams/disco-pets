<template>
  <div class="flex flex-col sm:flex-row justify-center xl:justify-start items-center gap-4 sm:space-x-6">
    <button @click="updateChosenPet('cat')" :class="buttonClass('cat')">
      🐱 Cat
    </button>
    <button @click="updateChosenPet('dog')" :class="buttonClass('dog')">
      🐶 Dog
    </button>
  </div>
</template>

<script>
import storage from '../classes/local-storage'

export default {
  props: {
    chosenPet: {
      type: String,
      required: true
    }
  },
  methods: {
    updateChosenPet(animal) {
      this.$emit('update:chosenPet', animal)
      storage.set('selectedAnimal', animal)
    },
    buttonClass(animal) {
      const base =
        'w-40 sm:w-auto text-base sm:text-lg lg:text-2xl px-6 py-3 lg:px-8 lg:py-5 rounded-full font-semibold transition duration-300 ease-in-out shadow-md border-2 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2'

      const isSelected = this.chosenPet === animal

      const focusRings = {
        cat: 'focus:ring-brand-secondary focus:ring-offset-brand-secondary',
        dog: 'focus:ring-brand-highlight focus:ring-offset-brand-highlight'
      }

      const selectedColors = {
        cat: 'bg-brand-secondary text-white border-transparent',
        dog: 'bg-brand-highlight text-indigo-950 border-transparent'
      }

      const defaultColors = {
        cat: 'bg-transparent border-brand-secondary text-brand-secondary hover:bg-indigo-100',
        dog: 'bg-transparent border-brand-highlight text-brand-highlight hover:bg-indigo-100'
      }

      return isSelected
        ? `${base} ${selectedColors[animal]} ${focusRings[animal]} scale-110`
        : `${base} ${defaultColors[animal]} ${focusRings[animal]} scale-100`
    }
  },
  created() {
    const chosenAnimal = storage.get('selectedAnimal')
    if (chosenAnimal) {
      this.$emit('update:chosenPet', chosenAnimal)
    }
  }
}
</script>
