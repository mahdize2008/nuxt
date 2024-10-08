/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./config/**/*.css",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1170px',
    },
    container: {
      center: true,
    },
    colors: {
      transparent: 'transparent',


      white: 'rgb(var(--color-white) / <alpha-value>)',
      black: 'rgb(var(--color-black) / <alpha-value>)',


      primary: 'rgb(var(--color-primary) / <alpha-value>)',


      'secondary': 'rgb(var(--color-secondary) / <alpha-value>)',


      success: 'rgb(var(--color-success) / <alpha-value>)',
      
      'natural': 'rgb(var(--color-natural) / <alpha-value>)',
      'natural-alpha': 'rgb(var(--color-natural-alpha) / <alpha-value>)',
      'natural-beta': 'rgb(var(--color-natural-beta) / <alpha-value>)'
    },
    fontSize: {
      '4xs': '8px',
      '3xs': '10px',
      '2xs': '11px',
      xs: '12px',
      'xs-plus': '13px',
      sm: '14px',
      'sm-plus': '15px',
      base: '16px',
      md: '18px',
      lg: '20px',
      xl: '22px',
      '2xl': '24px',
      '3xl': '26px',
      '4xl': '28px',
      '5xl': '30px',
      '6xl': '32px',
      '7xl': '34px',
      '8xl': '36px',
      '9xl': '38px',
      '10xl': '40px',
      '15xl': '50px',
      '25xl': '70px',
    },
    borderRadius: {
      'none': '0',
      DEFAULT: '1px',
      'xs': '2px',
      'sm': '4px',
      'md': '6px',
      'lg': '8px',
      'xl': '10px',
      '2xl': '12px',
      '3xl': '14px',
      '4xl': '16px',
      '11xl': '30px',
      'full': '9999px',
    },
    boxShadow: {
      'hover': '0px 15px 60px 0px #E5E6F3',
      'lighter': '0px 11.197px 31.631px 0px rgba(53, 57, 94, 0.10), 0px 2.799px 0px 0px #E8E9F0',
    },
    extend: {
      backgroundImage: {
        'success-gradient': "linear-gradient(250deg, #0AC624 26.31%, #00ACB7 98.09%)",
        'lighter-gradient': "linear-gradient(180deg, #F9F9FF 0%, #FFF 100%)",
        'single-game-gradient': "radial-gradient(51.62% 95.32% at 41.98% 8.16%, rgba(46, 50, 88, 0.26) 0%, #1A1E3D 100%)",
      }
    }
  },
  plugins: [],
}

