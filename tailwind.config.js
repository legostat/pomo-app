/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ['"Roboto Flex", sans-serif'],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      gray: {
        50: "#F2F2F2",
        100: "#E6E6E6",
        200: "#CCCCCC",
        300: "#B3B3B3",
        400: "#999999",
        500: "#808080",
        600: "#666666",
        700: "#4D4D4D",
        800: "#333333",
        900: "#1A1A1A",
        950: "#0D0D0D",
      },
      red: {
        50: "#FFF2F2",
        100: "#FFD9D9",
        200: "#FFB0B0",
        300: "#FF8F8F",
        400: "#FF6E6E",
        500: "#FF4C4C",
        600: "#D13F3F",
        700: "#A33131",
        800: "#752323",
        900: "#471515",
        950: "#0D0404",
      },
      green: {
        50: "#F2FFF5",
        100: "#D9FAE1",
        200: "#AAF0B9",
        300: "#89E89E",
        400: "#69E084",
        500: "#4DDA6C",
        600: "#3DB257",
        700: "#2E8C43",
        800: "#216630",
        900: "#14401D",
        950: "#040D06",
      },
      blue: {
        50: "#F2F9FF",
        100: "#D9EEFF",
        200: "#B0DAFF",
        300: "#8FCBFF",
        400: "#6EBBFF",
        500: "#4CACFF",
        600: "#3F8DD1",
        700: "#316EA3",
        800: "#234F75",
        900: "#153047",
        950: "#04090D",
      },
    },
    opacity: {
      0: "0",
      5: "0.05",
      10: "0.15",
      20: "0.24",
      30: "0.33",
      40: "0.43",
      50: "0.52",
      60: "0.62",
      70: "0.71",
      80: "0.81",
      90: "0.9",
      100: "1",
    },
    fontSize: {
      timer: [
        "256px",
        {
          lineHeight: "85%",
        },
      ],
      header: [
        "1.5rem",
        {
          lineHeight: "1.75rem",
          letterSpacing: "0.15px",
          fontWeight: "700",
        },
      ],
      label: [
        "1.5rem",
        {
          lineHeight: "1.75rem",
          fontWeight: "500",
        },
      ],
      base: [
        "1rem",
        {
          lineHeight: "19px",
          letterSpacing: "0.15px",
          fontWeight: "400",
        },
      ],
      sm: [
        "0.75rem",
        {
          lineHeight: "0.875rem",
          letterSpacing: "0.15px",
          fontWeight: "400",
        },
      ],
    },
    extend: {
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
