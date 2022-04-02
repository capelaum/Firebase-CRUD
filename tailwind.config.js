module.exports = {
  mode: 'jit',
  content: ['./src/components/**/*.tsx', './src/pages/**/*.tsx'],
  theme: {
    extend: {
      backgroundImage: {
        'bg-moon': "url('@public/images/bobba.png')"
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
