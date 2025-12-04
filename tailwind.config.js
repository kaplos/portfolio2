/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
        './pages/**/*.{js,jsx}',
        './components/**/*.{js,jsx}',
        './app/**/*.{js,jsx}',
        './src/**/*.{js,jsx}',
    ],
    theme: {
        extend: {
            colors: {
                // Sophisticated Theme - Navy, Gold & Grey
                primary: {
                    50: '#f8fafc',
                    100: '#f1f5f9',
                    200: '#e2e8f0',
                    300: '#cbd5e1',
                    400: '#94a3b8',
                    500: '#64748b',
                    600: '#475569',
                    700: '#334155',
                    800: '#1e293b', // Main primary - Deep navy
                    900: '#0f172a',
                    950: '#020617',
                },
                accent: {
                    50: '#fafafa',
                    100: '#f4f4f5',
                    200: '#e4e4e7',
                    300: '#d4d4d8',
                    400: '#a1a1aa',
                    500: '#71717a',
                    600: '#52525b',
                    700: '#3f3f46',
                    800: '#27272a',
                    900: '#18181b',
                },
                elegant: {
                    50: '#fafaf9',
                    100: '#f5f5f4',
                    200: '#e7e5e4',
                    300: '#d6d3d1',
                    400: '#a8a29e',
                    500: '#78716c',
                    600: '#57534e',
                    700: '#44403c',
                    800: '#292524',
                    900: '#1c1917',
                },
                // Grey accent palette for sophisticated touches
                grey: {
                    50: '#f9fafb',
                    100: '#f3f4f6',
                    200: '#e5e7eb',
                    300: '#d1d5db',
                    400: '#9ca3af',
                    500: '#6b7280',
                    600: '#4b5563',
                    700: '#374151',
                    800: '#1f2937',
                    900: '#111827',
                    950: '#030712',
                },
                dark: {
                    50: '#fafafa',
                    100: '#f4f4f5',
                    200: '#e4e4e7',
                    300: '#d4d4d8',
                    400: '#a1a1aa',
                    500: '#71717a',
                    600: '#52525b',
                    700: '#3f3f46',
                    800: '#27272a',
                    900: '#18181b',
                    950: '#09090b', // Main dark background
                },
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
                serif: ['var(--font-playfair)', 'Georgia', 'serif'],
                playfair: ['var(--font-playfair)', 'Georgia', 'serif'],
            },
            fontSize: {
                'display-xl': ['5rem', { lineHeight: '1', fontWeight: '800' }],
                'display-lg': ['4rem', { lineHeight: '1', fontWeight: '800' }],
                'display-md': [
                    '3rem',
                    { lineHeight: '1.1', fontWeight: '700' },
                ],
                'display-sm': [
                    '2.5rem',
                    { lineHeight: '1.1', fontWeight: '700' },
                ],
            },
            boxShadow: {
                'glow-primary': '0 0 40px rgba(30, 41, 59, 0.4)',
                'glow-accent': '0 0 40px rgba(245, 158, 11, 0.3)',
                elegant: '0 10px 40px rgba(0, 0, 0, 0.2)',
                'elegant-lg': '0 20px 60px rgba(0, 0, 0, 0.3)',
            },
            animation: {
                shine: 'shine 14s linear infinite',
            },
            keyframes: {
                shine: {
                    '0%': { backgroundPosition: '0% 0%' },
                    '50%': { backgroundPosition: '50% 50%' },
                    '75%': { backgroundPosition: '100% 100%' },
                    '100%': { backgroundPosition: '0% 0%' },
                },
            },
        },
    },
    plugins: [require('tailwindcss-animate')],
}
