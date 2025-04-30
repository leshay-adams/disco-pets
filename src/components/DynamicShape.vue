<template>
  <div :style="{
    width: `${size}rem`,
    height: `${size}rem`,
    top: top,
    left: left,
    transform: `rotate(${rotate}deg)`,
    backgroundColor: resolveColor(color)
  }" :class="[
      'absolute',
      'rounded-full opacity-75 animate-float shadow-md'
    ]"></div>
</template>

<script>
export default {
  props: {
    color: { type: String, default: 'petYellow' },
    size: { type: Number, default: 3 },
    top: { type: String, default: '20%' },
    left: { type: String, default: '70%' },
    rotate: { type: Number, default: 45 }
  },
  methods: {
    resolveColor(color) {
      const colors = {
        petPink: '#f4a7c9',
        petPurple: '#8a4fff',
        petYellow: '#fff769',
        petBlue: '#6dd4ff',
      }

      return colors[color] || color
    }
  }
}
</script>