import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Warm cream canvas
        cream: {
          DEFAULT: "#FBF4EA",
          50: "#FEFBF6",
          100: "#FBF4EA",
          200: "#F5E8D6",
        },
        ink: {
          DEFAULT: "#33261F",
          soft: "#5A4A42",
          muted: "#8A7A70",
        },
        // Terracotta / coral — primary warm
        clay: {
          50: "#FBEDE6",
          100: "#F6D8C8",
          200: "#EFB49A",
          300: "#E79370",
          400: "#DE7550",
          500: "#D25F3A",
          600: "#B84A28",
          700: "#933A20",
        },
        // Sunny gold / mustard
        marigold: {
          50: "#FDF3DC",
          100: "#FAE6B4",
          200: "#F4CF75",
          300: "#EDBB47",
          400: "#E2A426",
          500: "#C68717",
        },
        // Sage / teal — calming
        sage: {
          50: "#EAF2ED",
          100: "#CFE2D6",
          200: "#A3C8B1",
          300: "#74A98A",
          400: "#4F8C6B",
          500: "#3B7255",
          600: "#2E5A44",
        },
        // Deep berry / plum — "badass" depth
        berry: {
          50: "#F6E7EE",
          100: "#EAC6D6",
          200: "#D08FAC",
          300: "#B15A82",
          400: "#8E3D63",
          500: "#6F2C4C",
          600: "#551F39",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        blob: "42% 58% 63% 37% / 41% 44% 56% 59%",
      },
      boxShadow: {
        soft: "0 18px 50px -20px rgba(51, 38, 31, 0.28)",
        lift: "0 30px 70px -30px rgba(51, 38, 31, 0.4)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        float: "float 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
