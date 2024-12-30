/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,scss}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      custom: "1366px",
    },
    colors: {
      transparent: "transparent",
      "yn-color1": "#FFFFFF",
      "yn-color2": "#F2F2F2",
      "yn-color3": "#E0E0E0",
      "yn-color4": "#F35324",
      "yn-color5": "#008EE2",
      "yn-color6": "#4C4C4C",
      "yn-color7": "#262626",
      "yn-color8": "#0F0F0F",
      "yn-color9": "#1E3C74",
      "yn-color10": "rgba(243, 83, 36, 0.05)",
      "yn-bg": "#EAEEF2",
    },
    extend: {
      backgroundImage: {
        "custom-gradient": "linear-gradient(90deg, #6030BA 0%, #F35324 100%);",
        "box-gradient": "linear-gradient(241deg, rgba(116, 35, 164, 0.80) 4.45%, rgba(30, 60, 116, 0.80) 80.91%)",
      },
      fontFamily: {
        kumbh: ["Kumbh Sans", "sans-serif"],
      },
      fontSize: {
        h1: ["51px", { lineHeight: "1.2" }],
        h2: ["41px", { lineHeight: "1.2" }],
        h3: ["28px", { lineHeight: "1.2" }],
        h4: ["21px", { lineHeight: "1.2" }],
        h5: ["16px", { lineHeight: "1.2" }],
        h6: ["13px", { lineHeight: "1.2" }],
        subtitle1: ["16px", { lineHeight: "1.4" }],
        subtitle2: ["14px", { lineHeight: "1.4" }],
        subtitle3: ["12px", { lineHeight: "1.4" }],
        subtitle4: ["10px", { lineHeight: "1.4" }],
        body1: ["16px", { lineHeight: "1.5" }],
        body2: ["14px", { lineHeight: "1.5" }],
        body3: ["12px", { lineHeight: "1.5" }],
        body4: ["10px", { lineHeight: "1.5" }],
        body5: ["18px", { lineHeight: "1.5" }],
        button1: ["16px", { lineHeight: "1.2" }],
        button2: ["14px", { lineHeight: "1.2" }],
        button3: ["12px", { lineHeight: "1.2" }],
        caption: ["12px", { lineHeight: "1.4" }],
        overline: ["10px", { lineHeight: "1.4", letterSpacing: "0.05em" }],
      },
      fontWeight: {
        light: 300,
        regular: 400,
        medium: 500,
        bold: 700,
        extrabold: 800,
      },
      container: {
        "yn-container": {
          center: true,
          padding: {
            DEFAULT: "1rem", // 16px
            sm: "2rem", // 32px
            lg: "3rem", // 64px
            xl: "4rem", // 80px
            "2xl": "6rem", // 96px
          },
          screens: {
            sm: "640px",
            md: "768px",
            lg: "1124px",
            xl: "1280px",
            "2xl": "1440px",
          },
        },
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".yn-container": {
          maxWidth: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          "@screen sm": {
            maxWidth: "640px",
            paddingLeft: "2rem",
            paddingRight: "2rem",
          },
          "@screen md": {
            maxWidth: "768px",
          },
          "@screen lg": {
            maxWidth: "1124px",
            paddingLeft: "3rem",
            paddingRight: "3rem",
          },
          "@screen xl": {
            maxWidth: "1230px",
            paddingLeft: "5rem",
            paddingRight: "5rem",
          },
          "@screen 2xl": {
            maxWidth: "1220px",
            paddingLeft: "6rem",
            paddingRight: "6rem",
          },
        },
      });
    },
  ],
};
