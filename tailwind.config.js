/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{js,jsx,ts,tsx}"],
   theme: {
      colors: {
         bg: "#2c3e50",
         text: "#ecf0f1",
         green: "#27ae60",
         red: "#e74c3c",
         blue: "#2980b9",
         cardbg: "#f1f1f1",
      },
      extend: {
         animation: {
            "scale-up-top": "scale-up-top 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
         },
         keyframes: {
            "scale-up-top": {
               "0%": {
                  transform: "scale(0.5)",
                  "transform-origin": "50% 0%",
               },
               "100%": {
                  transform: "scale(1)",
                  "transform-origin": "50% 0%",
               },
            },
         },
      },
   },
   plugins: [],
};
