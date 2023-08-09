/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
    },
    colors: {
      purple: 'hsl(259, 100%, 65%)',
      light_red: 'hsl(0, 100%, 67%)',
      white: 'hsl(0, 0%, 100%)',
      off_white: 'hsl(0, 0%, 94%)',
      light_grey: 'hsl(0, 0%, 86%)',
      smokey_grey: 'hsl(0, 1%, 44%)',
      off_black: 'hsl(0, 0%, 8%)'
    },
    fontWeight: {
      normal: '400',
      heavy: '700',
      extra_heavy: '800'
    },
    screens: {
      desktop: '650px'
    }
  },
  plugins: [],
}
