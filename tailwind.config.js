const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'blue-fusion': {
                    50: '#e6f0ff',
                    100: '#b3d1ff',
                    200: '#80b3ff',
                    300: '#4d94ff',
                    400: '#1a75ff',
                    500: '#0066CC', // Pantone 18-4218 Blue Fusion
                    600: '#0052a3',
                    700: '#003d7a',
                    800: '#002952',
                    900: '#001429',
                },
                'cloud-cover': {
                    50: '#fef6f4',
                    100: '#fde8e3',
                    200: '#fcd1c7',
                    300: '#fbb9ab',
                    400: '#f4a896', // Pantone 16-1523 Cloud Cover
                    500: '#f28f79',
                    600: '#ef745d',
                    700: '#ed5941',
                    800: '#ea3f25',
                    900: '#c82f16',
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
});
