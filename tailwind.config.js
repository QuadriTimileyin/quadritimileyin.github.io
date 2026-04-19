/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#08080a',
        surface: '#111113',
        elevated: '#18181b',
        accent: '#eb5d3a',
        'accent-hover': '#ff6e4a',
        'text-primary': '#f0f0f2',
        'text-secondary': '#8b8b8d',
        'text-muted': '#555557',
        border: '#222225',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        cursive: ['Pacifico', 'cursive'],
      },
      maxWidth: {
        container: '1200px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { opacity: '0.5' },
          '100%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
