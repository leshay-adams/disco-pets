module.exports = {
  purge: ['./src/**/*.vue', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif']
      },
      colors: {
        petPink: '#f4a7c9',
        petPurple: '#8a4fff',
        petYellow: '#fff769',
        petBlue: '#6dd4ff',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' }
        },
        fadeIn: {
          '0%': { opacity: 0, transform: 'scale(0.95)' },
          '100%': { opacity: 1, transform: 'scale(1)' }
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        fadeIn: 'fadeIn 0.4s ease-out forwards'
      }
    }
  },
  variants: {},
  plugins: []
}
