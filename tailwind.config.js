module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    screens: {
      'sm': '454px',
      'sm-md': '536px',
      'md-sm': '715px',
      'md': '768px',
      'md-lg': '976px',
      'lg': '1280px',
      'xl': '1440px',
      '2xl': '1920px',
    },
    extend: {
      fontFamily: {
        'primary': "'Kumbh Sans', Sans-Serif"
      },
      colors: {
        transparent: 'transparent',
        currentColor: 'currentColor',
        'primary': 'hsl(26, 100%, 55%)',
        'primary-light': 'hsl(25, 100%, 94%)',
        'vark-blue': 'hsl(220, 13%, 13%)',
        'dark-gray-blue': 'hsl(219, 9%, 45%)',
        'gray-blue': 'hsl(220, 14%, 75%)',
        'light-gray-blue': 'hsl(223, 64%, 98%)',
        'black': 'hsl(0, 0%, 0%, 75%)'
      },
      gridTemplateColumns: {
        'main-lg': 'repeat(4, 1fr) repeat(3, min-content)'
      }
    },
  },
  plugins: [],
}