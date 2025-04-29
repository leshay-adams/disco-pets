<template>
  <div>
    <div v-if="loading">Loading...</div>
    <img v-else :src="imageUrl" />
  </div>
</template>

<script>
import httpClient from '../classes/httpClient'

export default {
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
        if (!newVal) return;
        this.loading = true;
        try {
          this.imageUrl = await httpClient.getPetImage(newVal)
        } catch (e) {
          console.log('please try again'. e)
        } finally {
          this.loading = false;
        }
      }
    }
  }
}
</script>
