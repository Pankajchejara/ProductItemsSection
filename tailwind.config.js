/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        'xs': '250px',  // Custom breakpoint for 250px screens
        'sm': '640px',  // Small screens (default)
        'md': '768px',  // Medium screens (default)
        'lg': '1024px', // Large screens (default)
        'xl': '1280px', // Extra large screens (default)
        '2xl': '1536px', // 2XL screens (default)
      },
    },
  },
  plugins: [],
};
