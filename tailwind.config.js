/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
		'node_modules/flowbite-react/lib/esm/**/*.js'
	],
	theme: {
		extend: {},
		fontFamily: {
			Sodo__thin: ['Sodo_sans-thin', 'sans-serif'],
			Sodo__light: ['Sodo_sans-light', 'sans-serif'],
			Sodo__regular: ['Sodo_sans-regular', 'sans-serif'],
			Sodo__semibold: ['Sodo_sans-semibold', 'sans-serif'],
			Sodo__bold: ['Sodo_sans-bold', 'sans-serif'],
			Sodo__black: ['Sodo_sans-black', 'sans-serif']
		}
	},
	plugins: [require('daisyui'), require('flowbite/plugin')]
};
