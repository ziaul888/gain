/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		screens: {
			figma: "425px",
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
		},
		container: {
			center: true,
			padding: {
				DEFAULT: "1rem",
				sm: "2rem",
				lg: "4rem",
				xl: "5rem",
				"2xl": "6rem",
			},
		},
		extend: {
			colors: {
				primary: "rgba(var(--color-primary), <alpha-value>)",
				title: "rgba(var(--color-title), <alpha-value>)",
				text: "rgba(var(--color-text), <alpha-value>)",
				body: "rgba(var(--color-body), <alpha-value>)",
				section: "rgba(var(--color-section), <alpha-value>)",
				card: "rgba(var(--color-card), <alpha-value>)",
				stroke1: "rgba(var(--color-stroke1), <alpha-value>)",
				stroke2: "rgba(var(--color-stroke2), <alpha-value>)",
				tabColor: "rgba(var(--color-tabColor), <alpha-value>)",

				success: {
					100: "#66DDB3",
					500: "#00C781",
					600: "#00B374",
				},
				warning: {
					100: "#FFD688",
					500: "#FFBB38",
					600: "#E6A832",
				},
				danger: {
					100: "#FF8C8C",
					500: "#FF4040",
					600: "#C33",
				},
				info: {
					100: "#C5D6FB",
					500: "#3C76F1",
					600: "#366AD9",
				},
				neutral: {
					100: "#FCFCFC",
				},
			},
			backgroundImage: {},
			fontFamily: {
				inter: ["'Inter'", "sans-serif"],
			},
			fontSize: {
				xs: ["12px", { lineHeight: "20px" }],
				sm: ["13px", { lineHeight: "22px" }],
				normal: ["14px", { lineHeight: "24px" }],
				md: ["16px", { lineHeight: "26px" }],
				lg: ["18px", { lineHeight: "28px" }],
				xl: ["20px", { lineHeight: "30px" }],
			},
			boxShadow: {
				soft: "0px 1px 10px 0px rgba(0, 0, 0, 0.05)",
				medium: "0px 1px 20px 0px rgba(0, 0, 0, 0.05)",
				strong:
					"0px 5px 10px 0px rgba(0, 0, 0, 0.15), 0px 10px 35px -4px rgba(0, 0, 0, 0.15)",
				card: "0px 2px 5px 0px rgba(0, 0, 0, 0.09)",
				header: "0px -1px 15px 0px rgba(0, 0, 0, 0.10)",
			},
			borderRadius: {
				card: "10px",
			},
		},
	},
	darkMode: "class",
	plugins: [],
};
