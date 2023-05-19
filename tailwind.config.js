/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
		container: {
			center: true,
			screens: {
				sm: "600px",
				md: "728px",
				lg: "984px",
				xl: "1240px",
				"2xl": "1496px",
			},
			padding: {
				DEFAULT: "1rem",
				sm: "2rem",
				md: "3rem",
				lg: "4rem",
				xl: "5rem",
				"2xl": "6rem",
			},
		},
	},
	plugins: [],
}
