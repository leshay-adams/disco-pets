<template>
  <div class="flex flex-col sm:flex-row justify-center items-center gap-4 sm:space-x-6">
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
      const base = 'w-40 sm:w-auto text-base sm:text-lg px-6 py-3 rounded-full font-semibold transition duration-300 ease-in-out shadow-md border-2 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2'
      const colors = {
        cat: 'bg-purple-400 text-white border-transparent',
        dog: 'bg-fuchsia-400 text-white border-transparent'
      }
      const accent = animal === 'cat' ? 'border-purple-400 text-purple-400' : 'border-fuchsia-400 text-fuchsia-400'
      const isSelected = this.chosenPet === animal

      return isSelected ? `${base} ${colors[animal]} scale-110` : `${base} bg-transparent ${accent} scale-100`
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
