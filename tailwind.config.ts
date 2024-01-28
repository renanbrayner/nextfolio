import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "shiftaround-1": {
          "0%": {
            left: "-200px",
            top: "0px",
            background: "#A0A",
            transform: "rotate(0deg) scale(0.5)",
          },
          "25%": {
            left: "200px",
            top: "-30px",
            background: "#0AF",
            transform: "rotate(90deg) scale(0.75)",
          },
          "50%": {
            left: "500px",
            top: "50px",
            background: "#08F",
            transform: "rotate(180deg) scale(1)",
          },
          "75%": {
            left: "100px",
            top: "100px",
            background: "#0F8",
            transform: "rotate(270deg) scale(0.75)",
          },
          "100%": {
            left: "-200px",
            top: "0px",
            background: "#A0A",
            transform: "rotate(360deg) scale(0.5)",
          },
        },
        "shiftaround-2": {
          "0%": {
            left: "-250px",
            top: "-150px",
            background: "#0A4",
            transform: "rotate(0deg) scale(0.5)",
          },
          "25%": {
            left: "0px",
            top: "-180px",
            background: "#08F",
            transform: "rotate(-90deg) scale(0.75)",
          },
          "50%": {
            left: "200px",
            top: "50px",
            background: "#0AF",
            transform: "rotate(-180deg) scale(1)",
          },
          "75%": {
            left: "-40px",
            top: "55px",
            background: "#80F",
            transform: "rotate(-270deg) scale(0.75)",
          },
          "100%": {
            left: "-250px",
            top: "-150px",
            background: "#0A4",
            transform: "rotate(-360deg) scale(0.5)",
          },
        },
        "shiftaround-3": {
          "0%": {
            left: "450px",
            top: "-200px",
            background: "#39F",
            transform: "rotate(0deg) scale(1)",
          },
          "25%": {
            left: "0px",
            top: "-120px",
            background: "#0A8",
            transform: "rotate(90deg) scale(1.5)",
          },
          "50%": {
            left: "-190px",
            top: "30px",
            background: "#04F",
            transform: "rotate(180deg) scale(1.75)",
          },
          "75%": {
            left: "140px",
            top: "200px",
            background: "#044",
            transform: "rotate(270deg) scale(1.5)",
          },
          "100%": {
            left: "450px",
            top: "-200px",
            background: "#39F",
            transform: "rotate(360deg) scale(1)",
          },
        },
        "shiftaround-4": {
          "0%, 100%": { left: "-200px", top: "0px", background: "#0aa" },
          "25%": { left: "100px", top: "200px", background: "#04F" },
          "50%": { left: "500px", top: "50px", background: "#0A4" },
          "75%": { left: "200px", top: "-30px", background: "#40F" },
        },
        "shiftaround-5": {
          "0%": {
            left: "-250px",
            top: "-150px",
            background: "#40F",
            transform: "rotate(0deg) scale(0.5)",
          },
          "25%": {
            left: "-40px",
            top: "55px",
            background: "#00A",
            transform: "rotate(-90deg) scale(0.75)",
          },
          "50%": {
            left: "200px",
            top: "150px",
            background: "#04F",
            transform: "rotate(-180deg) scale(1)",
          },
          "75%": {
            left: "0px",
            top: "-180px",
            background: "#0A4",
            transform: "rotate(-270deg) scale(0.75)",
          },
          "100%": {
            left: "-250px",
            top: "-150px",
            background: "#40F",
            transform: "rotate(-360deg) scale(0.5)",
          },
        },
        "shiftaround-6": {
          "0%, 100%": { left: "450px", top: "-200px", background: "#a4F" },
          "25%": { left: "140px", top: "300px", background: "#a0F" },
          "50%": { left: "-190px", top: "30px", background: "#04F" },
          "75%": { left: "0px", top: "-120px", background: "#0A4" },
        },
      },
      animation: {
        "shiftaround-1": "shiftaround-1 1s linear infinite",
        "shiftaround-2": "shiftaround-2 1s linear infinite",
        "shiftaround-3": "shiftaround-3 1s linear infinite",
        "shiftaround-4": "shiftaround-4 1s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
