/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'custom': ['"Gloria Hallelujah"', 'cursive'],
            },
            keyframes: {
                omori: {
                    '0%': { transform: 'translate(0, 0) scale(1)' },
                    '10%': { transform: 'translate(-1px, 1px) scale(1.01)' },
                    '20%': { transform: 'translate(1px, -1px) scale(0.99)' },
                    '30%': { transform: 'translate(0.5px, 1px) scale(1)' },
                    '40%': { transform: 'translate(-1px, -1px) scale(1.01)' },
                    '50%': { transform: 'translate(1px, 0.5px) scale(1)' },
                    '60%': { transform: 'translate(-0.5px, -1px) scale(0.98)' },
                    '70%': { transform: 'translate(1px, 1px) scale(1)' },
                    '80%': { transform: 'translate(0, 0) scale(1)' },
                    '100%': { transform: 'translate(0, 0) scale(1)' },
                },
            },
            animation: {
                omori: 'omori 5s steps(2) infinite',
            },
        },
    },
    plugins: [],
}
