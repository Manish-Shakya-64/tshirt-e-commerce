/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': 'var(--background-primary)',
        'bg-secondary': 'var(--background-secondary)',
        'hover-bg': 'var(--hover-bg)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-ternary': 'var(--text-ternary)',
        'icon-color': 'var(--icon-color)',
        'hover-link': 'var(--hover-link)',
        'container-bg': 'var(--container-bg)',
        'button-hover': 'var(--button-hover-bg)',
        'orange' : 'var(--color-orange)',
        'mehndi':'var(--color-mehndi)',
      },
    },
  },
  plugins: [],
};
