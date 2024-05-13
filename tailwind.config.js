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


      success: 'rgb(var(--color-success) / <alpha-value>)',
      'success-alpha': 'rgb(var(--color-success-alpha) / <alpha-value>)',

      warning: 'rgb(var(--color-warning) / <alpha-value>)',

      danger: 'rgb(var(--color-danger) / <alpha-value>)',
      'danger-alpha': 'rgb(var(--color-danger-alpha) / <alpha-value>)',

    },
    fontSize: {
      xs: '12px',
      sm: '14px',
      base: '16px',
      md: '18px',
      lg: '20px',
      xl: '22px',
    },
    extend: {
      backgroundImage: {
        'success-gradient': "linear-gradient(250deg, #0AC624 26.31%, #00ACB7 98.09%)",
      }
    }
  },
  plugins: [],
}

