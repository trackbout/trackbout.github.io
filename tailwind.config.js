export default {
  mode: 'jit',
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  plugins: [],
  theme: {
    screens: { xl: { max: '1400px' }, lg: { max: '1100px' }, md: { max: '800px' }, sm: { max: '500px' } },
    extend: {
      colors: { 'zinc-950': '#111113', 'zinc-850': '#1F1F22', 'zinc-750': '#323237', 'zinc-650': '#4A4A52', 'zinc-550': '#62626B', 'zinc-450': '#8B8B94', 'zinc-350': '#B9BCC1', 'zinc-250': '#DADCE2', 'zinc-150': '#ECEEF1' },
      animation: { 'gradient-x': 'gradient-x 4000ms ease infinite', 'gradient-y': 'gradient-y 4000ms ease infinite', 'gradient-br': 'gradient-br 4000ms ease infinite', 'gradient-bl': 'gradient-bl 4000ms ease infinite' },
      transitionProperty: { 'height': 'height' },
      keyframes: {
        'gradient-x': { '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'left center' }, '50%': { 'background-size': '200% 200%', 'background-position': 'right center' } },
        'gradient-y': { '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'top center' }, '50%': { 'background-size': '200% 200%', 'background-position': 'bottom center' } },
        'gradient-br': { '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'top left' }, '50%': { 'background-size': '200% 200%', 'background-position': 'bottom right' } },
        'gradient-bl': { '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'top right' }, '50%': { 'background-size': '200% 200%', 'background-position': 'bottom left' } }
      }
    }
  }
};
