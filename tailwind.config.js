/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FFF9E6',
          100: '#FFF3CC',
          200: '#FFE799',
          300: '#FFDB66',
          400: '#FFCF33',
          500: '#FFC300',
          600: '#D4A017',
          700: '#A67C00',
          800: '#7A5C00',
          900: '#4D3A00',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
        elegant: ['"Cormorant Garamond"', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 3s linear infinite',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          'from': { boxShadow: '0 0 20px rgba(255, 195, 0, 0.3)' },
          'to': { boxShadow: '0 0 40px rgba(255, 195, 0, 0.8)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        pulseGold: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #FFC300, #FFD700, #FFC300)',
        'gold-shimmer': 'linear-gradient(90deg, #996515, #FFD700, #FFC300, #FFD700, #996515)',
        'dark-radial': 'radial-gradient(ellipse at center, #1a1a2e 0%, #0a0a0a 100%)',
      },
    },
  },
  plugins: [],
}
