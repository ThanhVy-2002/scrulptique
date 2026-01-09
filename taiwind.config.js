module.exports = {
  content: [
    "./index.html",
    "./main/**/*.html",
    "./header/**/*.html",
    "./footer/**/*.html",
    "./**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        lora: ["Lora"],
        trirong: ["Trirong", "serif"],
      },
    },
  },
  plugins: [],
};
