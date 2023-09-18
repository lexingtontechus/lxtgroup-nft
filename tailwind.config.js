const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      stone: colors.stone,
      teal: colors.teal,
      neutral: colors.blue,
      red: colors.red,
      blue: colors.blue,
      sky: colors.sky,
      emerald: colors.emerald,
      indigo: colors.indigo,
    },
    extend: {
      minHeight: {
        "screen-75": "75vh",
      },
      fontSize: {
        55: "55rem",
      },
      opacity: {
        80: ".8",
      },
      zIndex: {
        2: 2,
        3: 3,
      },
      height: {
        "95-px": "95px",
        "70-px": "70px",
        "350-px": "350px",
        "500-px": "500px",
        "600-px": "600px",
      },
      maxHeight: {
        "860-px": "860px",
      },
      maxWidth: {
        "100-px": "100px",
        "120-px": "120px",
        "150-px": "150px",
        "180-px": "180px",
        "200-px": "200px",
        "210-px": "210px",
        "580-px": "580px",
      },
      minWidth: {
        "140-px": "140px",
        48: "12rem",
      },
      backgroundSize: {
        full: "100%",
      },
    },
  },
  variants: [
    "responsive",
    "group-hover",
    "focus-within",
    "first",
    "last",
    "odd",
    "even",
    "hover",
    "focus",
    "active",
    "visited",
    "disabled",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "autumn",
      "business",
      {
        lxtgroup: {
          primary: "#8c0327",
          "primary-focus": "",
          "primary-content": "",
          secondary: "#d75050",
          "secondary-focus": "",
          "secondary-content": "",
          accent: "#d59b6c",
          neutral: "#836b5d",
          "base-100": "#f2f2f2",
          "base-200": "#f2f2f2",
          info: "#42aebd",
          success: "#489380",
          warning: "#eb8014",
          error: "#e01a2e",
        },
      },
    ],
  },
};
