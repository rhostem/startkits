module.exports = {
  // default config - https://unpkg.com/browse/tailwindcss@2.1.2/stubs/defaultConfig.stub.js
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
