<template>
  <div class="flex justify-center space-x-6">
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
      const colors = {
        cat: 'bg-purple-400 text-white border-transparent',
        dog: 'bg-fuchsia-400 text-white border-transparent'
      }
      const accent = animal === 'cat' ? 'border-purple-400 text-purple-400' : 'border-fuchsia-400 text-fuchsia-400'
      const isSelected = this.chosenPet === animal

      return [
        'px-8 py-3 rounded-full font-semibold transition duration-300 ease-in-out shadow-md border-2 transform',
        isSelected ? colors[animal] + ' scale-110' : 'bg-transparent ' + accent + ' scale-100'
      ]
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
