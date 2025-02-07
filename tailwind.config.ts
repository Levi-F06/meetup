import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        logo: "Moirai One",
        reg: "Dosis",
      },
      colors: {
        black: "#191919",
        dgrey: "#CED0CE",
        lgrey: "#E6E8E6",
        white: "#FFFFFF",
        orange: "#F15025",
      },
    },
  },
} satisfies Config;
