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
      'xl': '1200px',
      '2xl': '1420px',
    },
    container: {
      center: true,
    },
    colors: {
      transparent: 'transparent',


      white: 'rgb(var(--color-white) / <alpha-value>)',
      black: 'rgb(var(--color-black) / <alpha-value>)',


      primary: 'rgb(var(--color-primary) / <alpha-value>)',
      'primary-alpha': 'rgb(var(--color-primary-alpha) / <alpha-value>)',
      'primary-beta': 'rgb(var(--color-primary-beta) / <alpha-value>)',
      'primary-gamma': 'rgb(var(--color-primary-gamma) / <alpha-value>)',
      'primary-tetha': 'rgb(var(--color-primary-tetha) / <alpha-value>)',
      'primary-landa': 'rgb(var(--color-primary-landa) / <alpha-value>)',


      'secondary': 'rgb(var(--color-secondary) / <alpha-value>)',
      'secondary-alpha': 'rgb(var(--color-secondary-alpha) / <alpha-value>)',
      'secondary-light': 'rgb(var(--color-secondary-light) / <alpha-value>)',


      success: 'rgb(var(--color-success) / <alpha-value>)',
      'success-alpha': 'rgb(var(--color-success-alpha) / <alpha-value>)',
      'success-beta': 'rgb(var(--color-success-beta) / <alpha-value>)',

      warning: 'rgb(var(--color-warning) / <alpha-value>)',
      'warning-alpha': 'rgb(var(--color-warning-alpha) / <alpha-value>)',

      danger: 'rgb(var(--color-danger) / <alpha-value>)',
      'danger-alpha': 'rgb(var(--color-danger-alpha) / <alpha-value>)',

    },
    fontSize: {
      '4xs': '8px',
      '3xs': '10px',
      '2xs': '11px',
      xs: '12px',
      sm: '14px',
      base: '16px',
      md: '18px',
      lg: '20px',
      xl: '22px',
      '2xl': '24px',
      '3xl': '26px',
      '4xl': '28px',
      '5xl': '30px',
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

