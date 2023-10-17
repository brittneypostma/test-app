/** @type {import('tailwindcss').Config}*/
import { craftPlugin } from '@getprovi/craft/dist/tailwind/craft-plugin.js';
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: [craftPlugin]
};
