import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				"vs-green": {
					100: "#cce1e2",
					200: "#99c3c6",
					300: "#67a6a9",
					400: "#34888d",
					500: "#016a70",
					600: "#01555a",
					700: "#014043",
					800: "#002a2d",
					900: "#001516",
				},
			},
		},
	},
	plugins: [],
};
export default config;
