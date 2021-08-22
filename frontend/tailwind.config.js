module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    //custom fonts
    fontFamily: {
      'dmserif': ['DM Serif Display', 'serif'],
      'dmsans': ['DM Sans', 'sans-serif'],
      'body': ['DM Sans', 'sans-serif'],
    },

    //custom colors
    colors: {
      blue:{
        light: '#55ACEE',
        dark: '#425C81',
      },
      black:{
        primary: '#020202'
      },
      white: {
        DEFAULT: '#FFFFFF',
      }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
