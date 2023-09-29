/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: { 
          0: "#EDF4FF",
          1: "#1D5ECD",
          2: "#D0E1FF",
          3: "#037092",
          4: "#D1DDFF",
          5: "#1D4ED8"   
        },
        secondary: { 
          0: "#D9D9D9",
          1: "#D7E5FD",
          2: "#9AA6AC",
          3: "#F8F8F8"
        },
        errorColor: {
          0: "#A80000"
        }
      },

      boxShadow: {
        "custom-shadow": "0 1px 18px 0 rgba(0, 0, 0, 0.12)",
        "custom-shadow2": "0px 4px 25px 0px rgba(29, 78, 216, 0.05)",
      },
    },
  },
  plugins: [],
};
