/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{html,js}", "./components/**/*.{html,js}"],
  theme: {
    extend: {},
    container: {
      center: true,
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1200px",
        // => @media (min-width: 1200px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1440px",
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
};
