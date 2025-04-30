<template>
  <div class="bg-slate-100">
    <div class="relative z-10 flex items-center justify-center p-4">
      <Disco v-model:selectedAnimal="selectedAnimal" />
    </div>
  </div>
</template>

<script>
import Disco from './views/Disco.vue'

export default {
  components: {
    Disco,
  },
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
  }
}
</script>
