import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Toss Theme Colors
        toss: {
          primary: {
            blue: "#3182F6",
            blue_light: "#E8F3FF",
            blue_dark: "#1B64DA",
          },
          neutral: {
            black: "#191F28",
            gray_900: "#4E5968",
            gray_700: "#6B7684",
            gray_500: "#8B95A1",
            gray_300: "#B0B8C1",
            gray_100: "#F2F4F6",
            gray_50: "#F9FAFB",
            white: "#FFFFFF",
          },
          semantic: {
            success: "#40E0A7",
            warning: "#FFAA44",
            error: "#FF6B6B",
            info: "#3182F6",
          },
        },
        // Apple Theme Colors
        apple: {
          primary: {
            blue: "#007AFF",
            blue_light: "#E8F4FD",
            blue_dark: "#0056CC",
          },
          neutral: {
            black: "#1D1D1F",
            gray_900: "#424245",
            gray_700: "#86868B",
            gray_500: "#A1A1A6",
            gray_300: "#D2D2D7",
            gray_100: "#F5F5F7",
            gray_50: "#FBFBFD",
            white: "#FFFFFF",
          },
          semantic: {
            success: "#30D158",
            warning: "#FF9F0A",
            error: "#FF3B30",
            info: "#007AFF",
          },
        },
      },
      fontFamily: {
        toss: [
          "SUIT",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        apple: [
          "SF Pro Display",
          "SF Pro Icons",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      fontSize: {
        // Toss Typography
        "toss-display-xl": ["48px", { lineHeight: "1.2", fontWeight: "700" }],
        "toss-display-lg": ["40px", { lineHeight: "1.2", fontWeight: "700" }],
        "toss-display-md": ["32px", { lineHeight: "1.3", fontWeight: "600" }],
        "toss-heading-xl": ["28px", { lineHeight: "1.3", fontWeight: "600" }],
        "toss-heading-lg": ["24px", { lineHeight: "1.3", fontWeight: "600" }],
        "toss-heading-md": ["20px", { lineHeight: "1.4", fontWeight: "500" }],
        "toss-heading-sm": ["18px", { lineHeight: "1.4", fontWeight: "500" }],
        "toss-body-lg": ["16px", { lineHeight: "1.5", fontWeight: "400" }],
        "toss-body-md": ["14px", { lineHeight: "1.5", fontWeight: "400" }],
        "toss-body-sm": ["12px", { lineHeight: "1.5", fontWeight: "400" }],
        "toss-caption": ["11px", { lineHeight: "1.5", fontWeight: "400" }],

        // Apple Typography
        "apple-display-xl": [
          "56px",
          { lineHeight: "1.0833", fontWeight: "700" },
        ],
        "apple-display-lg": [
          "48px",
          { lineHeight: "1.0833", fontWeight: "700" },
        ],
        "apple-display-md": [
          "40px",
          { lineHeight: "1.1667", fontWeight: "600" },
        ],
        "apple-heading-xl": [
          "32px",
          { lineHeight: "1.1667", fontWeight: "600" },
        ],
        "apple-heading-lg": [
          "28px",
          { lineHeight: "1.1667", fontWeight: "600" },
        ],
        "apple-heading-md": [
          "24px",
          { lineHeight: "1.4706", fontWeight: "500" },
        ],
        "apple-heading-sm": [
          "21px",
          { lineHeight: "1.4706", fontWeight: "500" },
        ],
        "apple-body-lg": ["17px", { lineHeight: "1.4706", fontWeight: "400" }],
        "apple-body-md": ["15px", { lineHeight: "1.4706", fontWeight: "400" }],
        "apple-body-sm": ["13px", { lineHeight: "1.4706", fontWeight: "400" }],
        "apple-caption": ["12px", { lineHeight: "1.4706", fontWeight: "400" }],
      },
      spacing: {
        // Toss Spacing
        "toss-xs": "4px",
        "toss-sm": "8px",
        "toss-md": "16px",
        "toss-lg": "24px",
        "toss-xl": "32px",
        "toss-2xl": "48px",
        "toss-3xl": "64px",
        "toss-4xl": "96px",
        "toss-5xl": "128px",

        // Apple Spacing
        "apple-xs": "2px",
        "apple-sm": "4px",
        "apple-md": "8px",
        "apple-lg": "16px",
        "apple-xl": "24px",
        "apple-2xl": "32px",
        "apple-3xl": "48px",
        "apple-4xl": "64px",
        "apple-5xl": "96px",
        "apple-6xl": "128px",
      },
      borderRadius: {
        // Toss Border Radius
        "toss-sm": "4px",
        "toss-md": "8px",
        "toss-lg": "12px",
        "toss-xl": "16px",
        "toss-2xl": "24px",

        // Apple Border Radius
        "apple-sm": "2px",
        "apple-md": "6px",
        "apple-lg": "10px",
        "apple-xl": "14px",
        "apple-2xl": "18px",
        "apple-3xl": "22px",
      },
      boxShadow: {
        // Toss Shadows
        "toss-sm": "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        "toss-base":
          "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        "toss-md":
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        "toss-lg":
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        "toss-xl":
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        "toss-2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",

        // Apple Shadows
        "apple-sm": "0 1px 1px rgba(0, 0, 0, 0.06)",
        "apple-base":
          "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
        "apple-md":
          "0 3px 6px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.12)",
        "apple-lg":
          "0 10px 20px rgba(0, 0, 0, 0.15), 0 3px 6px rgba(0, 0, 0, 0.10)",
        "apple-xl":
          "0 15px 25px rgba(0, 0, 0, 0.15), 0 5px 10px rgba(0, 0, 0, 0.05)",
        "apple-2xl": "0 20px 40px rgba(0, 0, 0, 0.20)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
        "bounce-gentle": "bounceGentle 2s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        bounceGentle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      maxWidth: {
        "toss-container": "1200px",
        "apple-container": "1440px",
      },
    },
  },
  plugins: [],
};

export default config;
