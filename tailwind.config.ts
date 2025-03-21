// tailwind.config.js
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                carousel: 'carousel 30s linear infinite',
            },
            keyframes: {
                carousel: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
            },
        },
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
    ],
}
