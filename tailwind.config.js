module.exports = {
	mode: "jit",
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	plugins: [],
	theme: {
		fontFamily: {
			varela: "Varela Round",
		},
		extend: {
			colors: {
				main: {
					100: "#8baaff",
				},
			},
			backgroundImage: {
				gaoo: "url('~/public/images/gaoo.jpg')",
        blue: "url('~/public/images/rila-blue.jpg')",
			},
      spacing: {
        "112": "448px",
        "144": "576px",
        "192": "768px"
      }
		},
	},
};
