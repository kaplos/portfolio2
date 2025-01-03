/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        bounceSmall: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-10px)' },
          '60%': { transform: 'translateY(-2.5px)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        moveToCorner: {
        '0%': { top: '0', left: '50%', transform: 'translateX(-50%) scale(1) ' ,zIndex:'50' },
          // '10%': { top: '10vh', left: '55%', transform: 'translateX(-50%) ' },
          // '20%': { top: '20vh', left: '60%', transform: 'translateX(-50%) ' },
          // '30%': { top: '30vh', left: '65%', transform: ' ' },
          // '40%': { top: '40vh', left: '70%', transform: ' ' },
          '50%': { top: '50vh', left: '75%', transform: ' ',zIndex:'50' },
          // '60%': { top: '60vh', left: '80%', transform: ' ' },
          // '70%': { top: '70vh', left: '85%', transform: ' ' },
          // '80%': { top: '80vh', left: '87%', transform: ' ' },
          '90%': { top: '90vh', left: '85%', transform: ' ' ,zIndex:'50'},
          '100%': { top: 'auto', bottom: '1rem', right: '1rem', transform: 'translateX(0) scale(1)' },
        },
        
      },
      animation: {
        'bounce-small': 'bounceSmall 3s infinite',
        'fade-in': 'fadeIn 2s ease-in-out',
        'move-to-corner': 'moveToCorner 0.1s ease-in-out forwards',

      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
