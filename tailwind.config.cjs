const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"
  ],
  theme: {
    colors: {
      black: "hsl(224, 37%, 7%)",
      blue: "hsl(224, 40%, 43%)",
      orange: "hsl(15, 73%, 57%)",
      white: "hsl(224, 0%, 100%)"
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
