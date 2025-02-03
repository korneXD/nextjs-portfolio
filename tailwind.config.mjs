/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {},
      fontFamily: {
        nohemi: "var(--nohemi)",
        nohemiLight: "var(--nohemi-light)",
        cubano: "cubano",
      },
    },
  },
  plugins: [],
};
