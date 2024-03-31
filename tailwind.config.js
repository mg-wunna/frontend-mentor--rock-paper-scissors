/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          "scissors-gradient": {
            from: "hsl(39, 89%, 49%)",
            to: "hsl(40, 84%, 53%)",
          },
          "paper-gradient": {
            from: "hsl(230, 89%, 62%)",
            to: "hsl(230, 89%, 65%)",
          },
          "rock-gradient": {
            from: "hsl(349, 71%, 52%)",
            to: "hsl(349, 70%, 56%)",
          },
          "lizard-gradient": {
            from: "hsl(261, 73%, 60%)",
            to: "hsl(261, 72%, 63%)",
          },
          "cyan-gradient": {
            from: "hsl(189, 58%, 53%)",
            to: "hsl(189, 59%, 57%)",
          },
        },
        neutral: {
          "dark-text": "hsl(229, 25%, 31%)",
          "score-text": "hsl(229, 64%, 46%)",
          "header-outline": "hsl(217, 16%, 45%)",
        },
        background: {
          "radial-gradient": {
            from: "hsl(214, 47%, 23%)",
            to: "hsl(237, 49%, 15%)",
          },
        },
      },
      fontFamily: {
        "barlow-semi-condensed": ["barlow-semi-condensed"],
      },
    },
  },
  plugins: [],
};
