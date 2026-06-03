import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#061421",
        navyDeep: "#020B13",
        brandBlue: "#004EA8",
        blueHover: "#0062C8",
        dataTeal: "#075F63",
        accentGold: "#A9852A",
        ink: "#0B1220",
        muted: "#5F6875",
        platinum: "#D7DCE2",
        line: "#EEF1F4",
        borderSoft: "#DDE2E8",
        warm: "#F7F8FA",
        pearl: "#F7F5F0",
      },
      fontFamily: {
        sans: ['"Helvetica Neue"', '"Hiragino Sans"', '"Yu Gothic"', "Meiryo", "sans-serif"],
        serif: ['"Times New Roman"', '"Yu Mincho"', '"Hiragino Mincho ProN"', "serif"],
      },
      boxShadow: {
        quiet: "0 8px 24px rgba(6,20,33,.08)",
        lift: "0 18px 44px rgba(6,20,33,.14)",
      },
    },
  },
  plugins: [],
} satisfies Config;
