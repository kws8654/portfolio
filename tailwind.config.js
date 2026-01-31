/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './styles/**/*.{css}'],
  theme: {
    extend: {},
    screens: {
      '2xl': { max: '1535px' },
      // => @media (max-width: 1535px) { ... }

      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      onlyxl: { min: '1279px' },

      lg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      onlylg: { min: '1023px' },

      md: { max: '767px' },
      // => @media (max-width: 767px) { ... }

      onlymd: { min: '767px' },

      sm: { max: '639px' },
      // => @media (max-width: 639px) { ... }

      minmd: { min: '767px' },

      minsm: { min: '639px' },
    },
  },
  darkMode: 'class',
  plugins: [],
};
