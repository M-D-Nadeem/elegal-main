/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      scale: {
        200: "2",
      },
      backgroundImage: {
        ellipse: "url('/public/img/e1.png')",
      },
      colors: {
        navbar: "#00122d",
        lsp: "#3787ff",
        "edit-profile": "#0d346d",
        "card-btn": "#0d346d",
        card: "#f0f0f5",
        "service-search": "#dadfe8",
        bluebg: "#00122d",
        skyblue: "#90bdff",
        sidenav: "#00183c",
        "hot-blue": "#012d6f",
        majblue: "#003f9e",
      },
      height: {
        "user-profile-panel-mobile": "44rem",
        "user-profile-panel-desktop": "40rem",
        footer: "32rem",
        200: "50rem",
        248: "62rem",
      },
      margin: {
        "pc-content": "44rem",
        "mobile-content": "54rem",
      },
      screens: {
        "3xl": "1792px",
        "4xl": "2048px",
      },
    },
    plugins: [require("tailwind-scrollbar")],
  },
};
