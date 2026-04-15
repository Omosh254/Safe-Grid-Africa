/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A1F44',
          light: '#132d5e',
          dark: '#060f22',
        },
        secondary: {
          DEFAULT: '#00AEEF',
          dark: '#0090cc',
          light: '#33c4f5',
        },
        accent: '#00F5A0',
        danger: {
          DEFAULT: '#FF3B3B',
          soft: '#FF6B6B',
          dark: '#c0392b',
        },
        warning: '#FF9A00',
        surface: {
          DEFAULT: '#0F2654',
          2: '#162d62',
          3: '#1a3570',
        },
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        sans: ['DM Sans', 'sans-serif'],
      },
      borderRadius: {
        xl: '20px',
        '2xl': '24px',
      },
      backdropBlur: {
        xs: '4px',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.2s ease-out',
        'slide-up': 'slideUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'pop-in': 'popIn 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)',
        shimmer: 'shimmer 1.5s infinite',
      },
      keyframes: {
        fadeIn: { from: { opacity: 0 }, to: { opacity: 1 } },
        slideUp: {
          from: { opacity: 0, transform: 'translateY(40px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        popIn: {
          from: { opacity: 0, transform: 'scale(0.85)' },
          to: { opacity: 1, transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
      },
    },
  },
  plugins: [],
};
