
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        brand: {
          300: '#996DFF',
          500: '#8257e6'
        },
        black: {
          200: '#27272A'
        }
      },
      borderRadius: {
        md: '4px'
      }

    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require ( 'tailwind-scrollbar'), 
  ],
}