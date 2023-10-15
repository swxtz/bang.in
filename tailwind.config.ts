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
				green: {
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

				dark: {
					100: "#d3d4d6",
					200: "#a7a9ad",
					300: "#7a7e83",
					400: "#4e535a",
					500: "#222831",
					600: "#1b2027",
					700: "#14181d",
					800: "#0e1014",
					900: "#07080a",
				},
			},

			fontSize: {
				"2.5xl": "1.75rem"
			}
		},
	},
	plugins: [],
};
export default config;
