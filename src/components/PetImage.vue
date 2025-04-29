<template>
  <div>
    <div v-if="loading">Loading...</div>
    <img v-else :src="imageUrl" />
  </div>
</template>

<script>
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
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          this.fetchImage(newVal)
        }
      }
    }
  },
  methods: {
    async fetchImage(animal) {
      this.loading = true
      this.imgUrl = ''
      try {
        if (animal === 'cat') {
          const res = await fetch('https://api.thecatapi.com/v1/images/search')
          const data = await res.json()
          this.imageUrl = data[0].url
        } else if (animal === 'dog') {
          const res = await fetch('https://dog.ceo/api/breeds/image/random')
          const data = await res.json()
          this.imageUrl = data.message
        }
      } catch (e) {
        console.error('Error fetching image', e)
      } finally {
        this.loading = false
      }
    }
  }
}
</script>
