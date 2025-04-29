<template>
  <div>
    <h2>Pick Your Grooving Buddy:</h2>
    <div>
      <PetPicker v-model:chosenPet="selectedAnimal" />
      <PetImage :animal="selectedAnimal" />
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
