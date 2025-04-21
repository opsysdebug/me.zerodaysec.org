/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        // Custom color palette
        cyber: {
          blue: '#00c7ff',
          green: '#00ff9d',
          purple: '#7928ca',
          dark: '#0a101f',
        },
      },
      boxShadow: {
        glow: '0 0 15px 5px rgba(0, 199, 255, 0.3)',
      },
      animation: {
        'matrix-fall': 'matrix-fall 8s linear infinite',
        'glow-pulse': 'pulse-glow 2s infinite',
      },
      transitionDuration: {
        2000: '2000ms',
      },
    },
  },
  plugins: [],
};