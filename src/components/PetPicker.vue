<template>
  <div>
    <button @click="updateChosenPet('cat')">
      Cat
    </button>
    <button @click="updateChosenPet('dog')">
      Dog
    </button>
  </div>
</template>

<script>
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
    },
  }
}
</script>