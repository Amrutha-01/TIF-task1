/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"], // Default sans-serif font
        mono: ["IBM Plex Mono", "monospace"], // Mono font
        poppins: ["Poppins", "sans-serif"], // Poppins font
        "source-sans": ["Source Sans 3", "sans-serif"],
      },
      colors: {
        primary: "#0E2368",
        body: "#444957",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(90.07deg, rgba(30, 42, 93, 0.04) 30.91%, rgba(48, 62, 130, 0.04) 64.79%, rgba(60, 80, 157, 0.04) 91.94%)",
      },
    },
  },
  plugins: [],
};
