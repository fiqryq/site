import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': "var(--background)",
        'primary': "var(--primary)"
      },
      fontFamily: {
        'ppmori-extralight': ['var(--font-ppmori-extralight)', 'sans-serif'],
        'ppmori-extralight-italic': ['var(--font-ppmori-extralight-italic)', 'sans-serif'],
        'ppmori-regular': ['var(--font-ppmori-regular)', 'sans-serif'],
        'ppmori-regular-italic': ['var(--font-ppmori-regular-italic)', 'sans-serif'],
        'ppmori-semi-bold': ['var(--font-ppmori-semi-bold)', 'sans-serif'],
        'ppmori-semi-bold-italic': ['var(--font-ppmori-semi-bold-italic)', 'sans-serif'],
      },
      keyframes: {
        "marquee-left": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-up": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
      },
      animation: {
        "marquee-left": "marquee-left var(--duration, 40s) linear infinite",
        "marquee-up": "marquee-up var(--duration, 40s) linear infinite",
      },
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require("tailwindcss-animate"),
  ],
};
export default config;
