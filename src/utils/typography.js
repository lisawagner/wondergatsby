import Typography from "typography";

const typography = new Typography({
  baseFontSize: "16px",
  googleFonts: [
    {
      name: "Shadows Into Light",
      styles: ["400", "700"],
    },
    {
      name: "Raleway",
      styles: ["400", "700"],
    },
  ],
  headerFontFamily: ["Shadows Into Light", "cursive"],
  bodyFontFamily: ["Raleway", "sans-serif"],
});

export default typography;
