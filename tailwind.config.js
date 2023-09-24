/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
      },
      spacing: {},
      fontFamily: {
        roboto: "Roboto",
        "m-plus-1": "'M PLUS 1'",
      },
    },
    fontSize: {
      "5xl": "24px",
      "21xl": "40px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
