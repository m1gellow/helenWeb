import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	screens: {
		xs: "400px",
		sm: "640px",
		md: "768px",
		lg: "1024px",
		xl: "1220px",
		"2xl": "1440px",
		"3xl": "1700px",
	  },
	  container: {
		center: true,
		padding: "2rem",
		screens: {
		  "2xl": "1400px",
		},
	  },
  	extend: {
		fontFamily: {
			poppins: ["Poppins", "sans-serif"],
			roboto: ["Roboto", "sans-serif"],
		  },
  		colors: {
			primary: 'var(--primary-color)',
			black:{
				DEFAULT: "#000",
				100: "#0D1117",
				200: "#161B22",
				300: "#1F2428",
				400: "#242C38",
			},
			grey: {
				100: "#969BA5",
				200: "#55616D",
				500: "#33333"
			},
			white: {
				DEFAULT: "#FFF",
				400: "#A3B3BC",
				500: "#A4B8D5",
				800: "#D0DFFF",
			  },
			secondary: "var(--secondary)",
			accent: "var(--accent)",
			dark: "var(--dark)",
			banal: "var(--text-base)",
			vk: "var(--vk-color)",
			tg: "var(--tg-color)",
			inst: "var(--inst-color)",
			wats: "var(--whats-color)",

  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
