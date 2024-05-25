/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    darkMode: 'class',
    theme: {
        container: {
            center: true,
            padding: '1rem',
        },
        extend: {
            fontFamily: {
                sans: "IRANSansX, serif",
                icomoon: 'icomoon',
            },
            colors: {
                gray: {
                    50:    'rgb(var(--theme-gray-50), <alpha-value>)',
                    100:   'rgb(var(--theme-gray-100), <alpha-value>)',
                    200:   'rgb(var(--theme-gray-200), <alpha-value>)',
                    300:   'rgb(var(--theme-gray-300), <alpha-value>)',
                    400:   'rgb(var(--theme-gray-400), <alpha-value>)',
                    500:   'rgb(var(--theme-gray-500), <alpha-value>)',
                    600:   'rgb(var(--theme-gray-600), <alpha-value>)',
                    700:   'rgb(var(--theme-gray-700), <alpha-value>)',
                    800:   'rgb(var(--theme-gray-800), <alpha-value>)',
                    900:   'rgb(var(--theme-gray-900), <alpha-value>)',
                },
                primary: {
                    50:    'rgb(var(--theme-primary-50), <alpha-value>)',
                    100:   'rgb(var(--theme-primary-100), <alpha-value>)',
                    200:   'rgb(var(--theme-primary-200), <alpha-value>)',
                    300:   'rgb(var(--theme-primary-300), <alpha-value>)',
                    400:   'rgb(var(--theme-primary-400), <alpha-value>)',
                    500:   'rgb(var(--theme-primary-500), <alpha-value>)',
                    600:   'rgb(var(--theme-primary-600), <alpha-value>)',
                    700:   'rgb(var(--theme-primary-700), <alpha-value>)',
                    800:   'rgb(var(--theme-primary-800), <alpha-value>)',
                    900:   'rgb(var(--theme-primary-900), <alpha-value>)',
                },
            },
            screens: {
                'xs': '475px',
                ...defaultTheme.screens,
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('tailwind-scrollbar'),
    ],
}

