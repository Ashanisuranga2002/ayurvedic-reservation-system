
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        maroon: {
          50: '#FFF8F5',
          100: '#FFE8E0',
          200: '#FFD1C1',
          300: '#FFAA8F',
          400: '#FF7A5C',
          500: '#D4634D',
          600: '#A84D3D',
          700: '#7D2E2E',
          800: '#5C1F1F',
          900: '#3D1414',
        },
        saffron: {
          50: '#FFFBF5',
          100: '#FFF4E0',
          200: '#FFE8C1',
          300: '#FFD89F',
          400: '#FFC670',
          500: '#F4A460',
          600: '#E8934A',
          700: '#D4813D',
          800: '#B86F33',
          900: '#8B5425',
        },
        cream: '#FFF8F0',
        navy: '#0A1628',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
