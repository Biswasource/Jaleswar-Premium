/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        jj: {
          orange: "#f75d34",
          "orange-hover": "#e24c23",
          "orange-light": "#fff2ed",
          dark: "#1e2229",
          slate: "#24272c",
          muted: "#757575",
          border: "#e5e7eb",
          card: "#f4f5f8",
        }
      },
      fontFamily: {
        sans: ['"Geist Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"Geist Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'card': '0 2px 12px rgba(0,0,0,0.06)',
        'float': '0 8px 30px rgba(0,0,0,0.12)',
        'dropdown': '0 10px 40px rgba(0,0,0,0.15)',
      }
    },
  },
  plugins: [],
}
