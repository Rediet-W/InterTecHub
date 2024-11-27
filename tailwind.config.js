/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "gebeya-purple": "rgba(136, 43, 236, 1)",
        "gebeya-orange": "rgba(254, 163, 1, 1)",
        "gebeya-gray": "rgba(242, 242, 242, 0.95)",
      },
    },
  },
  plugins: [],
};
