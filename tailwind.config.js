/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        paper: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
        },
        ink: {
          DEFAULT: '#1c1917',
          muted: '#78716c',
          light: '#a8a29e',
        },
        moss: {
          DEFAULT: '#274e37',
          dark: '#1c3827',
          light: '#f2f7f4',
          border: '#cce2d5',
          accent: '#2f6846',
        }
      }
    },
  },
  plugins: [],
}
