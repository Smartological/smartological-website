const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"
  ],
  theme: {
    colors: {
      black: "hsl(218, 100%, 4%)",
      blue: "hsl(218, 100%, 41%)",
      orange: "hsl(27, 100%, 49%)",
      white: "hsl(218, 0%, 100%)"
    },
    extend: {}
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        html: {
          "font-family": "'Crimson Pro', serif;",
          "font-size": "131.25%"
        },
        strong: {
          "font-weight": "500"
        }
      });
    }),
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".fill-nonzero": {
          "fill-rule": "nonzero"
        }
      });
    })
  ]
};
