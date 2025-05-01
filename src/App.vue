<template>
  <div>
    <DynamicShape color="brand-accent" :size="5" top="5%" left="10%" />
    <DynamicShape color="brand-highlight" :size="4" top="80%" left="80%" />
    <DynamicShape color="brand-primary" :size="6" top="30%" left="75%" />
    <div class="h-screen relative z-10 flex items-center justify-center p-4">
      <Disco v-model:selectedAnimal="selectedAnimal" />
    </div>
  </div>
</template>

<script>
import Disco from './views/Disco.vue'
import DynamicShape from './components/DynamicShape.vue'

export default {
  components: {
    Disco,
    DynamicShape
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
  },
}
</script>
