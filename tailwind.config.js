/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#0f172a",
                secondary: "#d4af37",
                accent: "#3b82f6",
                "text-light": "#f8fafc",
                "text-dark": "#1e293b",
                "text-gray": "#64748b",
                "bg-light": "#ffffff",
                "bg-off-white": "#f1f5f9",
            },
            fontFamily: {
                body: ['Roboto', 'sans-serif'],
                heading: ['Roboto', 'sans-serif'], // Or Playfair Display if we decide to use it
            },
            container: {
                center: true,
                padding: '2rem',
                screens: {
                    lg: '1200px',
                },
            },
        },
    },
    plugins: [],
}
