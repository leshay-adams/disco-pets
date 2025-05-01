module.exports = {
  purge: ['./src/**/*.vue', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif']
      },
      colors: {
        'brand-primary': '#8a4fff',
        'brand-secondary': '#f4a7c9',
        'brand-highlight': '#fff769',
        'brand-accent': '#6dd4ff',
        'brand-subtitle': '#E0FFFF'
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
