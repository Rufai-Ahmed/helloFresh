import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        background: "url('../asset/hero.jpg')",
        burger: "url('../asset/burger.jpg')",
        market: "url('../asset/market.png')",
        marketMob: "url('../asset/marketMob.png')",
        heroMob: "url('../asset/heroMob.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
