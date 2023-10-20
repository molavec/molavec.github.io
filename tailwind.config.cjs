/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	// theme: {
	// 	colors: {
	// 		black: colors.black,
  //     white: colors.white,
	// 		saffron: {
	// 			DEFAULT: '#f5cb5c',
	// 			primary: '#f5cb5c',
	// 			secondary: '#efdaa1',
	// 		},
	// 		jet: {
	// 			DEFAULT: '#242423',
	// 			primary: '#242423',
	// 			secondary: '#333533',
	// 		},
	// 		platinum: {
	// 			DEFAULT: '#cfdbd5',
	// 			primary: '#cfdbd5',
	// 			secondary: '#e8eddf',
	// 		},
	// 		calipso: '#60739f',
	// 	},
	// 	extend: {},
	// },
	plugins: [],
}
