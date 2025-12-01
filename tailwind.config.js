/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		keyframes: {
  			bounceSmall: {
  				'0%, 20%, 50%, 80%, 100%': {
  					transform: 'translateY(0)'
  				},
  				'40%': {
  					transform: 'translateY(-10px)'
  				},
  				'60%': {
  					transform: 'translateY(-2.5px)'
  				}
  			},
  			fadeIn: {
  				'0%': {
  					opacity: 0
  				},
  				'100%': {
  					opacity: 1
  				}
  			},
  			moveToCorner: {
  				'0%': {
  					top: '0',
  					left: '50%',
  					transform: 'translateX(-50%) scale(1) ',
  					zIndex: '50'
  				},
  				'50%': {
  					top: '50vh',
  					left: '75%',
  					transform: ' ',
  					zIndex: '50'
  				},
  				'90%': {
  					top: '90vh',
  					left: '85%',
  					transform: ' ',
  					zIndex: '50'
  				},
  				'100%': {
  					top: 'auto',
  					bottom: '1rem',
  					right: '1rem',
  					transform: 'translateX(0) scale(1)'
  				}
  			},
			shine: {
          '0%': { backgroundPosition: '0% 0%' },
          '50%': { backgroundPosition: '50% 50%' },
          '75%': { backgroundPosition: '100% 100%' },
          '100%': { backgroundPosition: '0% 0%' },
        },
  		},
  		animation: {
  			'bounce-small': 'bounceSmall 3s infinite',
  			'fade-in': 'fadeIn 2s ease-in-out',
  			'move-to-corner': 'moveToCorner 0.1s ease-in-out forwards',
			'shine': 'shine 14s linear infinite'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			backgroundColor: '#0f172a',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require('tailwind-scrollbar'), require("tailwindcss-animate")],
};
