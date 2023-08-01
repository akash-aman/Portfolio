module.exports = {
	darkMode: "class",
	mode: "jit",
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./layouts/**/*.{js,ts,jsx,tsx}",
		"./app/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			keyframes: {
				animatedgradient: {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' },
				},
			},
			backgroundSize: {
				'300%': '300%',
			},
			animation: {
				gradient: 'animatedgradient 6s ease infinite alternate',
			},
		},
		screens: {
			"xsm-h": { raw: "(min-height: 480px)" },
			"sm-h": { raw: "(min-height: 640px)" },
			"md-h": { raw: "(min-height: 768px)" },
			"lg-h": { raw: "(min-height: 1024px)" },
			"xl-h": { raw: "(min-height: 1280px)" },
			"2xl-h": { raw: "(min-height: 1536px)" },
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
		},
	},
	plugins: [],
};
