const plugin = require("tailwindcss/plugin");

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "nba-light": ["NBArchitektStd-Light", "san-serif"],
        "nba-reg": ["NBArchitektStd-Regular", "san-serif"],
        "nba-bold": ["NBArchitektStd-Bold", "san-serif"],
      },
      colors: {
        "primary-green": "#ED1C24",
        "primary-green-light": "rgba(0, 255, 139, 0.44)",
        "primary-green-trans": "rgba(2, 48, 25, 0.8)",
        "primary-black": "#140000",
        "secondary-black": "#03150C",
        "tertiary-white-t44": "rgba(255, 255, 255, 0.44)",
        "tertiary-white-t31": "rgba(255, 255, 255, 0.31)",
        "tertiary-grey-input": "#ced4d1"
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, theme }) {
      const defighter = {
        ".nba-light-16": {
          fontFamily: theme("fontFamily.nba-light"),
          fontStyle: "normal",
          fontWeight: "300",
          fontSize: "16px",
          // lineHeight: "24px",
        },
        ".nba-reg-16": {
          fontFamily: theme("fontFamily.nba-reg"),
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "16px",
          // lineHeight: "24px",
        },
        ".nba-bold-21": {
          fontFamily: theme("fontFamily.nba-bold"),
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "21px",
          // lineHeight: "24px",
        },
        ".nba-bold-24": {
          fontFamily: theme("fontFamily.nba-bold"),
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "24px",
          // lineHeight: "24px",
        },
        ".nba-bold-26": {
          fontFamily: theme("fontFamily.nba-bold"),
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "26px",
          // lineHeight: "24px",
        },
        ".nba-bold-32": {
          fontFamily: theme("fontFamily.nba-bold"),
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "32px",
          // lineHeight: "24px",
        },
        ".nba-bold-48": {
          fontFamily: theme("fontFamily.nba-bold"),
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "48px",
          // lineHeight: "24px",
        },

        ".dfTransition": {
          transition: "all 0.2s linear 0s",
        },
      };

      addUtilities(defighter, ["responsive"]);
    }),
  ],
};
