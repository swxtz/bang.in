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
				"green": {
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
				cream: {
					100: "#fffff8",
					200: "#fffff1",
					300: "#ffffeb",
					400: "#ffffe4",
					500: "#ffffdd",
					600: "#ccccb1",
					700: "#999985",
					800: "#666658",
					900: "#33332c",
				},

			},
		},
	},
	plugins: [],
};
export default config;
