/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Outfit', 'sans-serif'],
            },
            colors: {
                primary: {
                    50: '#eef2ff',
                    100: '#e0e7ff',
                    200: '#c7d2fe',
                    300: '#a5b4fc',
                    400: '#818cf8',
                    500: '#6366f1',
                    600: '#4f46e5',
                    700: '#4338ca',
                    800: '#3730a3',
                    900: '#312e81',
                },
                // M3 style surfaces
                surface: {
                    light: '#ffffff',
                    dark: '#141414',
                    variant: {
                        light: '#f3f4f6',
                        dark: '#1f1f1f',
                    }
                }
            },
            borderRadius: {
                '4xl': '2rem',
                '5xl': '2.5rem',
            },
            boxShadow: {
                'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
                'soft-lg': '0 10px 25px -5px rgba(0, 0, 0, 0.05)',
                'glow': '0 0 15px rgba(99, 102, 241, 0.5)',
            }
        },
    },
    plugins: [],
}
