import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: ['**.jsx'],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                dark: '#222222',
                secondaryDark: '#181818',
                darkLite: '#181818',
                pinkAccent: '#ff4191'
            }
        },
    },

    plugins: [forms],
};
